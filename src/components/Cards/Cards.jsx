import React from "react";
import Card from "./Card/Card";
import Data from "../../data-template";
import classes from "./Cards.module.css";
const Cards = props => {
  return (
    <div className={classes.Cards}>
      {Data.map(card => (
        <Card
          key={card.name}
          logo={card.logo}
          name={card.name}
          job={card.job}
          badges={card.badges}
          level={card.level}
          role={card.role}
          time={card.time}
          tabs={[card.role, card.level, ...card.languages, ...card.tools]}
          workMethod={card.workMethod}
          workType={card.workType}
        />
      ))}
    </div>
  );
};

export default Cards;
