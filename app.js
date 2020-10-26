// Archivo de JS permmite hacer la definición de estructura a nivel de servidor
// Configuración de Rest Server (Orientacion de servicios Rest)

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const fileRoutes = require("./routes/file");
const relationRoutes = require("./routes/relation");
const tweetRoutes = require("./routes/tweet");
const userRoutes = require("./routes/user");


// app - express
const app = express();

// modern connection
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Connection Error', error);
    }
}

// execute db connection
db();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

/* routes middlewares */
app.use("/api", userRoutes)
app.use("/api", tweetRoutes)
app.use("/api", authRoutes)
app.use("/api", fileRoutes) 
app.use("/api", relationRoutes) 

// port
const port = process.env.PORT || 8000;

// listen port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

