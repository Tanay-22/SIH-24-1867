const express = require("express");
const run = require("./geminiApi"); // Import the `run` function

const router = express.Router();

router.post("/prompt-post", async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the body to see what is received
    const { prompt } = req.body;

    if (!prompt) {
      return res
        .status(400)
        .json({ error: "Missing 'prompt' in request body" });
    }

    console.log("Received prompt:", prompt);
    const response = await run(prompt);
    res.json({ response }); // Send the response data to Postman
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message }); // Send error message on failure
  }
});

module.exports = router;
