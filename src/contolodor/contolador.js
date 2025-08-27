
const { pool } = require("./db")


const listartarefas = async (req, res) => {
    const resultado = await pool.query("SELECT * FROM tarefas")
    return res.send(resultado.rows)
    console.log(resultado)
}

module.exports = {
    listartarefas
}