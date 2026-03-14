import { GoogleGenAI } from "@google/genai";
import { companyKnowledge } from "../src/data/companyKnowledge";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const message = req.body?.message || req.body?.prompt;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const ai = new GoogleGenAI({ apiKey });

    const relevantKnowledge = companyKnowledge.filter(entry =>
      entry.keywords.some(keyword =>
        message.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    const context = relevantKnowledge.map(e => e.content).join("\n\n");

    const prompt = `
You are Kumar, AI Automation Consultant from SBCAIO.

Company knowledge:
${context}

User message:
${message}

Respond professionally and helpfully.
`;

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt
    });

    const text =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply: text });

  } catch (error) {

    console.error("AI error:", error);

    return res.status(500).json({
      error: "AI service error"
    });
  }
}
