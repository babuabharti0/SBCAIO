import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {

    // Only allow POST
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Parse request body safely
    let body = req.body;

    if (typeof body === "string") {
      body = JSON.parse(body);
    }

    const message = body.message || body.prompt;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    // Init Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    // Generate response
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      message: text
    });

  } catch (error) {

    console.error("API ERROR:", error);

    return res.status(500).json({
      error: "Server error",
      details: error.message
    });

  }
}
