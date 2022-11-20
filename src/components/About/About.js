import "./About.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoBarbellSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h1 className="heading">About Us</h1>
        <div className="content">
          <p>
            Elite Gym members get exclusive access to our online content, where
            you’ll find:
          </p>
          <ul>
            <li>110+ home workout classes (increasing monthly)</li>
            <li>
              Health and fitness partnership promo codes and discount store
              links
            </li>
            <li>Nutritional advice and recipe guides</li>
            <li>Health and wellbeing advice and tips</li>
            <li>
              Articles and podcasts covering nutrition, exercise and sleep
            </li>
          </ul>
        </div>
        <div className="cards">
          <div className="card">
            <AiOutlineClockCircle size="100px" className="image" />
            <h2 className="title">OPEN 24/7</h2>
            <p>
              Train whenever you like, 365 days a year – we’re here for you with
              a monitored member entry system
            </p>
          </div>
          <div className="card">
            <IoBarbellSharp size="100px" className="image" />
            <h2 className="title">HIGH-SPEC EQUIPMENT</h2>
            <p>
              Our clubs are equipped with a wide variety of quality gym
              equipment and training space for you to use
            </p>
          </div>
          <div className="card">
            <FaShoppingCart size="100px" className="image" />
            <h2 className="title">PARTNERSHIP DISCOUNTS</h2>
            <p>
              Save money on an ever-growing list of brands and products just by
              being an Anytime Fitness member
            </p>
          </div>
          <div className="card">
            <BiWorld size="100px" className="image" />
            <h2 className="title">WORLDWIDE ACCESS</h2>
            <p>
              Your keyfob grants you access to over 185 UK and Ireland clubs,
              along with 4,500+ worldwide as standard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
