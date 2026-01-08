import { GoogleGenAI } from "@google/genai";

export const generateTreeResponse = async (
  userMessage: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `
    You are the "Shop Foreman" for Klein Tree Services.
    The owners are brothers Keith and Kevin Klein.
    
    TONE:
    - Dry, professional, but with a respectful "small-town" warmth.
    - Helpful but no-nonsense.
    
    KEY INFO:
    - Based in Paynesville, MN.
    - Keith and Kevin are brothers and co-owners.
    - Keith is the technical expert, primary climber, and saw lead.
    - Kevin is the partner who works with the crew in the field, managing safety and site operations.
    - They leave yards cleaner than they find them. This is a rule.
    - Free quotes are available.
    
    INSTRUCTIONS:
    1. If they ask about prices, say "We need to see the tree in person. Call the crew at (320) 428-6726 to find a time for us to stop by."
    2. Be concise.
    3. If someone asks who is who: Keith is the climber and cutter, Kevin is co-owner and partner in the field.
    4. Do NOT mention contracts, paperwork, or office duties. They are field guys.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
      },
    });

    return response.text || "I'm drawing a blank. Better off calling (320) 428-6726.";
  } catch (error) {
    return "Something went wrong. Just call the crew: (320) 428-6726.";
  }
};