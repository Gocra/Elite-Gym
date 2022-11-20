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
          {/* <a className="link" href="#">
            Features
          </a> */}
          <a className="link" href="#programs">
            Programs
          </a>
          {/* <a className="link" href="#">
            Nutrition
          </a> */}
          <a className="link" href="#supplements">
            Supplements
          </a>
          <a className="link" href="#">
            Pricing
          </a>
          {/* <a className="link" href="#">
            Contact
          </a> */}
          <a className="btn-signin" href="#">
            Sign in
          </a>
          <a className="btn-signup" href="#">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
