import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import * as path from "./path";

const Home = lazy(() => import("views/Home"));
const CommingSoon = lazy(() => import("components/CommingSoon"));

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={path.HOME} component={Home} />
        <Route path={path.GENRES} component={CommingSoon} />
        <Route path={path.ALBUMS} component={CommingSoon} />
        <Route path={path.ARTISTS} component={CommingSoon} />
        <Route path={path.RADIO} component={CommingSoon} />
        <Route path={path.RECENT} component={CommingSoon} />
        <Route path={path.FAVOURITES} component={CommingSoon} />
        <Route path={path.LOCAL} component={CommingSoon} />
      </Switch>
    </>
  );
};

export default Router;
