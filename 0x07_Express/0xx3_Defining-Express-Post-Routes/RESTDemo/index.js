const express = require("express");
const app = express();

/**
 * CRUD FUNCTIONALITY WITH REST
 * ============================ 
 *  GET /comments - list all omments
 *  POST /comments - Create a new comment
 *  GET /comments/:id - Get one comment (Using ID)
 *  PATCH /comments
 */


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get("/tarcos", (req, res) => {
    res.send("GET /tarcos response");
})
app.post("/tarcos", (req, res) => {
    res.send("GET /tarcos post response");
})

app.set

