/* global document, ReactDOM */

/* Stackblitz
import React from 'react';
import ReactDOM from 'react-dom';
*/
const YouMightLike = ({
  name,
  telephone,
  avatar,
  website
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, `Call ${name} by telephone at ${telephone}`), /*#__PURE__*/React.createElement("a", {
  href: website
}, /*#__PURE__*/React.createElement("img", {
  src: avatar,
  alt: name
}))); // TODO inclass: As a user, I want to tab on the avatar image to visit a website.
// The website URL should be defined for each You Might Like instance


ReactDOM.render(
/*#__PURE__*/
// one element to render switch to a Fragment <></>
React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(YouMightLike, {
  name: "Dan BROOKS",
  telephone: "604-555-5555",
  avatar: "https://www.patriciahotel.ca/wp-content/uploads/2016/07/Depositphotos_16996831_l-2015.jpg",
  website: "https://vancouver.ca/"
}), /*#__PURE__*/React.createElement(YouMightLike, {
  name: "VanArts",
  telephone: "604 682 ARTS (2787)",
  avatar: "https://pbs.twimg.com/profile_images/1269108249401294851/SRHWQpwK_400x400.jpg",
  website: "https://www.vanarts.com/"
})), document.getElementById('root'));