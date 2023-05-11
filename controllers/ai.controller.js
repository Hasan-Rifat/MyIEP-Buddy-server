const { Configuration, OpenAIApi } = require("openai");
const Ai = require("../models/Ai.model");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateText = async (req, res) => {
  try {
    const { prompt1, prompt2, goal, email } = req.body;

    // Generate completion for the first prompt
    const completion1 = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt1,
      max_tokens: 200,
      temperature: 0,
    });

    const data1 = completion1.data.choices[0].text;

    // Generate completion for the second prompt
    const completion2 = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt2,
      max_tokens: 450,
      temperature: 0,
    });

    const data2 = completion2.data.choices[0].text;

    // Perform any additional processing or logic with the generated texts

    const text = await Ai.create({
      email,
      prompt1: data1,
      prompt2: data2,
      goal,
    });

    res.status(200).json({
      message: "Text generated successfully",
      data: text,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  generateText,
};
