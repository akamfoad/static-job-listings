import React from "react";
import classes from "./Filter.module.css";
import Tablet from "../Card/Tablet/Tablet";
const filter = props => {
  return (
    <div className={classes.Filter}>
      <div className={classes.Filters}>
        {props.filters.map(filter => (
          <Tablet type="filterTablet" text={filter} />
        ))}
      </div>
      <button id="clear">Clear</button>
    </div>
  );
};

export default filter;
