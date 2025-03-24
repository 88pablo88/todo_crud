import menu from "../../assets/Menu.svg";
import search from "../../assets/search.png";
import tienda_animal from "../../assets/tienda_animal.png";
import login_user from "../../assets/Login.png";
import cart from "../../assets/Cart.png";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={menu} alt="menu" width={23.3} height={21.22} />
      <img src={search} alt="search" width={19.56} height={19.56} />
      <img
        src={tienda_animal}
        alt="tienda animal logo"
        width={187}
        height={26}
      />
      <img src={login_user} alt="login" width={23} height={23} />
      <img src={cart} alt="cart" width={31.87} height={26} />
    </header>
  );
};
