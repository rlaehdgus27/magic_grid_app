const express = require("express");
const morgan = require("morgan");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv").config();
const db = require("./models");

const imgRouter = require("./routers/imgRouter");

const PORT = process.env.PORT;
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("Mysql Database Connect");
  })
  .catch(console.error);

app.set("trust proxy", 1);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: [process.env.DEV_FROND_URL, "*"],
      credentials: true,
    })
  );
} else {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
  app.use(
    cors({
      origin: [process.env.PROD_FROND_URL, "*"],
      credentials: true,
    })
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SCRECT));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    proxy: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      // domain: "",
    },
  })
);

app.get("/", (req, res) => {
  res.send("WEB SERVER WITH EXPRESS FRAMEWORK");
});

app.use("/api/img", imgRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} SERCER START`);
});
