import styles from "@/styles/Home.module.css";
import {
    FOREM_LINK,
    GITHUB_LINK,
    INSTAGRAM_LINK,
    REDDIT_LINK,
    TWITTER_LINK,
} from "../../utils/constant";
import {
    GitHubIcon,
    InstagramIcon,
    ForemIcon,
    RedditIcon,
    TwitterIcon,
} from "../../utils/icon";
const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <a
                href={GITHUB_LINK}
                className={styles.socialLink}
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
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
    );
};
export default SocialLinks;
