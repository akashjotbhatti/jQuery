import Slack from '@slack/web-api';
import express from 'express';

import assessment from '../../../src/js/assessment.js';
import credentials from '../credentials.mjs';
import roster from '../student-roster.mjs';

const router = express.Router();
const port = 3030;

const slackMessagePerStudent = (studentId, isHomework) => {
  const student = roster.assessment.students[studentId];
  const finalOrHomework = isHomework ? 'homework' : 'final';
  const marks = student[finalOrHomework];
  const { latestNote } = student;
  const additionalNote = (latestNote) ? `Additional notes: ${latestNote}` : '';
  const docUrlStem = roster.assessment.course === 'api' ? 'social-apis' : 'jQuery';
  const studentName = studentId.replace('_', ' ');

  if (isHomework) {
    const message = `Hello ${studentName}
Class ${roster.assessment.classNumber} - Homework mark update ${JSON.stringify(marks)}
Your homework is calculated at ${assessment.calculatePercent(marks)}% for this course
Documentation https://github.com/VanArts/course-files/tree/master/public/${docUrlStem}#assessment
${additionalNote}`;

    return message;
  }

  const message = `Hello ${studentName}
Final project marks that will be submitted to My VanArts ${JSON.stringify(marks)}
Your final project is calculated at ${assessment.calculatePercent(marks)}% for this course
Documentation https://github.com/VanArts/course-files/blob/master/public/social-apis/final.md#assessment
${additionalNote}`;

  return message;
};

const sendSlackDirectMessage = (slack) => async ({ studentId, message }) => {
  const student = roster.assessment.students[studentId];
  // API doc https://api.slack.com/methods/chat.postMessage
  const { error } = await slack.chat.postMessage({
    text: message,
    channel: student.slackMemberId,
  });

  if (error) {
    return {
      error,
      message: `Slack Direct Message failed to ${studentId}`,
    };
  }

  return { message: `Slack Direct Message sent to ${studentId}:\n${message}`, studentId };
};

router.get('/send', async (request, response) => {
  try {
    if (!credentials || !credentials.slack || !credentials.slack.bot_access_token_secret) {
      throw new ReferenceError('Slack token missing');
    }

    // OAuth & Permissions
    // https://api.slack.com/apps/__APP_ID__/oauth
    const slack = new Slack.WebClient(credentials.slack.bot_access_token_secret);
    const sendDM = await sendSlackDirectMessage(slack);

    const queueMessage = (studentId) => {
      const isHomework = !(request.query.is_homework === 'false');
      const message = slackMessagePerStudent(studentId, isHomework);
      if (request.query.preview === 'false') {
        return sendDM({ studentId, message, sent: true });
      }

      return { studentId, message, sent: false };
    };

    const wantMessages = (studentId) => roster.assessment.students[studentId]
      .sendMessages !== false;
    const studentIds = Object.keys(roster.assessment.students).filter(wantMessages);
    const messages = await Promise.all(studentIds.map(queueMessage));

    response.send(messages);
  } catch (error) {
    response.send({ error: error.message });
  }
});

router.get('/report', (request, response) => {
  const showAssignments = request.query.assignments === 'true';
  const showFinal = request.query.final === 'true';
  const studentsOnly = (obj) => obj.student !== false;
  const outputPerStudent = ({ homework, final, name }) => ({
    studentName: name,
    skillPercent: `${assessment.calculatePercent(homework)}%`,
    assignments: showAssignments ? JSON.stringify(homework) : undefined,
    finalPercent: `${assessment.calculatePercent(final)}%`,
    final: showFinal ? JSON.stringify(final) : undefined,
  });

  const report = Object.values(roster.assessment.students)
    .filter(studentsOnly)
    .map(outputPerStudent);

  const { course, classNumber } = roster.assessment;
  const courseName = course === 'api' ? 'Third Party APIs' : 'jQuery & AJAX';

  response.send({
    course: courseName,
    classNumber,
    instructor: 'Dan BROOKS',
    reportDate: new Date().toISOString(),
    students: report,
  });
});

router.get('/newChannel', async (request, response) => {
  if (!credentials || !credentials.slack || !credentials.slack.bot_access_token_secret) {
    throw new ReferenceError('Slack token missing');
  }

  // TODO danctive switch this to bot permissions. maybe invite bot to channel?
  const slack = new Slack.WebClient(credentials.slack.oauth_access_token_secret);
  const slackBot = new Slack.WebClient(credentials.slack.bot_access_token_secret);
  const studentIds = Object.keys(roster.assessment.students);
  const memberIds = studentIds
    .filter((name) => roster.assessment.students[name].channelInvite !== false)
    .filter((name) => roster.assessment.students[name].slackMemberId)
    .map((name) => roster.assessment.students[name].slackMemberId);
  const channelStem = roster.assessment.course === 'api' ? 'api' : 'jquery';

  try {
    if (request.query.preview === 'false') {
      // https://api.slack.com/methods/conversations.create
      const { channel } = await slack.conversations.create({
        name: `vanarts-${channelStem}-web${roster.cohort}`,
        is_private: true,
      });

      // https://api.slack.com/methods/conversations.setTopic
      await slack.conversations.setTopic({
        channel: channel.id,
        topic: `${roster.conversation_welcome_message} (Cohort Web${roster.cohort})`,
      });
      // https://api.slack.com/methods/conversations.invite
      await slack.conversations.invite({
        channel: channel.id,
        topic: `${roster.conversation_welcome_message} (Cohort Web${roster.cohort})`,
        users: memberIds.join(','),
      });

      response.send({ channel: `https://app.slack.com/client/T0425RJBD/${channel.id}` });
      return;
    }

    // https://api.slack.com/methods/users.info
    const xhrUserInfo = (memberId) => slackBot.users.info({
      user: memberId,
    });
    const showRealName = (userResult) => userResult.user.real_name;
    const infoChecks = await Promise.all(memberIds.map(xhrUserInfo));

    response.send({
      confirmed_students: infoChecks.map(showRealName),
      action: `http://localhost:${port}/api/teacheraid/newChannel?preview=false`,
    });
  } catch (error) {
    response.send(error);
  }
});

export default router;
