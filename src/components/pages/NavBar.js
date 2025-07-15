import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/contact">Contact</Link>
      <Link className={styles.link} to="/company">Company</Link>
      <Link className={styles.link} to="/newproject">NewProject</Link>
    </nav>
  );
}

export default NavBar;
