import "./Supplement.scss";

const Supplement = ({ image, product, price }) => {
  return (
    <article className="supplement">
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
