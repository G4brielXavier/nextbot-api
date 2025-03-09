// EXPORTS
const express = require('express')
const cors = require('cors')
const nextbots = require("./nextbots")

// INSTANCE
const app = express()

app.use(cors())
app.use(express.json())

app.use("/images", express.static("images"))
app.use("/audios", express.static("audios"))

// To get nextbots
app.get("/nextbots", (req, res) => {
    res.json(nextbots)
})

// To get one specific nextbot
app.get("/nextbots/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.json(nextbots[id])
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Success! or not, Run now!! They're coming`)
})