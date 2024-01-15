const PORT = process.env.PORT ?? 8000
const express = require("express")
const pool = require("./db")

const app = express()

app.get("/", (req, res) => {
  res.send("hello")
})

app.get("/product", async (req, res) => {
  try {
    products = await pool.query("SELECT * FROM product")
    res.json(products.rows)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
