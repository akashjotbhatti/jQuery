/* global document */
function pizzaSalesJS(canadianTax) {
  console.log(canadianTax.provinces.BC.name);

  const provinces = Object.values(canadianTax.provinces);
  const provincesNames = provinces.map((province) => province.name);
  const provincesTaxes = provinces.map((province) => province.taxes);
  console.log(provincesNames);

  document.write(provincesNames);

  const select = document.getElementById('provinces');
  const option = document.createElement('option');
  option.innerHTML = provincesNames;
  select.appendChild(option);

  option.addEventListener('click', () => {
    // console.log('clicked');
    console.log(provincesTaxes);
  });
}

function pizzaSalesJQ(canadianTax) {
  $.each(canadianTax.provinces, (provinceAbbr, province) => {
    console.log('Province name', province.name);
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    pizzaSalesJS,
    pizzaSalesJQ,
  };
}
