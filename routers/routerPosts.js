const express = require('express');
const router = express.Router();

//Index
router.get('/', (req, res) => {
  res.send('Stampo tutti i post');
})

//Show
router.get('/:id', (req, res) =>{
  res.send('Stampo solo un post con id =' + req.params.id)
})

//Store
router.post('/', (req, res) => {
  res.send('Creo un nuovo post')
})

//Update
router.put('/:id', (req, res) => {
  res.send("Modifica dell'intero elemento con id =" + req.params.id)
})

//Modify
router.patch('/:id', (req, res) => {
  res.send("Modifica parziale dell'elemento con id =" + req.params.id)
})

//Destroy
router.delete('/:id', (req, res) => {
  res.send("Eliminazione dell'elemnto con id =" + req.params.id)
})

module.exports = router;