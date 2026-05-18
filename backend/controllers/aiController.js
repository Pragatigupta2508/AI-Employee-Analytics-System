const axios = require("axios");

const getRecommendation = async (req, res) => {
  try {

    const employee = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",

            content: `
Analyze this employee:

Name: ${employee.name}

Skills: ${employee.skills}

Performance Score: ${employee.performanceScore}

Experience: ${employee.experience}

Provide:

1. Promotion recommendation
2. Training suggestions
3. Improvement feedback
4. Employee ranking suggestion
            `,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getRecommendation,
};