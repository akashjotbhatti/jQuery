/* global clickLog */

function jqueryEvents() {
  $('#click').click((event) => {
    clickLog(event);
  });

  $('#hover').hover(() => {
    console.log('Hover in'); // eslint-disable-line no-console
  }, () => {
    console.log('Hover out'); // eslint-disable-line no-console
  });

  // TODO complete the remaining events blur/focus, keyboard, and submit
  // Bonus point add an event to the generic button
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    jqueryEvents,
  };
}
