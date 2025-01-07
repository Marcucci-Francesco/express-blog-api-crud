const posts = require('../data/posts');

//Index
const index = (req, res) => {
  res.json(posts);
};

//Show
const show = (req, res) =>{
  const id = req.params.id
  const post = posts.find(post => post.id == id);

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