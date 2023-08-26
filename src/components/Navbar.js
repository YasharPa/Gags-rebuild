import GagItemCreate from "./GagItemCreate";
import Logo from "../pictures/G-logo.png";
import SearchGag from "./SearchBarGag";

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
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </li>
        <li>
          <SearchGag onSubmit={onSubmit} />
        </li>
      </ul>

      <GagItemCreate />
    </div>
  );
}

export default Navbar;
