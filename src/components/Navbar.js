import GagItemCreate from "./GagItemCreate";
import Logo from "../pictures/G-logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} className="g-logo" alt="Logo"></img>
      <div>
        <h4>About</h4>
        <h4>contact</h4>
      </div>

      <GagItemCreate />
    </div>
  );
}

export default Navbar;
