import styles from "./styles/navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="nav-logo">
        <img className={styles.logo} src="hollow-logo.png" alt="hollow-logo" />
      </div>
      <div id="ul">
        <ul className={styles.navlink}>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
