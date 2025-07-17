import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '../../img/costs_logo.png'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/"><img src={logo} alt="Costs"></img></Link>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/projetos" >Projetos</Link>
      <Link className={styles.link} to="/company">Empresa</Link>
      <Link className={styles.link} to="/contact">Contato</Link>
    </nav>
  );
}

export default NavBar;
