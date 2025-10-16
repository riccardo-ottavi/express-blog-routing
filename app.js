const express = require("express")
const app = express()
const port = 3000

//importa router
const blogRouter = require("./routers/posts")

app.use("/posts", blogRouter);

app.listen(port, () => {
    console.log("Example app listening on port", port)
})

app.get("/", (req, res) => {
    console.log("hai richiesto la home");

    res.send('<h1>Ecco la home della API del blog</h1>')
})