const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog)

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
    console.log(`APP is started at port ${PORT}`);
})

app.get("/", (req,res) => {
    res.send("This is Homepage baby")
})