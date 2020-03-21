import React from "react";
import classes from "./Tablet.module.css";
import remove_icon from "../../../../assets/images/icon-remove.svg";
const tablet = props => {
  switch (props.type) {
    case "filterTablet":
      return (
        <div className={classes.FilterTablet}>
          <span className={classes.TextContent}>{props.text}</span>
          <span onClick={()=> props.removeCallback(props.text)} className={classes.Remove_Icon}>
            <img src={remove_icon} alt="DELETE ICON" />
          </span>
        </div>
      );
    default:
      return (
        <div onClick={props.addCallback} className={classes.Tablet}>
          {props.text}
        </div>
      );
  }
};
export default tablet;
