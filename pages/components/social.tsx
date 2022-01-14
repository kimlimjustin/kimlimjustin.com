import { FOREM_LINK, GITHUB_LINK, INSTAGRAM_LINK, REDDIT_LINK, TWITTER_LINK } from '../../Util/constant';
import { GitHubIcon, InstagramIcon, ForemIcon, RedditIcon, TwitterIcon } from '../../Util/icon';
const SocialLinks = () => {
    return (
        <div className="social-link">
            <a href={GITHUB_LINK} className="social-link-item" title="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon></GitHubIcon>
            </a>
            <a href={INSTAGRAM_LINK} className="social-link-item" title="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon></InstagramIcon>
            </a>
            <a href={FOREM_LINK} className="social-link-item" title="DEV Community" target="_blank" rel="noopener noreferrer">
                <ForemIcon></ForemIcon>
            </a>
            <a href={REDDIT_LINK} className="social-link-item" title="Reddit" target="_blank" rel="noopener noreferrer">
                <RedditIcon></RedditIcon>
            </a>
            <a href={TWITTER_LINK} className="social-link-item" title="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon></TwitterIcon>
            </a>
        </div>
    );
};
export default SocialLinks;
