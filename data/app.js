const express = reaquire('express');
const postsRouter = require('../routers/routerPosts');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello');
})

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
})