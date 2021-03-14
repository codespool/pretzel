import { Route } from "react-router";
import React from "react";
import { Login } from "./screens/login";
import { List } from "./screens/list";
import { Review } from "./screens/review";

export function AppRoutes() {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route path="/list" component={List} />
      <Route path="/review" component={Review} />
    </>
  );
}
