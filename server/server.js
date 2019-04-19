const express = require("express")
const path = require("path")

const app = express()
const port = 3000
const publicPath = path.resolve(__dirname, "../dist/")

app.use(express.static(publicPath))

app.listen(port, () => console.log("Server started.."))