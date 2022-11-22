import "./Supplement.scss";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";

const Supplement = ({ image, product, price }) => {
  const supplementRef = useRef();
  useEffect(() => {
    Observer.observe(supplementRef.current);
  }, []);

  return (
    <article className="hide supplement" ref={supplementRef}>
      <img className="image" alt="" src={image} />
      <div className="content">
        <h3>{product}</h3>
        <p className="price">{price}</p>
        <button className="buy">Buy Now</button>
      </div>
    </article>
  );
};

export default Supplement;
