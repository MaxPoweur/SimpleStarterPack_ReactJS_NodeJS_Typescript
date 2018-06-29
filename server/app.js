const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/hello', (req, res) => {
    res.send({
        content: 'Hi there !'
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));