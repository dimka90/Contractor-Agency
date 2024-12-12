import Layout from "./Layout";
import AssignContract from "./pages/AssignContract";
// import Assign from "./pages/AssignContract";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#00B24E] to-[#00644C] ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/assigncontract" element={<AssignContract />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
