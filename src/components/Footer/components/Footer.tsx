import { FooterProps } from "../type";
import BannerFooter from "./BannerFooter";
import InforFooter from "./InforFooter";
import Notice from "./Notice";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <main>
      <Notice />
      <BannerFooter />
      <InforFooter />
    </main>
  );
};
