/* global document, ReactDOM */
/* Stackblitz
import React from 'react';
import ReactDOM from 'react-dom';
*/

const YouMightLike = ({ name, telephone, avatar, website }) => (
    <>
      <div>{`Call ${name} by telephone at ${telephone}`}</div>
      <a href={website}><img src={avatar} alt={name} /></a>
    </>
  );

  // TODO inclass: As a user, I want to tab on the avatar image to visit a website.
  // The website URL should be defined for each You Might Like instance

  ReactDOM.render( // one element to render switch to a Fragment <></>
    <>
      <YouMightLike
        name="Dan BROOKS"
        telephone="604-555-5555"
        avatar="https://www.patriciahotel.ca/wp-content/uploads/2016/07/Depositphotos_16996831_l-2015.jpg"
        website="https://vancouver.ca/"
      />
      <YouMightLike
        name="VanArts"
        telephone="604 682 ARTS (2787)"
        avatar="https://pbs.twimg.com/profile_images/1269108249401294851/SRHWQpwK_400x400.jpg"
        website="https://www.vanarts.com/"
      />
    </>,
    document.getElementById('root'),
  );
