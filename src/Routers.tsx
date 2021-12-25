import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import Login from "./features/Login/components/Login";
import Register from "./features/Register/components/Register";

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

const GiftShop = lazy(() =>
  import("./features/GiftShop").then(({ GiftShop }) => ({
    default: GiftShop,
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
        <Route exact path="/gift-shop">
          <Suspense fallback={"Loading..."}>
            <GiftShop />
          </Suspense>
        </Route>
        <Route exact path="/login">
          <Suspense fallback={"Loading..."}>
            <Login />
          </Suspense>
        </Route>
        <Route exact path="/register">
          <Suspense fallback={"Loading..."}>
            <Register />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}
