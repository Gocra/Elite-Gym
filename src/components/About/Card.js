import React from "react";
import "../../utilities/animation-on-scroll.scss";
import Observer from "../Observer";
import { useEffect, useRef } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { IoBarbellSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const iconsArray = [
  <AiOutlineClockCircle size="100px" className="image" />,
  <IoBarbellSharp size="100px" className="image" />,
  <BiWorld size="100px" className="image" />,
  <FaShoppingCart size="100px" className="image" />,
];

const Card = ({ title, content, i }) => {
  const cardRef = useRef();
  useEffect(() => {
    Observer.observe(cardRef.current);
  }, []);
  return (
    <article className="hide card" ref={cardRef}>
      {iconsArray[i]}
      <h2 className="title">{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Card;
