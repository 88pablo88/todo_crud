import { Header, NavBar } from "../components/index";
import { getTabs } from "./constants";
import { Outlet } from "react-router";
import { useLocation } from "react-router";

import styles from "./styles.module.scss";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.layout}>
      <div className={styles.headerContainer}>
        <Header />
        <NavBar tabs={getTabs(pathname)} />
      </div>
      <div className={styles.bodyContainer}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
