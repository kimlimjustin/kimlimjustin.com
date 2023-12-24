import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";

const POPPINS = Poppins({
    weight: "400",
    subsets: ["latin-ext"],
});

const AboutElement = () => (
    <div className={styles.aboutmeContainer}>
        <div className={[styles.aboutme, POPPINS.className].join(" ")}>
            {/* <h1 className={styles.aboutQuestion}>Who Am I?</h1> */}
            <h1 className={styles.aboutTitle}>About Me</h1>
            <div className={styles.aboutDataContainer}>
                <div className={styles.aboutImageContainer}>
                    <img
                        className={styles.aboutImage}
                        src="/aboutme.jpg"
                        alt="Justin Kimlim"
                    />
                </div>
                <div className={styles.aboutContent}>
                    <p>
                        From classrooms to coding, I'm Justin Maximillian
                        Kimlim, a 12th grader with a relentless drive to learn
                        and contribute. Beyond the school walls, I lead Aspiring
                        Change Makers, a 100-member non-profit organization I
                        co-founded, dedicated to championing education in dozens
                        of orphanages. Here, I orchestrate initiatives and
                        empower youth to be advocates for themselves and their
                        communities.
                    </p>
                    <p>
                        Leadership isn't limited to titles. Within Sutomo 1
                        Senior High School's Student Council, I steered as a
                        Steering Committee (previously president), driving
                        student engagement and fostering a vibrant school
                        environment. My passion for organization spills over to
                        PPSN, a national-level science practical organization,
                        where I currently handle the HR directorate, ensuring
                        our team stays motivated and thrives.
                    </p>
                    <p>
                        Beyond leadership, I'm a tech whiz and a stargazer. When
                        the bell rings, I unleash my inner techie, building
                        innovative projects like Xplorer, a game-changer file
                        explorer built on TypeScript and Rust. When the code
                        stopped compiling, I lost myself in the beauty of the
                        cosmos, a passion that led me to win the national
                        astronomy olympiad. Each line of code and every
                        twinkling star fuels my desire to build a brighter
                        future, both for myself and for my community.
                    </p>
                    <p>
                        Want to join me on this adventure? Scroll down to see my
                        projects, follow me on my journey, and let's connect!
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default AboutElement;
