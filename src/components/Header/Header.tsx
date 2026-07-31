import styles from "./Header.module.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href="#hero">Laszlo Dus</a>
        <button
          className={styles.menuButton}
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.navList}>
            <li>
              <a onClick={() => setIsMenuOpen(false)} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setIsMenuOpen(false)} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setIsMenuOpen(false)} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setIsMenuOpen(false)} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
