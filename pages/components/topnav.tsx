import Image from 'next/image';
import { useEffect, useState } from 'react';

const Topnav = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [topnavExpanded, setTopnavExpanded] = useState<boolean>(false);
    useEffect(() => {
        setScreenWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', () => setScreenWidth(document.documentElement.clientWidth));
    }, []);

    return (
        <div className="topnav">
            <div className="topnav-main">
                <div className="topnav-logo">
                    <Image src="/pp.webp" alt="Justin Maximillian Kimlim's profile picture" layout="fill" />
                </div>
                <a href="#home" className="topnav-name">
                    {screenWidth <= 520 ? '<Justin M.K. />' : '<Justin Maximillian Kimlim />'}
                </a>
            </div>
            <span className="topnav-ham" onClick={() => setTopnavExpanded(true)}>
                ☰
            </span>
            <div className="topnav-menu" style={topnavExpanded ? { width: '100%' } : {}}>
                <span className="topnav-exit-menu" onClick={() => setTopnavExpanded(false)}>
                    ×
                </span>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contact</a>
            </div>
        </div>
    );
};
export default Topnav;
