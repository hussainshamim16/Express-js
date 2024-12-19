const express = require('express');
const app = express();
const PORT = 7000;

app.get('/', (req, res) => {
    res.send("I Am Full Stack todo App")
})

app.listen(PORT, () => {
    console.log(`port is working at ${PORT}`)
})