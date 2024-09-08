const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  // Replace with your actual API key
  const apiKey = "AIzaSyBBIwnALPZ0gsDhctPouI2Mb7BXzcCNbYs";
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // Adjust model name if needed
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
      console.log(prompt);
      const result = await chatSession.sendMessage(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error during API call:", error);
      throw new Error("API call failed");
    }
  }
  
  
  module.exports = run;