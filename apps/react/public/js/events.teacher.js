/* global document, ReactDOM */

/* Stackblitz
import React from 'react';
import ReactDOM from 'react-dom';
*/
const logDown = () => {
  console.log('Keyboard event down');
};

const logUp = () => {
  console.log('Keyboard event up');
};

const Form = ({
  children
}) => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h4", null, "React DOM events"), children);

const Input = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Keyboard events"), "\xA0", /*#__PURE__*/React.createElement("input", {
  type: "text",
  onKeyDown: logDown,
  onKeyUp: logUp,
  onKeyPress: () => {
    console.log('Keyboard event press');
  },
  onFocus: () => {
    console.log('Focus');
  },
  onBlur: () => {
    console.log('Blur');
  }
}));

ReactDOM.render( /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Input, null)), document.getElementById('root'));