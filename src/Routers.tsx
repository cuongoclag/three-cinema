import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import Login from "./features/Login/components/Login";
import Movies from "./features/Movies/components/Movies";
import Register from "./features/Register/components/Register";
import { GiftShopDetail } from "./features/GiftShop/components/GiftShopDetail";

import { Routes } from "./utils";
import Promotions from "./features/Promotion/components/Promotions";

const Home = lazy(() =>
  import("./features/Home").then(({ Home }) => ({
    default: Home,
  }))
);

const MovieDetail = lazy(() =>
  import("./features/Home").then(({ MovieDetail }) => ({
    default: MovieDetail,
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
        <Route exact path={Routes.home}>
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        </Route>
        <Route path={Routes.movie}>
          <Suspense fallback={"Loading..."}>
            <MovieDetail />
          </Suspense>
        </Route>
        <Route path={Routes.giftshop}>
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
        <Route exact path="/moives">
          <Suspense fallback={"Loading..."}>
            <Movies />
          </Suspense>
        </Route>
        <Route exact path="/promotions">
          <Suspense fallback={"Loading..."}>
            <Promotions />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}
