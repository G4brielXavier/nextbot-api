const express = require('express')
const cors = require('cors')
const nextbots = require("./nextbots")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/images", express.static("images"))
app.use("/audios", express.static("audios"))


app.get("/nextbots", (req, res) => {
    res.json(nextbots)
})

app.get("/nextbots/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.json(nextbots[id])
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})