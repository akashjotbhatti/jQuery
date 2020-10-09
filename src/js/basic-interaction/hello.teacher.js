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
