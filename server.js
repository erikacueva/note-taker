const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// tells express where static assets are (CSS and front end JS and images)
app.use(express.static(path.join(__dirname,"/public")));

require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
