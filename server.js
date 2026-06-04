// //server.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// const app = express();
// app.use(cors());
// app.use(express.json());
// async function startServer() {
//   mongoose.connect("mongodb://localhost:27017/notesDB").then(() => {
//     app.listen(5000, () => console.log("Server Started"));
//   });
// }
// startServer();

// const noteSchema = new mongoose.Schema({
//   text: { type: String },
// });
// const noteModel = mongoose.model("Notes", noteSchema);

// app.get("/notes", async (req, res) => {
//   const notes = await noteModel.find();
//   res.json(notes);
// });
// app.post("/notes", async (req, res) => {
//   await noteModel.create(req.body);
//   res.json({ message: "Note added" });
// });
// app.delete("/notes/:id", async (req, res) => {
//   const { id } = req.params;
//   await noteModel.findByIdAndDelete(id);
//   res.json({ message: "Note deleted" });
// });

import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(cors())
app.use(express.json())

const productSchema = mongoose.Schema({
    name: { type: String },
    price: { type: Number }
})

const productModel = mongoose.model("products", productSchema)

const startServer = async () => {
    await mongoose.connect("mongodb://localhost:27017/mu26a")
    app.listen(5000, () => console.log("Server Started"))
}

startServer()

app.get("/products", async (req, res) => {
    const products = await productModel.find()
    res.json(products)
})



