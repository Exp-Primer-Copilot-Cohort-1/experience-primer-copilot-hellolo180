
// Create web server
const express = require('express');
const app = express();

// Create a route handler
app.get('/posts/:id/comments', (req, res) => {
    res.send('Hello');
});

// Start web server
app.listen(4001, () => {
    console.log('Listening on 4001');
});