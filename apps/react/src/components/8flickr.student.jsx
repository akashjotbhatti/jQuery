/* global document, fetch, React, ReactDOM */
const Flickr = () => {
  const [src, setImage] = React.useState('Todo');

  // this side effect will execute for every commit phase (occurs after render phase)
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api-student');
      const result = await response.json();
      images = result.images.map(image => <li><img src={image.src}/></li>);
      setImage(images);
    }
    fetchData();
  }, []); // second argument determine when to update. Blank will only update once

  // render side effects (async) not allowed
  return (
    <ul>
      {src}
    </ul>
  );
};

ReactDOM.render(
  <Flickr />,
  document.getElementById('root'),
);
