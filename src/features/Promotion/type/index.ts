export interface ListPromotions {
  id: number;
  title: string;
}

export default interface PromotionList {
  id: number;
  start: string;
  end: string;
  img: string;
  event: boolean;
}
