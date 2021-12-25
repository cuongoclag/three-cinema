import { HeaderProps } from "../type";
import BanerMenu from "./BanerMenu";
import ContactMenu from "./ContactMenu";
import Menu from "./Menu";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <main>
      <ContactMenu />
      <BanerMenu />
      <Menu />
    </main>
  );
};
