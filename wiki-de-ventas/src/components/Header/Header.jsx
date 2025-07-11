import { FaMoon } from "react-icons/fa";

import "../../styles/Header.scss"; // Import the styles for the Header component

const Header = () => {
  const navText = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="header">
      <div className="header__container">
        <h1>Wiki</h1>
        <nav className="nav__links">
          <ul>
            {navText.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </nav>
        <div>
          <FaMoon className="moon-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
