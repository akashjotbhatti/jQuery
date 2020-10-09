// input {
//    attendance: 100.0,
//    homework: calculatePercent([[12,12], [14,14]]),
//    final: calculatePercent([[10,10], [6,6], [3,3], [4,4], [4,4]])
// }
// output 100%
function getApiCoursePercent(params = {}) {
  const {
    attendance: attendanceMarkOf100 = 100,
    homework: homeworkMarkOf100 = 0,
    final: finalMarkOf100 = 0,
  } = params;
  const attendanceWeight = ((attendanceMarkOf100 / 100) * (1 / 3) * 100);
  const homeworkWeight = ((homeworkMarkOf100 / 100) * (27 / 100) * 100);
  const finalWeight = ((finalMarkOf100 / 100) * (4 / 10) * 100);

  return Math.round(attendanceWeight + homeworkWeight + finalWeight);
}

function getJqueryCoursePercent(skillMarkOf100, attendanceMarkOf100 = 100) {
  const skills = ((skillMarkOf100 / 100) * (2 / 3) * 100);
  const attendance = ((attendanceMarkOf100 / 100) * (1 / 3) * 100);

  return Math.round(skills + attendance);
}

// input [[1,2], [8,16]]
// output 50%
function calculatePercent(marks) {
  const [earned, total] = marks.reduce((accumulator, mark) => [
    accumulator[0] + mark[0],
    accumulator[1] + mark[1],
  ], [0, 0]);

  return Math.round((earned / total) * 100);
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    getApiCoursePercent,
    getJqueryCoursePercent,
    calculatePercent,
  };
}

function getDateDay(date) {
  const d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

function getDateStart(date) {
  return `${getDateDay(date)} 09:00:00`;
}

function getDateEnd(date) {
  return `${getDateDay(date)} 12:17:00`;
}

function getDateEndLong(date) {
  return `${getDateDay(date)} 12:35:00`;
}

function createCourseSchedule(courseTitle = 'Dan\'s class') {
  const classes = [];
  const weeklyClassInterval = Array(11).fill(7);
  let classCount = weeklyClassInterval.length;
  let betweenClasses = weeklyClassInterval;
  let nextDate = new Date();

  const course = {
    getAllClasses: () => {
      while (betweenClasses.length > 0) {
        classes.push(course.getNextClass());
      }

      return classes;
    },
    getNextClass: () => {
      const day = getDateDay(nextDate);
      const start = getDateStart(nextDate);
      const end = (courseTitle === 'API') ? getDateEndLong(nextDate) : getDateEnd(nextDate);
      const title = `${courseTitle} ${(classCount - betweenClasses.length) + 1}`;

      const daysNextClass = betweenClasses.splice(0, 1);
      nextDate.setHours(24 * daysNextClass);

      return {
        title, day, start, end,
      };
    },
    setDaysBetweenClasses: (between) => {
      classCount = between.length;
      betweenClasses = Array.from(between);
      return course;
    },
    setFirstClassDate: (date) => {
      nextDate = new Date(date.getTime());
      return course;
    },
  };

  return course;
}

function courseCalendar() {
  const firstDateJq = new Date(2020, 8, 11); // Sep 11
  const courseJq = createCourseSchedule('jQuery')
    .setFirstClassDate(firstDateJq)
    .setDaysBetweenClasses([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]);

  const firstDateApi = new Date(2020, 11, 11); // Dec 11
  const courseApi = createCourseSchedule('API')
    .setFirstClassDate(firstDateApi)
    .setDaysBetweenClasses([7, 21, 7, 7, 7, 7, 7, 7, 7, 7]);
  const events = courseJq.getAllClasses().concat(courseApi.getAllClasses());

  // Update times specifically on weekend
  // events[1].start = '2019-04-06 10:30:00';
  // events[1].end = '2019-04-06 13:45:00';
  //
  // events[3].start = '2019-04-13 10:30:00';
  // events[3].end = '2019-04-13 13:45:00';

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek',
    },
    firstDay: 1, // Monday start
    defaultDate: getDateDay(new Date()),
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events,
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    courseCalendar,
    getDateDay,
    getDateStart,
    getDateEnd,
    createCourseSchedule,
  };
}

$('#demo li:first-child').css('font-weight', 'bold');
$('li.red.twenty').css({ 'font-size': '20px', 'border-bottom': '1px dotted red' });
$('li.blue.twenty').css({ 'font-size': '20px', color: 'blue' });
$('li.twenty').css('font-size', '20px');
$('li.red').css('color', 'red');
// this file needs a function, otherwise all HTML documents will execute this code
// see this teacher file https://github.com/VanArts/course-files/blob/master/src/js/basic-interaction/css.teacher.js
/* global document */
function clickLog() {
  console.log('You clicked on a hyperlink'); // eslint-disable-line no-console
}

function bindDom() {
  // Traditional event binding
  // document.querySelector('#click').onclick = clickLog;
  // Event handing with listeners
  document.querySelector('#click').addEventListener('click', clickLog);
  document.querySelector('#hover').addEventListener('mouseover', (event) => {
    // When CSS and JS can both apply the same styles, CSS wins with speed. Choose CSS
    // Only use JS over CSS when browser does not support the CSS rule(s)

    // JS is not logging
    console.log('Does this hover?'); // eslint-disable-line no-console
    event.preventDefault(); // cancel the page from jumping to the top
  });

  document.querySelector('#blur').addEventListener('focus', function erase() {
    this.value = 'Blur';
  });
  document.querySelector('#blur').addEventListener('blur', function restore() {
    this.value = 'Focus';
  });

  // TODO inclass, finish the remaining events keyboard, and submit.
  // TODO ask 2 Then the generic button needs a console log
  // hint: preventDefault is needed

  document.querySelector('#keyboard').addEventListener('keyup', () => {
    console.log('keyup');
  });
  document.querySelector('#keyboard').addEventListener('keydown', () => {
    console.log('keydown');
  });
  document.querySelector('#keyboard').addEventListener('keypress', () => {
    console.log('keypress');
  });
  document.querySelector('#submit').addEventListener('submit', (event) => {
    console.log('submitted');
    event.preventDefault();
  });
}

function events() {
  // triggered on load

  bindDom();
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    clickLog,
    events,
  };
}

/* global document */
function helloJquery() {
  // selector  method
  // Before <div id="demo"></div>
  // After <div id="demo">Text, HTML, or Inner HTML</div>
  $('#demo').text('Hello this is jQuery');
  document.querySelector('#demo').innerHTML = 'Hello this is plain JavaScript';
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    helloJquery,
  };
}
