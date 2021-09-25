const express = require('express')

// setup app
const app = express()
const PORT = 8000

// sequelize
const sequelize = require('./config/config')

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
    sequelize.sync({ force: false })
})