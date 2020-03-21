import React from "react";
import propTypes from "prop-types";
import classes from "./Card.module.css";
import Badge from "./Badge/Badge";
import Tablet from "./Tablet/Tablet";
const card = props => {
  const cardClasses = [classes.Card];
  if (props.badges && props.badges.includes("FEATURED")) {
    cardClasses.push(classes.Featured);
  }
  return (
    <div className={cardClasses.join(" ")}>
      <div className={classes.Details}>
        <img alt="LOGO" className={classes.Logo} src={props.logo} />
        <div className={classes.Detail}>
          <div className={classes.Title}>
            <h4 className={classes.Name}>{props.name}</h4>
            <div className={classes.Badges}>
              {props.badges.map(badge => (
                <Badge key={badge} type={badge} />
              ))}
            </div>
          </div>
          <h3 className={classes.Jobe}>{props.job}</h3>
          <div className={classes.Others}>
            {[props.time, "•", props.workMethod, "•", props.workType].map(
              (info, idx) => (
                <span key={idx}>{info}</span>
              )
            )}
          </div>
        </div>
      </div>
      <div className={classes.Belt} />
      <div className={classes.Tabs}>
        {props.tabs.map(tab => (
          <Tablet
            addCallback={() => props.addFilter(tab)}
            key={tab}
            text={tab}
          />
        ))}
      </div>
    </div>
  );
};

card.propTypes = {
  logo: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  job: propTypes.string.isRequired,
  badges: propTypes.array.isRequired,
  level: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  tabs: propTypes.array.isRequired,
  workMethod: propTypes.string.isRequired,
  workType: propTypes.string.isRequired,
  addFilter: propTypes.func.isRequired
};

export default card;
