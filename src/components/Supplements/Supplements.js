import "./Supplements.scss";
import Data from "./SupplementsData";
import Supplement from "./Supplement";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";

const Supplements = () => {
  const headingRef = useRef();
  useEffect(() => {
    Observer.observe(headingRef.current);
  }, []);

  return (
    <section className="section supplements" id="supplements">
      <h1 className="hide heading" ref={headingRef}>
        Supplements
      </h1>
      <div className="container">
        {Data.map((supplement) => (
          <Supplement key={supplement.id} {...supplement} />
        ))}
      </div>
    </section>
  );
};

export default Supplements;
