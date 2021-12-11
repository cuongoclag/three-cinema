import { Switch, Route } from "react-router";
import { Contact, Home } from "./components/Pages/public";

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}
