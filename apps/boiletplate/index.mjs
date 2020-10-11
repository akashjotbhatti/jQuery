import express from 'express';

import src from './src/index.mjs';

const app = express();
const port = 3000;

app.use('/api', src);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`));
