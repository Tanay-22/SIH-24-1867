const express = require("express");
const router = require("./router");

const app = express();

// Add this line to parse JSON body requests
app.use(express.json());

// Mount the router on the root path (optional)
app.use("/", router);

const port = process.env.PORT || 3000; // Use environment variable for port
app.listen(port, () => console.log(`Server listening on port ${port}`));
