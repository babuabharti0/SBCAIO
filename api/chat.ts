import { GoogleGenAI } from "@google/genai";
import { companyKnowledge } from "../src/data/companyKnowledge.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const message = req.body?.message || req.body?.prompt;
    
    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing in environment variables");
      return res.status(500).json({ error: "API key configuration error" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Format the company knowledge to provide context to the AI
    const relevantKnowledge = companyKnowledge.filter(entry =>
      entry.keywords.some(keyword =>
        message.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    let contextEntries = relevantKnowledge;
    if (contextEntries.length === 0) {
      contextEntries = companyKnowledge.filter(entry =>
        ["Company Name", "Company Mission", "Core Services", "Who is Kumar"].includes(entry.topic)
      );
    }

    const context = contextEntries.map(e => e.content).join("\n\n");

    const prompt = `You are Kumar from the SBCAIO automation team.

Use the following company knowledge when answering.

${context}

If a user mentions an industry such as real estate, ecommerce, agency, home services, or brokerage, you should respond with tailored automation ideas.
Use this format for your suggestions:

Automation opportunities for your business:
• AI lead qualification
• automated follow-ups
• CRM automation
• appointment scheduling
• AI customer support

Ensure suggestions align with SBCAIO services in the knowledge base.

LEAD QUALIFICATION BEHAVIOR:
When the user expresses interest in automation, you should ask a follow-up question:
"I can help design an automation strategy for your business.
Would you like me to generate a quick automation plan for you?"

If the user agrees to generate a plan, you must ask them:
• What industry are you in?
• How many employees are in your team?
• What process would you like to automate first?

After gathering this information, you should recommend booking a consultation with the SBCAIO team.

Recent conversation:
${message}

Respond like a professional consultant from SBCAIO.`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return res.status(200).json({ reply: result.text || "I'm sorry, I couldn't generate a response." });
  } catch (error) {
    console.error("Gemini error:", error);
    return res.status(500).json({ error: "AI server error" });
  }
}
