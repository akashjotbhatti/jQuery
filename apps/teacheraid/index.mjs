import express from 'express';

import src from './src/index.mjs';

const app = express();
const port = 3030;

app.use('/api/teacheraid', src);
app.use('/', (request, response) => {
  response.send(`<ol>
  <li><a href="/api/teacheraid/report">Grade Report</a> <a href="/api/teacheraid/report?assignments=true">with Assignments<a/> <a href="/api/teacheraid/report?assignments=true&final=true">with Assignments & Final<a/></li>
  <li><a href="/api/teacheraid/send">Homework</a></li>
  <li><a href="/api/teacheraid/send?is_homework=false">Final project</a></li>
  <li><a href="/api/teacheraid/newChannel">Create a new Slack channel (will verify students)</a></li>
</ol>`);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`));
