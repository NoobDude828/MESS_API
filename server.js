const express = require("express");
const reportRoutes = require("./src/report/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello WOrld!");
})

app.use('/api/v1/report', reportRoutes);

app.listen(port, () => console.log('app listening on port ${port}'));