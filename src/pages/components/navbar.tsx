import styles from "@/styles/Home.module.css";
import { CV, EMAIL } from "@/utils/constant";
import { Poppins, Alfa_Slab_One } from "next/font/google";
import { useState } from "react";

const POPPINS = Poppins({
    weight: "400",
    subsets: ["latin-ext"],
});

const ALFA_SLAB_ONE = Alfa_Slab_One({
    weight: "400",
    subsets: ["latin-ext"],
});

const Navbar = () => {
    const [hamburgerOnClicked, setHamburgerOnClicked] = useState(false);
    return (
        <div className={[styles.navbar, POPPINS.className].join(" ")}>
            <div className={[styles.logo, ALFA_SLAB_ONE.className].join(" ")}>
                JUSTIN KIMLIM
            </div>
            <span
                className={styles.hamburger}
                onClick={() => setHamburgerOnClicked(!hamburgerOnClicked)}
            >
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </span>
            <div className={styles.navbarItems}>
                <a className={styles.navbarItem}>Home</a>
                <a className={styles.navbarItem} href={CV}>
                    CV
                </a>
                <a className={styles.navbarItem} href={`mailto:${EMAIL}`}>
                    Contact
                </a>
            </div>
            <div
                className={styles.navbarItemsMobile}
                style={{ width: hamburgerOnClicked ? "100%" : "0" }}
            >
                <a
                    className={styles.navbarItem}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        setHamburgerOnClicked(false);
                    }}
                >
                    Home
                </a>
                <a className={styles.navbarItem} href={CV}>
                    CV
                </a>
                <a className={styles.navbarItem} href={`mailto:${EMAIL}`}>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Navbar;
