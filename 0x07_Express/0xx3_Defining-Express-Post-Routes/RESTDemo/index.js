const express = require("express");
const app = express();
const path = require("path")

/**
 * CRUD FUNCTIONALITY WITH RESTFUL APIS
 * ============================ 
 *  >> HTTP VERBS 
 *  GET /comments - list all omments
 *  POST /comments - Create a new comment
 *  GET /comments/:id - Get one comment (Using ID)
 *  PATCH /comments/:id - Update One Comment
 *  DELETE /comments/:id - Removw one comment
 */

app.use(express.urlencoded({ extended: true })) // Turns POST req.body from undefined to { meat: "'Chicken Beef'", qty: '5' }
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get("/tacos", (req, res) => {
    res.send("GET /tarcos response");
})
app.post("/tacos", (req, res) => {
    res.send("GET /tarcos post response");
    console.log(req.body)
})

app.set

