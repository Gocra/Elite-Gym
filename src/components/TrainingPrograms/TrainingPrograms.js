import Program from "./Program";
import "./TrainingPrograms.scss";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";
import Data from "./ProgramsData";

const TrainingPrograms = () => {
  const headingRef = useRef();
  useEffect(() => {
    Observer.observe(headingRef.current);
  }, []);

  return (
    <section className="section training-programs" id="programs">
      <h1 className="hide heading" ref={headingRef}>
        Training Programs
      </h1>
      <div className="container">
        {Data.map((program, i) => (
          <Program key={i} {...program} />
        ))}
      </div>
    </section>
  );
};

export default TrainingPrograms;
