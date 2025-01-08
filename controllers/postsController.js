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
  console.log(req.body);
  
  const id = posts.at(-1).id + 1;

  const newPost = {
    id,
    ...req.body
  };

  posts.push(newPost);
  res.status(201);

  res.json(posts);
};

//Update
const update = (req, res) => {
  console.log(req.body);

  const id = parseInt( req.params.id);
  const newpPostUpdate = posts.find(post => post.id === id);

  for (let key in req.body){
    newpPostUpdate[key] = req.body[key]
  };
  
  res.json(newpPostUpdate);
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