import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // You can replace this with your backend API URL
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch employees");
        setLoading(false);
      });
  }, []);

  // Compute monthly pay for each employee
  const calculatePay = (emp) => {
    if (emp.type === "hourly") {
      return (emp.hourlyRate * emp.hoursWorked).toFixed(2);
    }
    if (emp.type === "salaried") {
      return (emp.salary / 12).toFixed(2);
    }
    if (emp.type === "manager") {
      return ((emp.salary + emp.bonus) / 12).toFixed(2);
    }
    if (emp.type === "executive") {
      return ((emp.salary + emp.bonus) / 12).toFixed(2); // + stockOptions optional
    }
    return "0.00";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Rate/Salary</th>
                <th className="p-2 border">Bonus</th>
                <th className="p-2 border">Stock</th>
                <th className="p-2 border">Monthly Pay</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td className="p-2 border">{emp.name}</td>
                  <td className="p-2 border">{emp.email}</td>
                  <td className="p-2 border capitalize">{emp.type}</td>
                  <td className="p-2 border">
                    {emp.type === "hourly"
                      ? `$${emp.hourlyRate}`
                      : `$${emp.salary}`}
                  </td>
                  <td className="p-2 border">
                    {emp.bonus ? `$${emp.bonus}` : "-"}
                  </td>
                  <td className="p-2 border">
                    {emp.stockOptions ? emp.stockOptions : "-"}
                  </td>
                  <td className="p-2 border">${calculatePay(emp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
