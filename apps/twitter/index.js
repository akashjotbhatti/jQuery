const express = require('express');
const Twit = require('twit');

const credentials = require('./credentials.json');

const twitterClient = new Twit({
  consumer_key: credentials.twitter.consumer_key,
  consumer_secret: credentials.twitter.consumer_secret,
  access_token: credentials.twitter.access_token,
  access_token_secret: credentials.twitter.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const result = await twitterClient.get(
      'statuses/user_timeline',
      { screen_name: 'vanarts', count: 100 },
    );
    const out = result.data.map((tweet) => ({ date: tweet.created_at, text: tweet.text }));
    res.send(out);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`));
