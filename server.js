const express = require("express");
const cors = require("cors"); // Import the cors middleware
const reportRoutes = require("./src/report/routes");

const app = express();
const port = 3000;

// Use the cors middleware to enable CORS
app.use(cors({origin: '*'}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/report', reportRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
