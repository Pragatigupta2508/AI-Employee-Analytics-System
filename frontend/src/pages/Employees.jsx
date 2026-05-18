import { useEffect, useState } from "react";
import axios from "axios";

function Employees() {

  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/employees"
    );

    setEmployees(res.data);

  };

  const searchEmployee = async () => {

    const res = await axios.get(
      `https://ai-employee-analytics-system.onrender.com//employees/search?department=${department}`
    );

    setEmployees(res.data);
  };

  return (

    <div>

      <h1>Employees</h1>

      <input
        type="text"
        placeholder="Search Department"
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={searchEmployee}>
        Search
      </button>

      <br /><br />

      {
        employees.map((emp) => (

          <div key={emp._id}>

            <h3>{emp.name}</h3>

            <p>{emp.email}</p>

            <p>{emp.department}</p>

            <p>{emp.performanceScore}</p>

            <hr />

          </div>
        ))
      }

    </div>
  );
}

export default Employees;