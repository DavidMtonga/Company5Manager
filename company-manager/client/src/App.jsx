// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Hire from "./pages/Hire";
import EmployeeList from "./pages/EmployeeList";
import Raise from "./pages/Raise";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/hire" element={<Hire />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/raise" element={<Raise />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
