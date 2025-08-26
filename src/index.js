const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) => {
    res.send("bem  bbbb")
})

app.listen(porta, () => {
    console.log(`exemple app listening on porta ${porta}`)
})