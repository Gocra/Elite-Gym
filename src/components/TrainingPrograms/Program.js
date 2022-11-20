import "./Program.scss";

const Program = ({ title, description }) => {
  return (
    <article className="program">
      <img
        className="image"
        alt=""
        src="http://localhost:3000/static/media/hero.7af8d9fd21c7bdc0cc2c.jpg"
      />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Program;
