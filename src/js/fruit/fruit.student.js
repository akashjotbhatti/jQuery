function fruit() {
  $.ajax({
    url: '/api/slow-fruit-student',
    success: (result) => {
      $.each(result, (fruitName, fruitColour) => {
        $('#fruits').append(`<li style="background: ${fruitColour};">${fruitName}</li>`);
      });
    },
  });
}

function fruitXml() {
  $.ajax({
    url: '/api/fruit-student?format=xml',
    success: (result) => {
      const fruitNodes = $(result).find('fruit');
      $.each(fruitNodes, (index, fruitNode) => {
        const colourName = $(fruitNode).text();
        const fruitName = $(fruitNode).attr('name');
        console.log(colourName);
        $('#fruits').append(`<li style="background: ${colourName};">${fruitName}</li>`);
      });
    },
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    fruit,
    fruitXml,
  };
}
