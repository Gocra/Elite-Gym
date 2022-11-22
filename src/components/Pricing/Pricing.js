import "./Pricing.scss";
import Subscription from "./Subscription";
import Data from "./SubscriptionsData";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";

const Pricing = () => {
  const headingRef = useRef();
  useEffect(() => {
    Observer.observe(headingRef.current);
  }, []);

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <h1 className="hide heading" ref={headingRef}>
          Pricing
        </h1>
        {/* button to switch from monthly to yearly */}
        <div className="subscriptions">
          {Data.map((subscription, i) => (
            <Subscription
              key={subscription.id}
              transitionDelay={i}
              {...subscription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
