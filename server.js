import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(cors())
app.use(express.json())

const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 70 },
    { id: 3, name: "Product 3", price: 50 },
]

app.get("/products", (req, res) => {
    res.json(products)
})

app.listen(5000,()=>console.log("Server Started"))