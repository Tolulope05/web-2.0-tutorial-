const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');


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
        id: uuidv4(),
        username: "Tolulope",
        comment: "What kind of exercise do lazy people do? Diddly-squats"
    },
    {
        id: uuidv4(),
        username: "Oluwayomi",
        comment: "What do you call a pony with a cough? A little horse!"
    },
    {
        id: uuidv4(),
        username: "Uniben",
        comment: "Why did the M&M go to school? He wanted to be a Smartie."
    },
    {
        id: uuidv4(),
        username: "Caleb George",
        comment: "What do you call bears with no ears? B"
    },
    {
        id: uuidv4(),
        username: "French Bishop",
        comment: "Why do French people eat snails? They don't like fast food"
    },
    {
        id: uuidv4(),
        username: "Genuis Boy",
        comment: "I invented a new word today: Plagiarism."
    }
]

app.get("/comments", (req, res) => {
    res.render('comments/index', { comments });
}); // read all comments 

app.get("/comments/new", (req, res) => {
    res.render('comments/new.ejs');
}) // Serves the form to create a new comment

app.post("/comments", (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() });
    res.redirect("/comments");
}) // Create a new comment

/**RESTFUL COMMENT SHOW */
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
}) // Read one comment

/**RESTFUL COMMENT UPDATE */
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments");
}); //update successfully

