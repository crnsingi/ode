import "./Footer.css"
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiGithubLine,
    RiTwitterXLine
  } from "@remixicon/react";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <section className="footer-section">
      <footer className="footer-main">
        <div className="footer-main__content">
          <nav
            className="footer-main__content__items"
            aria-label="main footer navigation"
          >
            <a className="link" href="/">
              Carrers
            </a>
            <a className="link" href="/">
              Community
            </a>
            <a className="link" href="/">
              About Us
            </a>
            <a className="link" href="/">
              Contact
            </a>
          </nav>
          <div className="footer-main__content__items footer-main__content__items--icons">
            <a className="link link_type-footer" href="/" aria-label="Youtube">
              <RiYoutubeLine size={24} />
            </a>
            <a
              className="link link_type_footer"
              href="/"
              aria-label="Instagram"
            >
              <RiInstagramLine size={24} />
            </a>
            <a className="link link_type_footer" href="/" aria-label="Facebook">
              <RiFacebookBoxLine size={24} />
            </a>
            <a className="link link_type_footer" href="/" aria-label="Github">
              <RiGithubLine size={24} />
            </a>
            <a
              className="link link_type_footer"
              href="/"
              aria-label="Twitter X"
            >
              <RiTwitterXLine size={24} />
            </a>
          </div>
        </div>
        <p className="copyright">
          &copy; <span>{copyrightYear}</span> Myema, all rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
