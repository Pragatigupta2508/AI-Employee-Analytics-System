import { useState } from "react";
import axios from "axios";

function AIPage() {

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ai/recommend",

        {
          name: "Aman Verma",
          skills: ["React", "Node.js"],
          performanceScore: 85,
          experience: 3,
        }
      );

      setResult(
        res.data.choices[0].message.content
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }
  };

  return (

    <div className="container">

      <div className="card">

        <h1 className="title">
          AI Recommendation System
        </h1>

        <p className="subtitle">
          Generate AI-based employee insights and feedback
        </p>

        <button onClick={getRecommendation}>

          {
            loading
              ? "Generating..."
              : "Generate AI Feedback"
          }

        </button>

        {
          result && (

            <div className="ai-box">

              <p>{result}</p>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default AIPage;