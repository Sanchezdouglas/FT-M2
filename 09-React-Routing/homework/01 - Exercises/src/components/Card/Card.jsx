import React from "react";
import styleCard from "./Card.module.css";
//EJE 3 #1
import { Link } from "react-router-dom";

export default function Card({ name, image, id }) {
  return (
    //EJE 3 #1
    <Link to={`/cruises/${id}`}>
      <div className={styleCard.container}>
        <h4>{name}</h4>
        <img src={image} alt="" />
      </div>
    </Link>
  );
}
