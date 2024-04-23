const express = require("express");

const { setupJWT } = require("./utils/jwtToken");
const dbConnect = require("./utils/dbConnect");

const userRoute = require("./routes/userRoutes");
const songRoute = require("./routes/songRoutes");
const playlistRoute = require("./routes/playlistRoutes");
const cors = require("cors");
const app = express();
const port =3000;

app.use(cors());
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
});