import "./Subscription.scss";
import Tick from "../../assets/tick.svg";
import Cross from "../../assets/cross.svg";

const Subscription = ({ name, price, features, limitedFeatures }) => {
  return (
    <article className={`subscription ${name}`}>
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
