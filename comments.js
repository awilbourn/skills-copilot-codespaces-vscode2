//create web server
const express = require('express');
const router = express.Router();

//create a route to get all comments
router.get('/', (req, res) => {
    res.send('GET /comments');
});

//create a route to get a comment by id
router.get('/:id', (req, res) => {
    res.send('GET /comments/:id');
});

//create a route to create a comment
router.post('/', (req, res) => {
    res.send('POST /comments');
});

//create a route to update a comment
router.put('/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

//create a route to delete a comment
router.delete('/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

module.exports = router;