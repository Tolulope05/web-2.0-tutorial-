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

/**TO ILLUSTRATE DIFFERENCE BETWEEN POST AND GET REQUEST USING GETPOST.HTML  */
app.get("/tacos", (req, res) => {
    res.send("GET /tarcos response");
})
app.post("/tacos", (req, res) => {
    res.send("GET /tarcos post response");
    console.log(req.body);
})

/* An array to represent data that we will be fetchinf from */

const comments = [
    {
        username: "Tolulope",
        comment: "What kind of exercise do lazy people do? Diddly-squats"
    },
    {
        username: "Oluwayomi",
        comment: "What do you call a pony with a cough? A little horse!"
    },
    {
        username: "Uniben",
        comment: "Why did the M&M go to school? He wanted to be a Smartie."
    },
    {
        username: "Caleb George",
        comment: "What do you call bears with no ears? B"
    },
    {
        username: "French Bishop",
        comment: "Why do French people eat snails? They don't like fast food"
    },
    {
        username: "Genuis Boy",
        comment: "I invented a new word today: Plagiarism."
    }
]

app.get("/comments", (req, res) => {
    res.render('comments/index', { comments });
}); // Getting all comments

app.post("/new")
