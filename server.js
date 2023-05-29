const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, respond) => {
    respond.send("hello");
});

app.listen(port, () => console.log(`App started in port ${port}`));