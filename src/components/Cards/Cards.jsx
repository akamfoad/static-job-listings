import React, { useState } from "react";
import Card from "./Card/Card";
import Data from "../../data-template";
import Filter from "./Filter/Filter";
import classes from "./Cards.module.css";
const Cards = props => {
  const [filterBy, setFilterBy] = useState([]);

  const addFilter = filter => {
    if (!filterBy.includes(filter)) {
      setFilterBy(filterBy.concat(filter));
    }
  };
  const removeFilter = filter => {
    if (filter.constructor === String) {
      setFilterBy(filterBy.filter(item => item !== filter));
    } else {
      setFilterBy(filterBy.filter(item => !filter.includes(item)));
    }
  };
  const dataFilterCallback = item => {
    let include = true;
    for (let i of filterBy) {
      include = item.tabs.includes(i) && include;
    }
    return include;
  };
  return (
    <div className={classes.Cards}>
      <Filter filters={filterBy} removeFilter={removeFilter} />
      {Data.filter(dataFilterCallback).map(card => (
        <Card
          key={card.name}
          logo={card.logo}
          name={card.name}
          job={card.job}
          badges={card.badges}
          level={card.level}
          role={card.role}
          time={card.time}
          tabs={card.tabs}
          workMethod={card.workMethod}
          workType={card.workType}
          addFilter={addFilter}
        />
      ))}
    </div>
  );
};

export default Cards;
