/* global colours, document, ReactDOM */
const Rainbow = () => {
  const colourNames = Object.keys(colours);

  const transformToBullets = (currentValue, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    style: {
      backgroundColor: currentValue
    }
  }, currentValue);

  const colouredHtml = colourNames.map(transformToBullets);
  return /*#__PURE__*/React.createElement("ul", null, colouredHtml);
};

ReactDOM.render( /*#__PURE__*/React.createElement(Rainbow, null), document.getElementById('root'));