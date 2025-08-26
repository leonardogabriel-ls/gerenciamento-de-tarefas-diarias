const express = require('express')
const rotas = express()

rotas.get('/', (req, res) => {
    res.send("bem  bbbb")
})



module.exports = {
    rotas
}