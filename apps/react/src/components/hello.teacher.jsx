/* global document, ReactDOM */
/* Stackblitz
import React from 'react';
import ReactDOM from 'react-dom';
*/
const Hello = ({ name }) => (
  <div>Call {name}</div>
);
const YouMightLike = ({
  name,
  telephone,
  avatar,
  websiteUrl,
}) => (
  <>
    <div>{`Call ${name} by telephone at ${telephone}`}</div>
    <a href={websiteUrl}>
      <img src={avatar} alt={name} />
    </a>
  </>
);

ReactDOM.render( // one element to render switch to a Fragment <></>
  <>
    <Hello name="Dan BROOKS" />
    <YouMightLike
      name="Dan BROOKS"
      telephone="604-555-5555"
      avatar="https://www.patriciahotel.ca/wp-content/uploads/2016/07/Depositphotos_16996831_l-2015.jpg"
    />
    <YouMightLike
      name="VanArts"
      telephone="604 682 ARTS (2787)"
      avatar="https://pbs.twimg.com/profile_images/1269108249401294851/SRHWQpwK_400x400.jpg"
      websiteUrl="https://www.vararts.com"
    />
  </>,
  document.getElementById('root'),
);
