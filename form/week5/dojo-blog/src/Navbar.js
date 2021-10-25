import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FORM MAKER</h1>
      <div className="links">
        <Link to="/" style={{
          color: 'black'
        }
        }>My Form</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Create New Form</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;