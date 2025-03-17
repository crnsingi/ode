import { RiYoutubeLine } from "@remixicon/react";
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
                        Features
                     </a>
                     <a className="link" href="/">
                        Services
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

                    </div>
                </div>
                <p className="copyright">
                    &copy; <span>{copyrightYear}</span> Myema, all rights reserved.
                </p>
            </footer>
        </section>
    )
}

export default Footer;