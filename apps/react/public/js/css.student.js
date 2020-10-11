/* global document, ReactDOM, styled */
const Bullet = styled.li`
  ${props => props.colour === 'red' ? 'color: red;' : 'black'}
  font-weight: bold;
`; // const BlueParagraph = styled.p`
//   padding: 4em;
//   background: blue;
// `;

const Underline = {
  fontSize: "20px",
  fontWeight: "lighter",
  borderBottom: "1px dotted red"
};

const PrettyHello = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(Bullet, {
  style: {
    'font-weight': 'bold'
  }
}, "This first bullet should be bold/strong"), /*#__PURE__*/React.createElement(Bullet, {
  colour: "red",
  style: Underline
}, "Red 20pt font with a dotted underline"), /*#__PURE__*/React.createElement(Bullet, {
  style: {
    'color': 'blue',
    'font-size': '20px'
  }
}, "Blue 20pt font"), /*#__PURE__*/React.createElement(Bullet, {
  style: {
    'font-size': '20px'
  }
}, "Normal 20pt font"), /*#__PURE__*/React.createElement(Bullet, {
  colour: "red",
  style: Underline
}, "Red 20pt font with a dotted underline"), /*#__PURE__*/React.createElement(Bullet, {
  colour: "red",
  style: {
    'font-weight': 'lighter'
  }
}, "Red text")));

ReactDOM.render( /*#__PURE__*/React.createElement(PrettyHello, null), document.querySelector('#root'));