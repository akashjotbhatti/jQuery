/* global document */
function clickLog(event) {
  console.log('You clicked on a hyperlink'); // eslint-disable-line no-console
  event.preventDefault(); // cancel the page from jumping to the top
}

function bindDom() {
  // Traditional event binding
  // document.querySelector('#click').onclick = clickLog;

  // Event handing with listeners
  document.querySelector('#click').addEventListener('click', clickLog);
  document.querySelector('#hover').addEventListener('mouseover', () => {
    // When CSS and JS can both apply the same styles, CSS wins with speed. Choose CSS
    // Only use JS over CSS when browser does not support the CSS rule(s)

    // JS is not logging
    console.log('Does this hover?'); // eslint-disable-line no-console
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
  // SOLUTION
  document.getElementById('keyboard').addEventListener('keydown', () => {
    console.log('keydown');
  });
  document.getElementById('keyboard').addEventListener('keypress', () => {
    console.log('keypress');
  });
  document.getElementById('keyboard').addEventListener('keyup', () => {
    console.log('keyup');
  });
  document.querySelector('#submit').addEventListener('submit', (event) => {
    console.log('submitted');
    event.preventDefault(); // prevent form action from redirecting
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
