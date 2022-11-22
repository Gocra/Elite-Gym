import "./Pricing.scss";
import Subscription from "./Subscription";
import Data from "./SubscriptionsData";

const Pricing = () => {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <h1 className="heading">Pricing</h1>
        {/* button to switch from monthly to yearly */}
        <div className="subscriptions">
          {Data.map((subscription) => (
            <Subscription key={subscription.id} {...subscription} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
