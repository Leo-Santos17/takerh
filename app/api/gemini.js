const {GoogleGenAI} = require('@google/genai')
require('dotenv').config()
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const config = require("../config/config")

async function gemini(text)
{
    const prompt = process.env.PROMPT
    
    const genAi = new GoogleGenAI({"apiKey": GEMINI_API_KEY})
    const response = await genAi.models.generateContent({
        model: config.gemini.MODEL,
        contents: prompt+text
    });

    console.log(response)
    return response.text
}

module.exports = gemini;