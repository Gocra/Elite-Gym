import "./Navbar.scss";
import Logo from "../../assets/elite-gym-high-resolution-logo-white-on-transparent-background.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo-container">
          <img className="logo" src={Logo} />
        </a>
        <div className="links">
          <a className="link" href="#home">
            Home
          </a>
          <a className="link" href="#about">
            About
          </a>
          {/* <a className="link" >
            Features
          </a> */}
          <a className="link" href="#programs">
            Programs
          </a>
          {/* <a className="link" >
            Nutrition
          </a> */}
          <a className="link" href="#supplements">
            Supplements
          </a>
          <a className="link" href="#pricing">
            Pricing
          </a>
          {/* <a className="link" >
            Contact
          </a> */}
          <a className="btn-signin">Sign in</a>
          <a className="btn-signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
