/* eslint-disable @next/next/no-img-element */
import { GitHubIcon, WebsiteIcon } from '../../Util/icon';
const Projects = () => {
    return (
        <>
            <div className="projects aos-init" id="projects" data-aos="zoom-in">
                <h1 className="projects-title">Notable Projects</h1>
                <div className="project-box">
                    <a href="https://github.com/kimlimjustin/xplorer" target="_blank" rel="noreferrer" className="project-preview">
                        <div className="project-preview-thumbnail">
                            <img src="/xplorer.webp" alt="Xplorer, a modern file manager handcrafted by Justin Maximillian Kimlim" />
                        </div>
                    </a>
                    <div className="project-content">
                        <div className="project-content-inner">
                            <div className="project-content-title">Xplorer</div>
                            <p className="project-content-description">
                                Xplorer is a modern file explorer built from ground-up to be fully customizable to fit 2022{"'"}s need.
                            </p>
                        </div>
                        <a href="https://github.com/kimlimjustin/xplorer" className="project-link" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a href="https://xplorer.space/" className="project-link" target="_blank" rel="noreferrer">
                            <WebsiteIcon />
                        </a>
                    </div>
                </div>
                <div className="project-box">
                    <a href="https://github.com/kimlimjustin/wiz" target="_blank" rel="noreferrer" className="project-preview">
                        <div className="project-preview-thumbnail">
                            <img
                                src="/wiz.webp"
                                alt="Wiz, a simple, frameless, lightweight browser for screenshots handcrafted by Justin Maximillian Kimlim"
                            />
                        </div>
                    </a>
                    <div className="project-content">
                        <div className="project-content-inner">
                            <div className="project-content-title">Wiz</div>
                            <p className="project-content-description">A simple, frameless, lightweight browser for screenshots.</p>
                        </div>
                        <a href="https://github.com/kimlimjustin/xiz" className="project-link" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
                <div className="project-box">
                    <a href="https://github.com/kimlimjustin/wiz" target="_blank" rel="noreferrer" className="project-preview">
                        <div className="project-preview-thumbnail">
                            <img
                                src="/wiz.webp"
                                alt="Wiz, a simple, frameless, lightweight browser for screenshots handcrafted by Justin Maximillian Kimlim"
                            />
                        </div>
                    </a>
                    <div className="project-content">
                        <div className="project-content-inner">
                            <div className="project-content-title">Google Forms Clone</div>
                            <p className="project-content-description">Clone of Google forms built using Django and Javascript</p>
                        </div>
                        <a href="https://github.com/kimlimjustin/google-form-clone" className="project-link" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a href="https://google-forms-clone.herokuapp.com/" className="project-link" target="_blank" rel="noreferrer">
                            <WebsiteIcon />
                        </a>
                    </div>
                </div>
            </div>
            <a className="project-read-more" href="https://github.com/kimlimjustin" target="_blank" rel="noopener noreferrer">
                See more on GitHub
            </a>
        </>
    );
};

export default Projects;
