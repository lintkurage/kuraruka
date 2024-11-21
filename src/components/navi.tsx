import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navi.module.css";

export default function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        {/* ハンバーガーアイコン */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        
        {/* メニューリスト */}
        <ul className={`${styles.ul} ${isOpen ? styles.menuOpen : ""}`}>
          <li className={styles.li}>
            <Link href="/" className={styles.link}>
              <p>Home</p>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/about" className={styles.link}>
              <p>About</p>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/blog" className={styles.link}>
              <p>Blog</p>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact" className={styles.link}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
