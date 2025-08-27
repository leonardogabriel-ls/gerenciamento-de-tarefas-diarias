const express = require('express')
const rotas = express()
const { listartarefas } = require("../contolodor/contolador")
rotas.get('/', (req, res) => {
    res.send("bem  bbbb")
})

rotas.post('/tarefas', (req, res) => {
    res.send("criar tarefas")
})

rotas.get('/tarefas', listartarefas)

rotas.get('/tarefas/:id', (req, res) => {
    res.send(`lista uma tarefa com o id ${req.params.id}`)
})

rotas.put('/tarefas/:id', (req, res) => {
    res.send(`tarefas atualizada`)
})

rotas.delete('/deletar/:id', (req, res) => {
    res.send(`tarefa deletada`)
})
module.exports = {
    rotas
}