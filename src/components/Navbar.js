import GagItemCreate from "./GagItemCreate";
import Logo from "../pictures/G-logo.png";
import SearchBarGag from "./SearchBarGag";

function Navbar({ onSubmit }) {
  const contantSection = document.getElementById("about");

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
          <SearchBarGag onSubmit={onSubmit} />
        </li>
        <li>
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </li>
      </ul>

      <GagItemCreate />
    </div>
  );
}

export default Navbar;
