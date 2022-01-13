import Image from 'next/image';
import { ABOUT_ME, METRICS_SRC } from '../../Util/constant';
const AboutMe = () => {
    return (
        <>
            <h2 className="about-heading" id="about">
                About me
            </h2>
            <div className="about">
                <div className="about-metrics">
                    <Image
                        loader={() => METRICS_SRC}
                        src={METRICS_SRC}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                        alt="Justin Maximillian Kimlim's metric"
                    />
                </div>
                <div className="about-description">{ABOUT_ME}</div>
            </div>
        </>
    );
};
export default AboutMe;
