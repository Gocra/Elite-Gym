import "./About.scss";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useRef } from "react";
import { useEffect } from "react";
import Data from "./AboutData";
import Card from "./Card";

const About = () => {
  const headingRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    Observer.observe(headingRef.current);
    Observer.observe(contentRef.current);
  }, []);
  return (
    <section className="section about" id="about">
      <div className="container">
        <h1 ref={headingRef} className="hide heading">
          About Us
        </h1>
        <div ref={contentRef} className="hide content">
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
          {Data.map((item, i) => (
            <Card key={i} {...item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
