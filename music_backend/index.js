const express = require("express");

const { setupJWT } = require("./utils/jwtToken");
const dbConnect = require("./utils/dbConnect");

const userRoute = require("./routes/userRoutes");

const app = express();
const port =8000;

app.use(express.json());
dbConnect();
setupJWT();

app.get("/",(req, res) => {
    res.send("Hello World");
});

app.use("/user",userRoute);

app.listen(port, () => {
    console.log("App is running on port "+port);
})