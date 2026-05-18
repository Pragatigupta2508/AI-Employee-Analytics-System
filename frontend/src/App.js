import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterEmployee from "./pages/RegisterEmployee";
import Employees from "./pages/Employees";
import AIPage from "./pages/AIPage";


function Home() {

  return (

    <div className="container">

  <div className="card">

    <h1 className="title">
      AI Employee Analytics System
    </h1>

    <p className="subtitle">
      MERN + AI Powered Employee Performance Platform
    </p>

  </div>

</div>
  );
}

function App() {

  return (

    <BrowserRouter>
<Navbar />
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<RegisterEmployee />}
        />

        <Route
          path="/employees"
          element={<Employees />}
        />

        <Route
          path="/ai"
          element={<AIPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;