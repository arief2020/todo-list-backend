// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config()
// const app = express();
// const port = process.env.APP_PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello Express!");
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require("express");
const morgan = require("morgan");
const router = require("./router/index");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(router);
app.use(errorHandler);

module.exports = app;