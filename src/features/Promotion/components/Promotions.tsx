import React, { ReactElement, useState } from "react";
import { PromotionPartner } from "./PromotionPartner";
import { PromotionsMember } from "./PromotionsMember";
import { PromotionsMovies } from "./PromotionsMovies";
import { PromotionsNavigation } from "./PromotionsNavigation";

export default function Promotions() {
  const [tab, setTab] = useState(0);

  return (
    <main>
      <PromotionsNavigation setTabChild={setTab} />
      {tab === 0 && (
        <React.Fragment>
          <PromotionsMember />
          <PromotionsMovies />
          <PromotionPartner />
        </React.Fragment>
      )}
      {tab === 1 && (
        <React.Fragment>
          <PromotionsMember />
        </React.Fragment>
      )}
      {tab === 2 && <PromotionsMovies />}
      {tab === 3 && <PromotionPartner />}
    </main>
  );
}
