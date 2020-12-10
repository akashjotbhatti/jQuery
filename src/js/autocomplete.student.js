/* global document */
function autocomplete() {
  document.querySelector('#country_keywords').addEventListener('keyup', (event) => {
    console.log('value=', event.key);
    const countries = document.querySelector('#country_suggestions');
    if (countries.style.display === 'block') {
      countries.style.display = 'none';
    } else {
      countries.style.display = 'block';
    }
  });

  $.ajax({
    url: '/api/autocomplete-student',
    success: (result) => {
      const html = result.items.map((country) => `<li>${country}</li>`).join('');
      document.querySelector('#country_suggestions').innerHTML = html;
    },
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    autocomplete,
  };
}
