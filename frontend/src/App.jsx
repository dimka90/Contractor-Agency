import Layout from "./Layout";
import AssignContract from "./pages/AssignContract";
// import Assign from "./pages/AssignContract";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#00B24E] to-[#00644C] ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assigncontract" element={<AssignContract />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
