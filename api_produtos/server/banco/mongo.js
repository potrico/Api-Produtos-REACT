const mongoose = require("mongoose");
const uri = "mongodb://admin:admin@localhost:27018/proutos?authSource=produtos";
mongoose.connect(uri, {});