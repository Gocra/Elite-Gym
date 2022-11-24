import "./Hamburger.scss";

const Hamburger = ({ clickEvent }) => {
  return (
    <div className="hamburger" onClick={clickEvent}>
      <div className="line line-1"></div>
      <div className="line line-1"></div>
      <div className="line line-1"></div>
    </div>
  );
};

export default Hamburger;
