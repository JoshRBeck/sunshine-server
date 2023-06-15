// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

require("./config")(app);

const cors = require("cors")

const { isAuthenticated } = require("./middleware/jwt.middleware");
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

const publicRouter = require("./routes/public.routes");
app.use("/api", publicRouter);

const wineRouter = require("./routes/wine.routes");
app.use("/api", isAuthenticated, wineRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);



module.exports = app;
