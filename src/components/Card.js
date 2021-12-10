/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Card({ name, email, id, address, website }) {
  //console.log("*************" + id);
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="photo" src={`https://robohash.org/${id}?200*200`}></img>
      <h2>{name}</h2>
      <p className="i">{email}</p>
      <p className="">City: {address.city}</p>
    </div>
  );
}

export default Card;
