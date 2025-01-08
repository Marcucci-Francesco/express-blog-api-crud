const express = require('express');
const postsRouter = require('./routers/routerPosts');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
})

app.use('/routerPosts', postsRouter);

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
})