import Layout from "./Layout";
import AssignContract from "./pages/AssignContract";
// import Assign from "./pages/AssignContract";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Projects from "./pages/Projects";
import MilestoneForm from "./components/milestone";
import Payment from "./pages/Payment";
import AgencyProjects from "./pages/AgencyProjects";
import AgencyPayment from "./pages/AgencyPayment";
import AgencyDashboard from "./pages/AgencyDashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-900 ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
          <Route path="/milestoneform" element={<MilestoneForm />}/>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/agency-dashboard" element={<AgencyDashboard />} />
            <Route path="/agency-payment" element={<AgencyPayment />} />
            <Route path="/agency-projects" element={<AgencyProjects />} />
            <Route path="/assigncontract" element={<AssignContract />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
