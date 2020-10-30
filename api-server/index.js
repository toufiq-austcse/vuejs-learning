const data = require('./data.json');
const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3000

app.get('/items', (req, res) => {
    res.send(data);
});
app.get('/items/:id', (req, res) => {
    let id = req.params.id;
    let index = data.findIndex(it => parseInt(it.id) === parseInt(id));
    if (index == -1) {
        res.status(404).send({
            message: 'Not FOund'
        })
    } else {
        res.send(data[index]);
    }
});

app.get('/search/:keyword', (req, res) => {
    let keyword = req.params.keyword;
    let items = data.filter((item) => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    res.send(items);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});