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

const Form = ({ children }) => (
  <form>
    <h4>React DOM events</h4>
    {children}
  </form>
);

const Input = () => (
  <>
    <span>Keyboard events</span>
    &nbsp;
    <input
      type="text"
      onKeyDown={logDown}
      onKeyUp={logUp}
      onKeyPress={() => {
        console.log('Keyboard event press');
      }}
      onFocus={() => {
        console.log('Focus');
      }}
      onBlur={() => {
        console.log('Blur');
      }}
    />
  </>
);

ReactDOM.render(<Form><Input /></Form>, document.getElementById('root'));
