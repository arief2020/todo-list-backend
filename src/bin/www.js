const app = require("../index");
const dotenv = require("dotenv");

dotenv.config()
const port = process.env.APP_PORT || 3001;

app.listen(port, () => {
  console.log(`app running in port ${port}`);
});
