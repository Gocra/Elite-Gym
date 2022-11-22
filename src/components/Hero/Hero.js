import "./Hero.scss";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <main className="hero" id="home">
      <div className="container">
        <div className="content">
          <h1>
            Step Up Your <span>Fitness</span> With Us
          </h1>
          <p>Become a Monster</p>
          <a className="btn-signup">Sign up Today</a>
        </div>
        <img src={heroImage} className="background-image" />
      </div>
    </main>
  );
};

export default Hero;
