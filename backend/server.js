const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

app.use("/api/send-mail", require('./routes/api/catalog'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on post ${PORT}`));
