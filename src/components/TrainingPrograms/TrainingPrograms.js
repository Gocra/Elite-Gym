import Program from "./Program";
import "./TrainingPrograms.scss";
import Data from "./ProgramsData";

const TrainingPrograms = () => {
  return (
    <section className="training-programs" id="programs">
      <h1 className="heading">Training Programs</h1>
      <div className="container">
        {Data.map((program) => (
          <Program {...program} />
        ))}
      </div>
    </section>
  );
};

export default TrainingPrograms;
