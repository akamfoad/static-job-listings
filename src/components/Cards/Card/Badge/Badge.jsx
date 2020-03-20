import React from "react";
import classes from "./Badge.module.css";

const badge = props => {
  const NEW = (
    <h4 className={[classes.Badge, classes.NEW].join(" ")}>NEW!</h4>
  );
  const FEATURED = (
    <h4 className={[classes.Badge, classes.FEATURED].join(" ")}>FEATURED</h4>
  );
  switch (props.type) {
    case "NEW":
      return NEW;
    case "FEATURED":
      return FEATURED;
    default:
      return FEATURED;
  }
};

export default badge;
