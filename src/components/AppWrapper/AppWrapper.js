import React, { Fragment } from "react";
import MainNavigation from "../MainNavigation/MainNavigation";

const AppWrapper = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default AppWrapper;
