import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const getCountByType = (type) =>
    employees.filter((emp) => emp.type === type).length;

  const getTotalMonthlyPay = () => {
    return employees.reduce((total, emp) => {
      let pay = 0;
      if (emp.type === "hourly") {
        pay = emp.hourlyRate * emp.hoursWorked;
      } else if (emp.type === "salaried") {
        pay = emp.salary / 12;
      } else if (emp.type === "manager" || emp.type === "executive") {
        pay = (emp.salary + emp.bonus) / 12;
      }
      return total + pay;
    }, 0);
  };

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DashboardCard title="Total Employees" value={employees.length} />
        <DashboardCard title="Hourly Employees" value={getCountByType("hourly")} />
        <DashboardCard title="Salaried Employees" value={getCountByType("salaried")} />
        <DashboardCard title="Managers" value={getCountByType("manager")} />
        <DashboardCard title="Executives" value={getCountByType("executive")} />
        <DashboardCard
          title="Total Monthly Payroll"
          value={`$${getTotalMonthlyPay().toFixed(2)}`}
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow p-4 rounded border border-gray-200">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
  );
}
