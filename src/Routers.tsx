import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { Routes } from "./utils";

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
      </Switch>
    </>
  );
}
