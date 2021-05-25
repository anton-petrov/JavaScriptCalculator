const express = require('express');

const app = express();
let port = process.env.PORT; // для heroku

// локальный запуск
if (port == null || port == "") {
    port = 3000;
}

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
    // res.send('<b>hello</b>')
});

app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', { root: __dirname });
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
});

console.log('Веб-сервер запущен на порту ', port)
app.listen(port);
