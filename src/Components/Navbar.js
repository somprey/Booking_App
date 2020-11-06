import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/Signup">
          <li>Signup</li>
        </Link>
        <Link style={navStyle} to="/Login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

/*export default class Navbar extends Component{
  state={
    isOpen:false
  }
  handleToggle=() =>{
    this.setState({isOpen:!this.state.isOpen})

  }
    render() {
      return (
      <nav className="navbar"> 
      <div className="nav-center">
      <div className="nav-header">
       <Link to="/">
         <img src={logo} alt="App logo" />
         </Link> 
      </div>
      </div>
      <nav/>
      );
    }
}
*/

export default Navbar;
