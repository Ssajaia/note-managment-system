const routes = require("./routes/noteRoutes")
const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use("/note",routes)

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports= app
