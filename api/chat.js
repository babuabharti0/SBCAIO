const result = await ai.models.generateContent({
  model: "gemini-1.5-flash",
  contents: [
    {
      role: "user",
      parts: [{ text: prompt }]
    }
  ]
});

const text =
  result.candidates?.[0]?.content?.parts?.[0]?.text ||
  "Sorry, I couldn't generate a response.";

return res.status(200).json({ message: text });
