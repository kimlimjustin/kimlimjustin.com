import { Poppins, Alfa_Slab_One } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
    EMAIL,
    GITHUB_LINK,
    INSTAGRAM_LINK,
    FOREM_LINK,
} from "@/utils/constant";
import { GitHubIcon, InstagramIcon, ForemIcon } from "@/utils/icon";

const POPPINS = Poppins({
    weight: "400",
    subsets: ["latin-ext"],
});

const ALFA_SLAB_ONE = Alfa_Slab_One({
    weight: "400",
    subsets: ["latin-ext"],
});

const Contact = () => {
    return (
        <div className={[styles.contactContainer, POPPINS.className].join(" ")}>
            <h1 className={styles.contactTitle}>Contact</h1>
            <h2 className={styles.contactSubtitle}>Get in touch</h2>
            <div
                className={[styles.contactEmail, ALFA_SLAB_ONE.className].join(
                    " "
                )}
            >
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className={styles.contactSocials}>
                <a
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <GitHubIcon></GitHubIcon>
                </a>
                <a
                    href={INSTAGRAM_LINK}
                    className={styles.socialLink}
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon></InstagramIcon>
                </a>
                <a
                    href={FOREM_LINK}
                    className={styles.socialLink}
                    title="Forem"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ForemIcon></ForemIcon>
                </a>
            </div>
        </div>
    );
};
export default Contact;
