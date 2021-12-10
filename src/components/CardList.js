import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div className="tc">
      {robots.map(({ i, ...othersData }) => {
        return <Card key={i} {...othersData} />;
      })}
    </div>
  );
}
export default CardList;
