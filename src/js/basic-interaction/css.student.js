function jquerySelectors() {
  $('#demo li:first-child').css('font-weight', 'bold');
  $('li.red.twenty').css({ 'font-size': '20px', 'border-bottom': '1px dotted red' });
  $('li.blue.twenty').css({ 'font-size': '20px', color: 'blue' });
  $('li.twenty').css('font-size', '20px');
  $('li.red').css('color', 'red');
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    jquerySelectors,
  };
}

// this file needs a function, otherwise all HTML documents will execute this code
// see this teacher file https://github.com/VanArts/course-files/blob/master/src/js/basic-interaction/css.teacher.js
