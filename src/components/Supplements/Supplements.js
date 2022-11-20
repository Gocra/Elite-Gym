import "./Supplements.scss";
import Data from "./SupplementsData";
import Supplement from "./Supplement";

const Supplements = () => {
  return (
    <section className="section supplements" id="supplements">
      <h1 className="heading">Supplements</h1>
      <div className="container">
        {Data.map((supplement) => (
          <Supplement {...supplement} />
        ))}
      </div>
    </section>
  );
};

export default Supplements;
