/* global document, fetch, React, ReactDOM */
const Flickr = () => {
  // React will re-render when state changes
  const [sources, setSources] = React.useState([]);

  const getFlickrPhotos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/flickr');
      const result = await response.json();
      const images = result.items.map(item => ({
        src: item.media.m
      }));
      setSources(images);
    } catch (error) {
      console.error(error);
    }
  }; // effect will execute on component render


  React.useEffect(() => {
    getFlickrPhotos();
  }, []); // React needs a key for repeating JSX elements for record keeping

  let bullets = sources.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.src
  }, /*#__PURE__*/React.createElement("img", {
    src: item.src,
    alt: "Hosted by Flickr"
  })));

  if (bullets.length === 0) {
    bullets = /*#__PURE__*/React.createElement("li", null, "Unable to display photos hosted by Flickr");
  }

  return /*#__PURE__*/React.createElement("ul", null, bullets);
};

ReactDOM.render( /*#__PURE__*/React.createElement(Flickr, null), document.getElementById('root'));