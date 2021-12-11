import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";

const Home = lazy(() =>
  import("./features/Home").then(({ Home }) => ({
    default: Home,
  }))
);

const Test = lazy(() =>
  import("./features/Test").then(({ Test }) => ({
    default: Test,
  }))
);

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/test">
          <Suspense fallback={"Loading..."}>
            <Test />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}
