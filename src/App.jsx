import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Hire from "./pages/Hire";
import EmployeeList from "./pages/EmployeeList";
import Raise from "./pages/Raise";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/raise" element={<Raise />} />
        </Routes>
      </Layout>
    </Router>
  );
}
