/* global document */
function jquerySelectors() {
  // SOLUTION
  // CSS #demo li:first-child { font-weight: bold; }
  $('#demo li:first-child').css('font-weight', 'bold'); // recommended
  // $('#demo li:first-child').css({ 'font-weight': 'bold' }); // too much syntax
  document.querySelector('#demo li:first-child').style.fontWeight = 'bold'; // camelCase

  // CSS .red { color: red; }
  // $('.red').css('color', 'red');
  Array.from(document.querySelectorAll('.red')).forEach((tag) => {
    tag.style.color = 'red'; // eslint-disable-line no-param-reassign
  });

  // CSS .twenty { font-size: 20pt; }
  // $('.twenty').css('font-size', '20pt');
  Array.from(document.querySelectorAll('.twenty')).forEach((tag) => {
    tag.style.fontSize = '20pt'; // eslint-disable-line no-param-reassign
  });

  // CSS .blue { color: blue; }
  // $('.blue').css('color', 'blue');
  Array.from(document.querySelectorAll('.blue')).forEach((tag) => {
    tag.style.color = 'blue'; // eslint-disable-line no-param-reassign
  });

  // CSS .red.twenty { border-bottom-width: 1px; border-bottom-style: dotted; }

  // not ideal due to duplicated selector that causes the browser to scan
  // through our HTML elements twice
  // $('.red.twenty').css('border-bottom-width', '1px');
  // $('.red.twenty').css('border-bottom-style', 'dotted');

  // recommened jQuery css method accepts an object of CSS rules
  // $('.red.twenty').css({
  //   'border-bottom-width': '1px',
  //   'border-bottom-style': 'dotted',
  // });
  // recommened jQuery chaining may occur after a selector
  // $('.red.twenty')
  //   .css('border-bottom-width', '1px')
  //   .css('border-bottom-style', 'dotted');

  // recommened CSS shorthand
  $('.red.twenty').css('border-bottom', '1px dotted red');

  Array.from(document.querySelectorAll('.red.twenty')).forEach((tag) => {
    tag.style.borderBottom = '1px dotted red'; // eslint-disable-line no-param-reassign
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    jquerySelectors,
  };
}
