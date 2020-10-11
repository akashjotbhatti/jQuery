const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public')); // no directory listing
app.use('/', (request, response) => {
  response.send(`<ol>
  <li><a href="/1hello.teacher.html">Hello World</a></li>
  <li><a href="/2css.teacher.html">Hello Pretty World (CSS-in-JS using Styled Components)</a></li>
  <li><a href="/3events.teacher.html">Events</a></li>
  <li><a href="/4image-rollover.teacher.html">Image Rollover</a></li>
  <li><a href="/5rainbow.teacher.html">Rainbow (Array.map)</a></li>
  <li><a href="/6sales-tax.teacher.html">Sales Tax (Array.map)</a></li>
  <li><a href="/7flickr.teacher.html">Flickr (useEffect)</a></li>
</ol>`);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`));
