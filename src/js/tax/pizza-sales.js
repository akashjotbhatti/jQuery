function pizzaSalesJS(canadianTax) {
  const provinces = Object.values(canadianTax.provinces);
  const provincesNames = provinces.map((province) => province.name);
  console.log(provincesNames);
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
