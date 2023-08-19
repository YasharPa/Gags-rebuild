import GagItemCreate from "./GagItemCreate";
import Logo from "../pictures/G-logo.png";
function Navbar() {
  const contantSection = document.getElementById("contact");
  const handleClick = () => {
    if (contantSection) {
      contantSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar">
      <div className="g-logo">
        <img src={Logo} alt="Logo"></img>
      </div>
      <ul className="details">
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <GagItemCreate />
    </div>
  );
}

export default Navbar;
