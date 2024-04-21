const express = require("express");

const { setupJWT } = require("./utils/jwtToken");
const dbConnect = require("./utils/dbConnect");

const userRoute = require("./routes/userRoutes");
const songRoute = require("./routes/songRoutes");
const playlistRoute = require("./routes/playlistRoutes");
const app = express();
const port =6000;

app.use(express.json());
dbConnect();
setupJWT();

app.get("/",(req, res) => {
    res.send("Hello World");
});

app.use("/user",userRoute);
app.use("/song",songRoute);
app.use("/playlist",playlistRoute);

app.listen(port, () => {
    console.log("App is running on port "+port);
})