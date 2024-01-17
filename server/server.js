const PORT = process.env.PORT ?? 8000
const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send("hello")
})

app.get("/user/:userEmail", async (req, res) => {
  const { userEmail } = req.params
  console.log(userEmail)
  try {
    const user = await pool.query("SELECT * FROM utilisateurs WHERE email=$1", [
      userEmail,
    ])
    res.json(user.rows)
    console.log()
  } catch (error) {
    console.error(error)
  }
})

app.get("/product", async (req, res) => {
  try {
    products = await pool.query("SELECT * FROM montres")
    res.json(products.rows)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
