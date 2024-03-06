const mongoose = require("mongoose");

require("dotenv").config()

const dbConnect = (req, res) => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
        console.log("DB connection issue");
        console.log(error);
        process.exit(1);
    })
}

module.exports = dbConnect;