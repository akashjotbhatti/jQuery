function attr() {
  $('h1').attr('style', 'color: red');

  // TODO inclass: Change the href attribute
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    attr,
  };
}
