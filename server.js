const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//load in all static css and js files so that the html files can access them later
app.use(express.static('public'))

//Home page, this is the page that will be viewed on start
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
})