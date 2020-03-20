import React, { useState } from "react";
import Card from "./Card/Card";
import Data from "../../data-template";
import Filter from "./Filter/Filter";
import classes from "./Cards.module.css";
const Cards = props => {
  const [filterBy, setFilterBy] = useState(["Full Stack"]);

  const addFilter = filter => {
    console.log(filter);
  };
  const removeFilter = filters => {
    console.log(filters);
  };
  return (
    <div className={classes.Cards}>
      <Filter filters={filterBy} removeFilter={removeFilter} />
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
          addFilter={addFilter}
        />
      ))}
    </div>
  );
};

export default Cards;
