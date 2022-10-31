import { useEffect, useState } from 'react';
import { ABOUT_ME, AVAILABLE_TERMINAL_THEMES, EMAIL, FOREM_LINK, GITHUB_LINK, INSTAGRAM_LINK, REDDIT_LINK, TWITTER_LINK } from './constant';

interface IArticle {
    connacial_url: string;
    collection_id: string;
    comments_count: number;
    created_at: string;
    crossposted_at: string;
    description: string;
    edited_at: string;
    flare_tag: {
        name: string;
        bg_color_hex: string;
        text_color_hex: string;
    };
    id: number;
    last_comment_at: string;
    path: string;
    positive_reactions_count: number;
    public_reactions_count: number;
    published_at: string;
    published_timestamp: string;
    readable_publish_date: string;
    reading_time_minus: number;
    slug: string;
    social_media: string;
    tags: string;
    title: string;
    type_of: string;
    url: string;
}

interface IProject {
    owner: string;
    repo: string;
    link: string;
    description: string;
    language: string;
    stars: string;
    forks: string;
}

let articles: IArticle[];
fetch('https://dev.to/api/articles?username=kimlimjustin')
    .then((response) => response.json())
    .then((result) => {
        articles = result;
    });

let pinned_projects: IProject[]; // variable used in terminal
fetch('https://gh-pinned-repos.egoist.dev/?username=kimlimjustin')
    .then((response) => response.json())
    .then((result) => {
        pinned_projects = result;
    });

const ProcessTerminalInput = (input: string) => {
    let output = <span>${input.split(' ')[0]} is not recognized as a command.</span>;
    switch (input.split(' ')[0]) {
        case 'help':
            output = (
                <>
                    <span>Some available commands are:</span>
                    <ul>
                        <li>about ......... About me</li>
                        <li>clear ......... Clear terminal log</li>
                        <li>exit .......... Exit terminal session</li>
                        <li>help .......... Showing available commands</li>
                        <li>links ......... Social media links</li>
                        <li>theme ......... Change theme of terminal</li>
                        <li>articles ...... Recent articles from Forem (dev.to)</li>
                        <li>projects ...... My pinned projects on GitHub</li>
                    </ul>
                    <span>Besides, there are some hidden feature, try to find it out!</span>
                </>
            );
            break;
        case 'about':
            output = ABOUT_ME;
            break;
        case 'links':
            output = (
                <ul>
                    <li>
                        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href={FOREM_LINK} target="_blank" rel="noopener noreferrer">
                            Dev.to
                        </a>
                    </li>
                    <li>
                        <a href={REDDIT_LINK} target="_blank" rel="noopener noreferrer">
                            Reddit
                        </a>
                    </li>
                    <li>
                        <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">
                            Email
                        </a>
                    </li>
                </ul>
            );
            break;
        case 'theme':
            if (input.trim() === 'theme') {
                output = (
                    <>
                        <span>Usage: theme [option]. Available themes:</span>
                        <ul>
                            {AVAILABLE_TERMINAL_THEMES.map((theme) => (
                                <li key={theme}>{theme}</li>
                            ))}
                        </ul>
                    </>
                );
            } else {
                let inputTheme = input.split(' ').slice(1).join(' ').trim();
                if (AVAILABLE_TERMINAL_THEMES.indexOf(inputTheme) === -1) output = <span>`${inputTheme} is not recognized as a theme`</span>;
                else {
                    output = <></>;
                    document.querySelector<HTMLElement>('.terminal')!.dataset.theme = inputTheme;
                }
            }
            break;
        case 'articles':
            output = (
                <ul>
                    {articles!.map((article: IArticle) => {
                        return (
                            <li key={article.id}>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    {article.title} ({article.readable_publish_date}) ({article.positive_reactions_count} reactions)
                                </a>
                            </li>
                        );
                    })}
                </ul>
            );
            break;
        case 'github':
            window.open('https://github.com/kimlimjustin', '_blank');
            output = <></>;
            break;
        case 'https://kimlimjustin.com':
        case 'kimlimjustin.com':
        case 'http://kimlimjustin.com':
            output = (
                <span>
                    This website is designed and built by Justin Maximillian Kimlim using HTML, CSS and Vanilla JavaScript and was inspired by several
                    websites over the internet. Find out the repo of this website{' '}
                    <a href="https://github.com/kimlimjustin/kimlimjustin.com" target="_blank" rel="noopener noreferrer">
                        here.
                    </a>
                </span>
            );
            break;
        case 'hello':
        case 'hi':
            window.open('mailto:kimlimjustin@gmail.com?Subject=Hello');
            output = (
                <span>
                    Say hello to me <a href="mailto:kimlimjustin@gmail.com?Subject=Hello">here!</a>
                </span>
            );
            break;
        case 'refresh':
            location.reload();
            output = <></>;
            break;
        case 'whoami':
            output = <span>You are human when you type this command :)</span>;
            break;
        case 'pwd':
            output = <span>https://kimlimjustin.com</span>;
            break;
        case 'sudo':
            output = <span>Are you thinking you are on linux man?</span>;
            break;
        case 'cd':
            output = <span>Where do you want to go? This is just a website that simulates terminal haha.</span>;
            break;
        case 'ls':
            output = <span>Nothing here xd.</span>;
            break;
        case 'ping':
            output = <span>Where do you want to ping to? Haha</span>;
            break;
        case 'echo':
            output = <span>${input.split(' ').slice(1).join(' ')}</span>;
            break;
        case 'kill':
            output = <span>Please don{"'"}t kill me 😆😆</span>;
            break;
        case 'man':
            output = <span>What?</span>;
            break;
        case 'shutdown':
            output = <span>Wait? what???</span>;
            break;
        case 'whoareu':
        case 'whoareyou':
            output = (
                <span>
                    I{"'"}m human :) Contact me <a href="kimlimjustin@gmail.com">here</a>
                </span>
            );
            break;
        case 'clear':
            if (input === 'clear cache') {
                localStorage.clear();
                output = <span>Localstorage has been cleared :)</span>;
            }
            break;
        case 'date':
            output = <span>new Date()</span>;
            break;
        case 'projects':
            output = (
                <>
                    <span>My pinned repositories:</span>
                    <ul>
                        {pinned_projects!.map((repo) => (
                            <li key={repo.link}>
                                <a href={repo.link} target="_blank" rel="noopener noreferrer">
                                    {repo.owner}/{repo.repo}
                                </a>{' '}
                                ({repo.description}, {repo.language}, {repo.stars} stars, {repo.forks} forks)
                            </li>
                        ))}
                    </ul>
                </>
            );
            break;
        case 'fork':
        case 'star':
            window.open('https://github.com/kimlimjustin/kimlimjustin.com', '_blank');
            output = <></>;
            break;
    }
    return output;
};

export default ProcessTerminalInput;
