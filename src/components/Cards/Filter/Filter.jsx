import React from "react";
import classes from "./Filter.module.css";
import Tablet from "../Card/Tablet/Tablet";
const filter = props => {
  if (props.filters.length === 0) {
    return null;
  }
  return (
    <div className={classes.Filter}>
      <div className={classes.Tablets}>
        {props.filters.map(filter => (
          <Tablet
            removeCallback={props.removeFilter}
            key={filter}
            type="filterTablet"
            text={filter}
          />
        ))}
      </div>
      <button onClick={() => props.removeFilter(props.filters)} id="clear">
        Clear
      </button>
    </div>
  );
};

export default filter;
