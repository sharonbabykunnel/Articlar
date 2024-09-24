import { Link } from "react-router-dom";


const NavItem = ({ icon, text, active, to }) => (
    <Link to={to} className={`flex items-center p-2 rounded-md ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}>
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  );

export default NavItem
