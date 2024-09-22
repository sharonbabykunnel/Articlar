

const NavItem = ({ icon, text, active }) => (
    <div className={`flex items-center p-2 rounded-md ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}>
      {icon}
      <span className="ml-3">{text}</span>
    </div>
  );

export default NavItem
