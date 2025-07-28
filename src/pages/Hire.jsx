import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Hire() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [employeeType, setEmployeeType] = useState("hourly");

  const onSubmit = (data) => {
    console.log(data);
    // Later: Axios POST to backend
    reset();
  };

  return (
    <div className="p-10 max-w-xl mx-auto mt-3 bg-white rounded border shadow shadow-4">
      <h2 className="text-2xl font-bold mb-4">Hire New Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full border border-black p-2 rounded "
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border border-black p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Employee Type</label>
          <select
            {...register("type", { required: true })}
            onChange={(e) => setEmployeeType(e.target.value)}
            className="w-full border border-black p-2 rounded"
          >
            <option value="hourly">Hourly</option>
            <option value="salaried">Salaried</option>
            <option value="manager">Manager</option>
            <option value="executive">Executive</option>
          </select>
        </div>

        {/* Conditional Fields */}
        {employeeType === "hourly" && (
          <>
            <div>
              <label className="block font-semibold">Hourly Rate</label>
              <input
                type="number"
                step="0.01"
                {...register("hourlyRate")}
                className="w-full border border-black p-2 rounded"
              />
            </div>
          </>
        )}

        {(employeeType === "salaried" ||
          employeeType === "manager" ||
          employeeType === "executive") && (
          <div>
            <label className="block font-semibold">Salary</label>
            <input
              type="number"
              step="0.01"
              {...register("salary")}
              className="w-full border border-black p-2 rounded"
            />
          </div>
        )}

        {(employeeType === "manager" || employeeType === "executive") && (
          <div>
            <label className="block font-semibold">Bonus</label>
            <input
              type="number"
              step="0.01"
              {...register("bonus")}
              className="w-full border border-black p-2 rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
 