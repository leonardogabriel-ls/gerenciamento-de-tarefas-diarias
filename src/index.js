const express = require('express')
const { rotas } = require('./rotas/rotas')
const app = express()
const porta = 3000
app.use(rotas)

app.listen(porta, () => {
    console.log(`exemple app listening on porta ${porta}`)
})