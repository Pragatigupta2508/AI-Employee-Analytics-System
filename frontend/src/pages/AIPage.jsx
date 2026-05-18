import { useEffect, useState } from "react";
import axios from "axios";

function AIPage() {

  const [employees, setEmployees] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    const res = await axios.get(
      "https://ai-employee-analytics-system.onrender.com/api/employees"
    );

    setEmployees(res.data);

  };

  const getRecommendation = async (employee) => {

    try {

      setLoading(true);

      const res = await axios.post(
        "https://ai-employee-analytics-system.onrender.com/api/ai/recommend",

        employee
      );

      setResult(
        `
Employee: ${employee.name}

${res.data.choices[0].message.content}
        `
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
          Generate AI insights for employees
        </p>

      </div>

      {
        employees.map((emp) => (

          <div
            className="employee-card"
            key={emp._id}
          >

            <h3>👤 {emp.name}</h3>

            <p>📧 {emp.email}</p>

            <p>🏢 {emp.department}</p>

            <p>⭐ {emp.performanceScore}</p>

            <button
              onClick={() =>
                getRecommendation(emp)
              }
            >

              {
                loading
                  ? "Generating..."
                  : "Generate AI Feedback"
              }

            </button>

          </div>
        ))
      }

      {
        result && (

          <div className="ai-box">

            <h2>AI Recommendation</h2>

            <p>{result}</p>

          </div>
        )
      }

    </div>
  );
}

export default AIPage;