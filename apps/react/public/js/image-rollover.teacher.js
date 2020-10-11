/* global document, ReactDOM */
const setImageSource = (image, attrName) => {
  const imagePath = image.getAttribute(attrName);
  image.setAttribute('src', imagePath);
};

const hoverIn = event => {
  // store original image source as state
  const primarySrc = event.target.getAttribute('src');
  event.target.setAttribute('data-primary', primarySrc);
  setImageSource(event.target, 'data-secondary');
};

const hoverOut = event => {
  setImageSource(event.target, 'data-primary');
};

const handleClick = event => {
  setImageSource(event.target, 'data-tertiary');
}; // reusable component with dynamic prop(erties)


const Image = ({
  alt,
  primary,
  secondary,
  tertiary
}) => /*#__PURE__*/React.createElement("button", {
  onMouseOver: hoverIn,
  onFocus: hoverIn,
  onMouseOut: hoverOut,
  onBlur: hoverOut,
  onClick: handleClick,
  onKeyDown: handleClick,
  tabIndex: 0,
  type: "button"
}, /*#__PURE__*/React.createElement("img", {
  alt: alt,
  src: primary,
  "data-secondary": secondary,
  "data-tertiary": tertiary,
  width: "300",
  height: "250"
}));

ReactDOM.render([/*#__PURE__*/React.createElement(Image, {
  key: "gastown",
  alt: "Gastown, Vancouver",
  secondary: "images/gastown-umbrellas.jpg",
  primary: "images/gastown-empty.png",
  tertiary: "images/seabus.jpg"
}), /*#__PURE__*/React.createElement(Image, {
  key: "seabus",
  alt: "Seabus, Vancouver",
  secondary: "images/seabus.jpg",
  primary: "images/seabus-walkway.jpg",
  tertiary: "images/gastown-umbrellas.jpg"
})], document.getElementById('root'));