import "./Subscription.scss";
import Tick from "../../assets/tick.svg";
import Cross from "../../assets/cross.svg";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";

const Subscription = ({
  name,
  price,
  features,
  limitedFeatures,
  transitionDelay,
}) => {
  const styles = { transitionDelay: `${transitionDelay * 300}ms` };
  const subscriptionRef = useRef();
  useEffect(() => {
    Observer.observe(subscriptionRef.current);
    console.log(subscriptionRef.current.style.transitionDelay);
  }, []);

  return (
    <article
      className={`hide subscription ${name}`}
      style={styles}
      ref={subscriptionRef}
    >
      <h2 className="name">{name}</h2>
      <h2 className="price">
        £{price}/<span>Month</span>
      </h2>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>
            <span className="icon-container">
              <img src={Tick} alt="" className="icon green" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <ul className="limited-features">
        {limitedFeatures.map((feature, i) => (
          <li key={i}>
            <span className="icon-container">
              <img src={Cross} alt="" className="icon red" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="join">Start Subscription</button>
    </article>
  );
};

export default Subscription;
