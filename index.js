const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');
const port = process.env.PORT || 3000;

let myRouter = express.Router();
myRouter.get('/', (req, res) => {
    res.send('<h1>Hello World<h1>');
})

app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));