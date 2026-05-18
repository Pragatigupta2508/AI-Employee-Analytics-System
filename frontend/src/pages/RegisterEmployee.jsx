import { useState } from "react";
import axios from "axios";

function RegisterEmployee() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://ai-employee-analytics-system.onrender.com/api/employees",

        {
          ...formData,
          skills: formData.skills.split(","),
        }
      );

      setMessage("Employee Added Successfully ✨");

      setFormData({
        name: "",
        email: "",
        department: "",
        skills: "",
        performanceScore: "",
        experience: "",
      });

    } catch (error) {

      console.log(error);

      setMessage("Something went wrong ❌");

    }
  };

  return (

    <div className="container">

      <div className="card">

        <h1 className="title">
          Register Employee
        </h1>

        <p className="subtitle">
          Add employee details for AI analytics
        </p>

        {
          message && (
            <p>
              {message}
            </p>
          )
        }

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Enter Department"
            value={formData.department}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Enter Skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <input
            type="number"
            name="performanceScore"
            placeholder="Performance Score"
            value={formData.performanceScore}
            onChange={handleChange}
          />

          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <button type="submit">
            Add Employee
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterEmployee;