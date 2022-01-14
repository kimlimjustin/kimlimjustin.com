import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { StarsIcon, ForksIcon, FollowerIcon, Theme, TerminalIcon } from '../Util/icon';
import LoadingAnimation from './components/loading';
import Topnav from './components/topnav';
import SocialLinks from './components/social';
import AboutMe from './components/about';
import Intro from './components/intro';
import Projects from './components/projects';
import GetInTouch from './components/contact';
import Terminal from './components/terminal';
import { GITHUB_LINK } from '../Util/constant';

const Home: NextPage = () => {
    const [theme, setTheme] = useState<string>();
    const [GitHubStars, setGitHubStars] = useState<number>(0);
    const [GitHubForks, setGitHubForks] = useState<number>(0);
    const [GitHubFollowers, setGitHubFollowers] = useState<number>(0);
    const [terminalDisplayed, setTerminalDisplayed] = useState<boolean>(false);

    useEffect(() => {
        setTheme(window.localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        fetch('https://api.github.com/repos/kimlimjustin/kimlimjustin.com')
            .then((response) => response.json())
            .then((result) => {
                setGitHubStars(result.stargazers_count);
                setGitHubForks(result.forks);
            });
        fetch('https://api.github.com/users/kimlimjustin')
            .then((response) => response.json())
            .then((result) => {
                setGitHubFollowers(result.followers);
            });
    }, []);

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        window.localStorage.setItem('theme', theme!);
    };

    return (
        <div>
            <Head>
                <title>Justin Maximillian Kimlim (@kimlimjustin)</title>
                <meta name="description" content="Justin Maximllian Kimlim's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LoadingAnimation />
            <Topnav />
            <div className="container">
                <Intro />
                <AboutMe />
                <Projects />
                <GetInTouch />
            </div>
            <SocialLinks />
            <div className="email-link">
                <div className="email-link-flex">
                    <a href="mailto:kimlimjustin@gmail.com">kimlimjustin@gmail.com</a>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright-notice">Designed &amp; Built by Justin Maximillian Kimlim</p>
                <a href={GITHUB_LINK} className="github-stats" target="_blank" rel="noreferrer">
                    <FollowerIcon></FollowerIcon> <span>{GitHubFollowers}</span>
                </a>{' '}
                <a className="github-stats" href="https://github.com/kimlimjustin/kimlimjustin.com" target="_blank" rel="noopener noreferrer">
                    <StarsIcon></StarsIcon> <span>{GitHubStars}</span> <ForksIcon></ForksIcon> <span>{GitHubForks}</span>
                </a>
            </div>
            <div className="site-setting">
                <span onClick={() => setTerminalDisplayed(true)}>
                    <TerminalIcon></TerminalIcon>
                </span>
                <span onClick={() => switchTheme()}>
                    <Theme></Theme>
                </span>
            </div>
            <Terminal displayed={terminalDisplayed} setDisplayed={setTerminalDisplayed} />
        </div>
    );
};

export default Home;
