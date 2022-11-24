import "./Navbar.scss";
import Logo from "../../assets/elite-gym-high-resolution-logo-white-on-transparent-background.png";
import Hamburger from "../Hamburger/Hamburger";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarDropdownClass, setNavbarDropdownClass] = useState("links");

  useEffect(() => {
    window.addEventListener("resize", () => setNavbarDropdownClass("links"));

    return () => {
      window.removeEventListener("resize", () =>
        setNavbarDropdownClass("links")
      );
    };
  }, []);

  const toggleNavbarDropdown = () => {
    if (!navbarDropdownClass.includes("open")) {
      setNavbarDropdownClass("links open");
    } else {
      setNavbarDropdownClass("links closed");
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo-container">
          <img className="logo" src={Logo} />
        </a>
        <div className={navbarDropdownClass}>
          <a className="link" href="#home">
            Home
          </a>
          <a className="link" href="#about">
            About
          </a>
          <a className="link" href="#programs">
            Programs
          </a>
          <a className="link" href="#supplements">
            Supplements
          </a>
          <a className="link" href="#pricing">
            Pricing
          </a>
          <a className="btn-signin">Sign in</a>
          <a className="btn-signup">Sign up</a>
        </div>
        <Hamburger clickEvent={toggleNavbarDropdown} />
      </div>
    </nav>
  );
};

export default Navbar;
