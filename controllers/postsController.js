const posts = require('../data/posts');

//Index
const index = (req, res) => {
  const {tags} = req.query;
  
  const filteredPosts = tags ? posts.filter(post => post.tags.includes(tags)) : posts;

  res.json(filteredPosts);
};

//Show
const show = (req, res) =>{
  const id = req.params.id
  const post = posts.find(post => post.id == id);

  if (!post){
    res.status(404);
    return res.json({
      message: 'post non trovato',
      status: 404,
      error: 'Not Found'
    })
  }

  res.json(post);
};

//Store
const store = (req, res) => {
  res.send('Creo un nuovo post')
};

//Update
const update = (req, res) => {
  res.send("Modifica dell'intero elemento con id =" + req.params.id)
};

//Modify
const modify = (req, res) => {
  res.send("Modifica parziale dell'elemento con id =" + req.params.id)
};

//Destroy
const destroy = (req, res) => {
  const id = req.params.id;
  
  const post = posts.find(post => post.id == id);

  if (!post){
    res.status(404)
    return res.json({
      message: 'post non trovato',
      status: 404,
      error: 'Not Found'
    })
  }

  posts.splice(posts.indexOf(post), 1);
  res.sendStatus(204);

  console.log(posts);

};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};