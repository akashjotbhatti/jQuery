/* global document, ReactDOM */

/* Stackblitz
import React from 'react';
import ReactDOM from 'react-dom';
*/
const Hello = ({
  name
}) => /*#__PURE__*/React.createElement("div", null, "Call ", name);

const YouMightLike = ({
  name,
  telephone,
  avatar,
  websiteUrl
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, `Call ${name} by telephone at ${telephone}`), /*#__PURE__*/React.createElement("a", {
  href: websiteUrl
}, /*#__PURE__*/React.createElement("img", {
  src: avatar,
  alt: name
})));

ReactDOM.render(
/*#__PURE__*/
// one element to render switch to a Fragment <></>
React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hello, {
  name: "Dan BROOKS"
}), /*#__PURE__*/React.createElement(YouMightLike, {
  name: "Dan BROOKS",
  telephone: "604-555-5555",
  avatar: "https://www.patriciahotel.ca/wp-content/uploads/2016/07/Depositphotos_16996831_l-2015.jpg"
}), /*#__PURE__*/React.createElement(YouMightLike, {
  name: "VanArts",
  telephone: "604 682 ARTS (2787)",
  avatar: "https://pbs.twimg.com/profile_images/1269108249401294851/SRHWQpwK_400x400.jpg",
  websiteUrl: "https://www.vararts.com"
})), document.getElementById('root'));