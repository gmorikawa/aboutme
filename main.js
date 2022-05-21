const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const profileRouter = require('./routes/profile');
const userRouter = require('./routes/user');

// SERVER CONFIGS
const port = 3000;

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/p', profileRouter);
app.use('/u', userRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});