//Icons
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import { useContext } from "react";
import { context } from "../../context/context"; // Import the context
import "../../styles/Header.scss"; // Import the styles for the Header component

const Header = () => {
  const { toggleTheme, darkMode } = useContext(context);
  console.log(darkMode);

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
          {darkMode ? (
            <FaMoon onClick={toggleTheme} className="icon_theme" />
          ) : (
            <FaSun onClick={toggleTheme} className="icon_theme" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
