/* global document, ReactDOM, styled */
const Bullet = styled.li`
  ${props => props.colour === 'red' ? 'color: red;' : 'black'}
  font-weight: bold;
`; // const BlueParagraph = styled.p`
//   padding: 4em;
//   background: blue;
// `;

const PrettyHello = () => /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(Bullet, null, "This first bullet should be bold/strong"), /*#__PURE__*/React.createElement(Bullet, {
  colour: "red"
}, "Red 20pt font with a dotted underline"));

ReactDOM.render( /*#__PURE__*/React.createElement(PrettyHello, null), document.querySelector('#root'));