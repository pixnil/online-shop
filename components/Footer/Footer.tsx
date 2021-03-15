import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="footer-links">
        <a href="mailto:contact@pixniltech.com" target="_blank" rel="noreferrer">
          Need any help?
        </a>
        <span> / </span>
        <a
          href="http://pixniltech.com"
          target="_blank"
          rel="noreferrer"
        >
          Pixnil Technologies
        </a>
      </p>
    </footer>
  );
};

export default Footer;
