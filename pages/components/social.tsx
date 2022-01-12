import { GitHubIcon, InstagramIcon, ForemIcon, RedditIcon, TwitterIcon } from '../../Util/icon';
const SocialLinks = () => {
    return (
        <div className="social-link">
            <a href="https://github.com/kimlimjustin" className="social-link-item" title="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon></GitHubIcon>
            </a>
            <a href="https://instagram.com/justinkimlim" className="social-link-item" title="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://dev.to/kimlimjustin" className="social-link-item" title="DEV Community" target="_blank" rel="noopener noreferrer">
                <ForemIcon></ForemIcon>
            </a>
            <a href="https://reddit.com/user/kimlimjustin" className="social-link-item" title="Reddit" target="_blank" rel="noopener noreferrer">
                <RedditIcon></RedditIcon>
            </a>
            <a href="https://twitter.com/kimlimjustin" className="social-link-item" title="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon></TwitterIcon>
            </a>
        </div>
    );
};
export default SocialLinks;
