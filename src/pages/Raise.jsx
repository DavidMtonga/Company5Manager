import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Raise() {
  const { register, handleSubmit, reset } = useForm();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Failed to fetch employees.");
        setLoading(false);
      });
  }, []);

  const onSubmit = (data) => {
    const { employeeId, raiseAmount } = data;

    axios
      .put(`http://localhost:5000/employees/${employeeId}/raise`, {
        amount: parseFloat(raiseAmount),
      })
      .then(() => {
        setMessage("Raise applied successfully!");
        reset();
      })
      .catch(() => {
        setMessage("Failed to apply raise.");
      });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Raise Pay</h2>

      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold">Select Employee</label>
            <select
              {...register("employeeId", { required: true })}
              className="w-full border p-2 rounded"
            >
              <option value="">-- Choose --</option>
              {employees
                .filter((e) => e.type !== "hourly")
                .map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name} ({e.type})
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold">Raise Amount ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("raiseAmount", { required: true, min: 0 })}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Apply Raise
          </button>

          {message && (
            <p className="text-sm mt-2 text-center text-blue-700">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
