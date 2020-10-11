/* global document, ReactDOM, salesTaxData */

function calculateTotal(salesTax, price) {
  const currencyFormatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  if (salesTax && salesTax !== '' && price && price !== '') {
    const total = (price * salesTax) + parseFloat(price);
    return currencyFormatter.format(total);
  }
  return 'N/A';
}

function totalTax(taxes) {
  // combine federal and/or provincial sales tax into a total sales tax string
  if (taxes.length === 1) return taxes[0].tax;
  return parseFloat(taxes[0].tax + taxes[1].tax).toFixed(2);
}

function ProvinceOption({ name, taxes }) {
  return (
    <option key={name} value={totalTax(taxes)}>{name}</option>
  );
}

function handleChange() {
  const salesTax = document.querySelector('#provinces').value;
  const price = document.querySelector('#price').value;

  const total = calculateTotal(salesTax, price);

  // not best practice for React but acceptance as there are no eslint errors
  document.getElementById('pizzaCost').innerHTML = total;
}

const ProvinceDropdown = ({ provinces }) => {
  const options = Object.values(provinces).map(ProvinceOption);

  // add option instruction to first in list
  options.unshift(<option key="-1" value="">Choose your province</option>);

  return (
    <select onChange={handleChange} id="provinces">{options}</select>
  );
};

ReactDOM.render(
  <form>
    <ProvinceDropdown provinces={salesTaxData.provinces} />
    <label htmlFor="price">
      Pizza price
      <input type="number" id="price" min="0" step="any" required="required" onChange={handleChange} />
    </label>
    <span id="pizzaCost" />
  </form>,
  document.getElementById('root'),
);
