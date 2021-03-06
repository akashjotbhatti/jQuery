const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');

const credentials = require('./credentials.json');

const app = express();
const port = 3000;

app.use(cors({
  origin: [ // Flickr express app grants permission to Course Files
    'http://localhost:3001', // react app
    'http://localhost:8080', // course-files
  ],
}));

app.get('/api', async (req, res) => {
  try {
    const serviceRoot = 'https://www.flickr.com/services/rest/';
    const keywords = 'vancouver+beaches';
    const query = `?method=flickr.photos.search&api_key=${credentials.flickr.api_key}&tags=${keywords}&format=json&nojsoncallback=1`;

    const serviceUrl = `${serviceRoot}${query}`;
    const response = await fetch(serviceUrl);
    const result = await response.json();

    // image url docs https://www.flickr.com/services/api/misc.urls.html
    const flickrImgPath = (image) => `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`;

    const images = result.photos.photo.map((photo) => ({
      caption: photo.title,
      src: flickrImgPath(photo),
    }));

    res.send({ images });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get('/feeds', async (req, res) => {
  try {
    const serviceUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=vancouver&format=json&nojsoncallback=1';
    const response = await fetch(serviceUrl);
    const result = await response.json();

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`));
