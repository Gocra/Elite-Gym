import "./Program.scss";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";

const Program = ({ title, image, description }) => {
  const programRef = useRef();
  useEffect(() => {
    Observer.observe(programRef.current);
  }, []);

  return (
    <article className="hide program" ref={programRef}>
      <img className="image" alt="" src={image} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Program;
