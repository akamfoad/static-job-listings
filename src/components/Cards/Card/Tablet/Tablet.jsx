import React from "react";
import classes from "./Tablet.module.css";
import remove_icon from "../../../../assets/images/icon-remove.svg";
const tablet = props => {
  const keyDownHandler = e => {
    if (e.keyCode === 32) {
      props.addCallback();
    }
  };
  switch (props.type) {
    case "filterTablet":
      return (
        <div className={classes.FilterTablet}>
          <span className={classes.TextContent}>{props.text}</span>
          <span
            tabIndex="0"
            onClick={() => props.removeCallback(props.text)}
            onKeyDown={e => {
              if (e.keyCode === 32) props.removeCallback(props.text);
            }}
            className={classes.Remove_Icon}
          >
            <img src={remove_icon} alt="DELETE ICON" />
          </span>
        </div>
      );
    default:
      return (
        <div
          tabIndex="0"
          onClick={props.addCallback}
          onKeyDown={keyDownHandler}
          className={classes.Tablet}
        >
          {props.text}
        </div>
      );
  }
};
export default tablet;
