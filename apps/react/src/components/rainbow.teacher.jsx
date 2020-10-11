/* global colours, document, ReactDOM */

const Rainbow = () => {
  const colourNames = Object.keys(colours);
  const transformToBullets = (currentValue, index) => (
    <li key={index} style={{ backgroundColor: currentValue }}>{currentValue}</li>
  );

  const colouredHtml = colourNames.map(transformToBullets);

  return (<ul>{colouredHtml}</ul>);
};

ReactDOM.render(
  <Rainbow />,
  document.getElementById('root'),
);
