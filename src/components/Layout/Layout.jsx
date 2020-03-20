import React, { useState, useEffect } from "react";
import classes from "./Layout.module.css";
const mobileQuery = window.matchMedia("(max-width: 699px)");
const Layout = props => {
  const [isMobile, setIsMobile] = useState(mobileQuery.matches);
  const mobileQueryCallback = e => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    mobileQuery.addListener(mobileQueryCallback);
    return () => {
      mobileQuery.removeListener(mobileQueryCallback);
    };
  }, []);
  return (
    <>
      <header
        className={[classes.Header, isMobile ? classes.Mobile : null].join(" ")}
      ></header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
