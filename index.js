const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")
const productRoute = require('./routes/product.route')

const app = express()

// middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes

app.use('/api/products', productRoute)



app.get("/", (req, res) => {
    return res.send("shivam mittal vikrambhai")
})

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({})
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })


// app.put('/api/products/:id', async (req, res) => {

//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body)

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" })
//         }

//         const updatedProduct = await Product.findById(id)
//         res.status(200).json(updatedProduct)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// })

// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" })
//         }

//         res.status(200).json({ message: "Product delete succesfully" })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })


mongoose.connect("mongodb+srv://shivam:Lgoserz3glswJkok@backend.kzxxxkl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("Connection succefully");

        app.listen(8000, () => console.log("Searver is stared"))
    })
    .catch((err) => {
        console.log("Connection feiled", err)
    })