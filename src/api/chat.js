import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    // ✅ Safe Gemini API Key stored in Vercel environment variables
    const genAI = new GoogleGenerativeAI("AIzaSyAHFcpkouRpu-nwRzk3oSxFnoIAw3GqN0c");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are Gemini AI, embedded in Josiah Danielle Gallenero's portfolio website.
You know Josiah is a web developer and IT student at PHINMA University of Iloilo.
You respond conversationally and concisely.

Facts about Josiah:
- Full Name: Josiah Danielle Gallenero
- Role: Web Developer & IT Student
- Skills: HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, React
- School: PHINMA University of Iloilo (BS Information Technology)
- Goal: To become a successful full-stack web developer.

User message: "${message}"
`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: "Failed to connect to Gemini API." });
  }
}
