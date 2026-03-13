const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const message = req.body.message || req.body.prompt;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(message);

    const text = result.response.text();

    return res.status(200).json({
      message: text
    });

  } catch (error) {

    console.error("Gemini error:", error);

    return res.status(500).json({
      error: "AI server error"
    });

  }
}
