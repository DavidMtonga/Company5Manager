import { Moon, Sun, UserCircle, Building2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode"; // Make sure path matches

export default function Header() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useDarkMode();

  const pageTitleMap = {
    "/": "Dashboard",
    "/hire": "Hire Employee",
    "/employees": "Employee List",
    "/raise": "Raise Pay",
  };

  const currentTitle = pageTitleMap[location.pathname] || "Company Manager";

  return (
    <header className="bg-blue-700 dark:bg-gray-900 text-white px-6 py-4 shadow flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Building2 className="w-6 h-6" />
        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          Company Manager
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-sm">{currentTitle}</span>
        <button onClick={() => setDarkMode(!darkMode)} className="hover:text-yellow-300 transition">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="flex items-center space-x-2">
          <UserCircle className="w-5 h-5" />
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </header>
  );
}
