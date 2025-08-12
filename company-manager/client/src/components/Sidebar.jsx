import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-56 min-h-screen p-4">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/hire" className="hover:text-blue-600">
          Hire Employee
        </Link>
        <Link to="/employees" className="hover:text-blue-600">
          Employee List
        </Link>
        <Link to="/raise" className="hover:text-blue-600">
          Raise Pay
        </Link>
      </nav>
    </aside>
  );
}
