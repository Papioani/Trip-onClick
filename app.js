const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors"); //  require, not import for backend
const tripsRouter = require("./routes/trips"); /* importing it !!!!!!!!!!!!!!!!!!! this is actually the api.js */
const locationsRouter = require("./routes/locations");
const tripsRoutesRouter = require("./routes/tripsRoutes");
const usersRouter = require("./routes/users");

const app = express();
app.use(cors()); // cors adds some headers to the my response
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public'))); /* if we want to put the client inside of the public folder , we´d keep it  */
// so that "/" will be ... /api
app.use("/api/trips", tripsRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/tripsRoutes", tripsRoutesRouter);
app.use("/api/users", usersRouter);

module.exports = app;
