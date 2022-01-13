import Image from 'next/image';
import { Typewriter } from '../../Util/typewriter';
import { MY_TITLE } from '../../Util/constant';

const Intro = () => {
    return (
        <div className="intro" id="home">
            <div className="intro-about">
                <span className="intro-heading">Hi, this is</span>
                <h1 className="intro-title">Justin Maximillian Kimlim</h1>
                <p className="intro-text">
                    I&apos;m a <Typewriter strings={MY_TITLE}></Typewriter>
                    <span className="cursor"></span>
                </p>
                <a href="mailto:kimlimjustin@gmail.com" className="intro-btn" rel="noopener">
                    Get In Touch
                </a>
            </div>
            <div className="intro-pp">
                <Image src="/pp.webp" alt="Justin Maximillian Kimlim's potrait photo" layout="fill" />
            </div>
        </div>
    );
};
export default Intro;
