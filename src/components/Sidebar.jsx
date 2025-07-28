import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  UserPlus,
  ArrowUpRight,
} from 'lucide-react';

const navItems = [
  { path: "/", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
  { path: "/hire", label: "Hire Employee", icon: <UserPlus className="w-4 h-4" /> },
  { path: "/employees", label: "Employee List", icon: <Users className="w-4 h-4" /> },
  { path: "/raise", label: "Raise Pay", icon: <ArrowUpRight className="w-4 h-4" /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="bg-gray-100 dark:bg-gray-900 w-56 min-h-screen p-4 shadow-md">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400">Company Manager</h2>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ path, label, icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                ${
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
                }
              `}
            >
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
