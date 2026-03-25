import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
    EMAIL,
    GITHUB_LINK,
    LINKEDIN_LINK,
} from "@/utils/constant";

export default function Home() {
    return (
        <>
            <Head>
                <title>Justin Maximillian Kimlim</title>
                <meta
                    name="description"
                    content="Justin Maximillian Kimlim — Automation Engineering student at Tsinghua University, software developer, and open-source contributor."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>
            <main className={styles.main}>
                {/* Hero */}
                <header className={styles.hero}>
                    <h1 className={styles.name}>Justin Maximillian Kimlim</h1>
                    <p className={styles.tagline}>
                        Automation Engineering @ Tsinghua University &apos;28
                    </p>
                    <div className={styles.links}>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <a
                            href={GITHUB_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href={LINKEDIN_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </header>

                {/* Navigation Cards */}
                <nav className={styles.nav}>
                    <a href="#about" className={styles.navCard}>About</a>
                    <a href="#education" className={styles.navCard}>Education</a>
                    <a href="#experience" className={styles.navCard}>Experience</a>
                    <a href="#opensource" className={styles.navCard}>Open Source</a>
                    <a href="#honors" className={styles.navCard}>Honors</a>
                    <a href="#activities" className={styles.navCard}>Activities</a>
                    <a href="#skills" className={styles.navCard}>Skills</a>
                    <a href="#contact" className={styles.navCard}>Contact</a>
                </nav>

                {/* About */}
                <section id="about" className={styles.section}>
                    <h2 className={styles.sectionTitle}>About</h2>
                    <p className={styles.aboutText}>
                        I&apos;m an undergraduate at Tsinghua University&apos;s
                        Department of Automation, specializing in Brain &amp;
                        Cognitive Science. My work spans research in optogenetics
                        and lunar robotics vision, full-stack software development,
                        and open-source projects. I&apos;m passionate about using
                        technology to solve real-world problems — from building
                        tools used by thousands of developers to leading social
                        impact initiatives serving over 1,000 students. I speak
                        Indonesian, English, Chinese, and Japanese.
                    </p>
                </section>

                {/* Education */}
                <section id="education" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>

                    <div className={styles.eduItem}>
                        <div className={styles.eduHeader}>
                            <span className={styles.eduSchool}>
                                Tsinghua University — Department of Automation, B.Eng.
                            </span>
                            <span className={styles.eduDate}>2024.08 – Present</span>
                        </div>
                        <div className={styles.eduDetail}>GPA 3.6 / 4.0</div>
                        <ul className={styles.eduBullets}>
                            <li>Class 46, Specialized Class in Brain &amp; Cognitive Science</li>
                            <li>Research: Optogenetic treatment of Obstructive Sleep Apnea (OSA)</li>
                            <li>Tsinghua HPC Team · Archery Team · President, Zijing College Assoc. of Science &amp; Technology</li>
                        </ul>
                    </div>

                    <div className={styles.eduItem}>
                        <div className={styles.eduHeader}>
                            <span className={styles.eduSchool}>
                                NTU-BIM Pre-College Summer Program — Nanyang Technological University, Singapore
                            </span>
                            <span className={styles.eduDate}>2023.06 – 2023.07</span>
                        </div>
                        <ul className={styles.eduBullets}>
                            <li>Completed semester-equivalent &quot;Navigating the Digital World&quot; course in two weeks</li>
                            <li>Leadership and conflict management training by Nanyang Business School faculty</li>
                            <li>Funded by Indonesia&apos;s Puspresnas / Indonesia Maju Scholarship</li>
                        </ul>
                    </div>

                    <div className={styles.eduItem}>
                        <div className={styles.eduHeader}>
                            <span className={styles.eduSchool}>
                                Sutomo 1 Senior High School — Natural Science
                            </span>
                            <span className={styles.eduDate}>2021.07 – 2024.06</span>
                        </div>
                        <div className={styles.eduDetail}>GPA 94 / 100</div>
                        <ul className={styles.eduBullets}>
                            <li>Student Council President</li>
                            <li>Indonesian National Astronomy Olympiad Training Team (TOASTI)</li>
                            <li>Ministry of Education &quot;Indonesia Maju&quot; Scholarship Awardee</li>
                        </ul>
                    </div>
                </section>

                {/* Research & Professional Experience */}
                <section id="experience" className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Research &amp; Experience
                    </h2>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                Undergrad Research — Multi-Camera Vision for Lunar Robotics
                            </span>
                            <span className={styles.expDate}>2025.09 – Present</span>
                        </div>
                        <div className={styles.expOrg}>Tsinghua University</div>
                        <div className={styles.expDesc}>
                            Developing coordinate frame systems for each camera in a
                            multi-camera lunar robot system and designing algorithms
                            for robot sight modeling.
                        </div>
                    </div>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                Undergrad Research — Optogenetic Treatment of OSA
                            </span>
                            <span className={styles.expDate}>2025.02 – Present</span>
                        </div>
                        <div className={styles.expOrg}>Tsinghua University</div>
                        <div className={styles.expDesc}>
                            Conducting experiments combining electrical stimulation
                            with optogenetics to explore intelligent OSA treatment.
                            Independently developed a smartphone-audio-based
                            diagnostic model achieving ~85% accuracy.
                        </div>
                    </div>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                Intern — AI Medical Engineering
                            </span>
                            <span className={styles.expDate}>2025.02 – Present</span>
                        </div>
                        <div className={styles.expOrg}>
                            Beijing Biosense Co., Ltd.
                        </div>
                        <div className={styles.expDesc}>
                            High-precision calibration and testing of embedded medical
                            machinery. Core feature development for an intelligent
                            medical treatment app.
                        </div>
                    </div>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                Project Lead — Algorithmia
                            </span>
                            <span className={styles.expDate}>2025.01 – Present</span>
                        </div>
                        <div className={styles.expOrg}>
                            Tsinghua University Algorithm Association
                        </div>
                        <div className={styles.expDesc}>
                            Initiated development of a competitive programming
                            problem-setting platform, approved by the China Computer
                            Federation (CCF). Leading a team of 10 for full-stack
                            development (React + Go).
                        </div>
                    </div>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                R&amp;D — Judicia Online Judge
                            </span>
                            <span className={styles.expDate}>2025.01 – Present</span>
                        </div>
                        <div className={styles.expOrg}>
                            Tsinghua University Algorithm Association
                        </div>
                        <div className={styles.expDesc}>
                            Built an Online Judge platform with an extensible judging
                            system optimized in Rust with plugin-based architecture.
                            Planned for use in the China National Olympiad of
                            Informatics (NOI).
                        </div>
                    </div>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                Lead Software Developer — Studio 31 Hair Design
                            </span>
                            <span className={styles.expDate}>2023.03 – Present</span>
                        </div>
                        <div className={styles.expDesc}>
                            Built and maintained an appointment system website serving
                            ~300k daily visitors, plus an internal finance system and
                            social media publication system. Tech: Next.js, React,
                            Node.js.
                        </div>
                    </div>

                    <div className={styles.expItem}>
                        <div className={styles.expHeader}>
                            <span className={styles.expRole}>
                                Freelance Developer — COMMUNE-OS
                            </span>
                            <span className={styles.expDate}>2022.06 – 2024.08</span>
                        </div>
                        <div className={styles.expDesc}>
                            Maintained and optimized system functionality, fixed
                            front-end and back-end bugs, and built an importer tool
                            from Mastodon.
                        </div>
                    </div>
                </section>

                {/* Open Source Projects */}
                <section id="opensource" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Open Source</h2>

                    <div className={styles.projItem}>
                        <div className={styles.projName}>
                            <a
                                href="https://github.com/kimlimjustin/xplorer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Xplorer — 5,100+ GitHub Stars
                            </a>
                        </div>
                        <div className={styles.projDesc}>
                            Cross-platform, highly customizable file manager with
                            file preview and multi-tab support. Reached GitHub
                            Trending multiple times — ranked #2 overall and #1 in
                            TypeScript.
                        </div>
                        <div className={styles.projTech}>
                            TypeScript · React · Rust · Tauri
                        </div>
                    </div>
                </section>

                {/* Honors */}
                <section id="honors" className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Honors &amp; Awards
                    </h2>
                    <ul className={styles.honorList}>
                        <li>
                            <span className={styles.honorName}>
                                Beijing Government Scholarship Type A
                            </span>
                            <span className={styles.honorDate}>2025.12</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                Tsinghua Dept. of Automation Outstanding Volunteer
                            </span>
                            <span className={styles.honorDate}>2025.11</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                Tsinghua-Nike Sustainability Ambassador
                            </span>
                            <span className={styles.honorDate}>2025.09</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                Outstanding Volunteer, International Olympiad of AI
                            </span>
                            <span className={styles.honorDate}>2025.09</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                Top 10, Indonesian National Astronomy Olympiad Training Team
                            </span>
                            <span className={styles.honorDate}>2024.05</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                Bronze Medal, Indonesian National Astronomy Olympiad
                            </span>
                            <span className={styles.honorDate}>2023.08</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                Indonesia Ministry of Education &quot;Indonesia Maju&quot; Scholarship
                            </span>
                            <span className={styles.honorDate}>2022 – 2024</span>
                        </li>
                        <li>
                            <span className={styles.honorName}>
                                GitHub Trending Developer of the Day #22
                            </span>
                            <span className={styles.honorDate}>2023.09</span>
                        </li>
                    </ul>
                </section>

                {/* Activities */}
                <section id="activities" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Leadership &amp; Activities</h2>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                President — Zijing College Assoc. of Science &amp; Technology
                            </span>
                            <span className={styles.actDate}>2025 Fall – Present</span>
                        </div>
                        <div className={styles.actDesc}>
                            Led planning and execution of academic and technology
                            initiatives. Organized ~10 activities with 30%
                            participation rate and led university-recognized
                            technological projects.
                        </div>
                    </div>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                Team Leader — Tsinghua-South Africa Overseas Social Practice
                            </span>
                            <span className={styles.actDate}>2025 Fall</span>
                        </div>
                        <div className={styles.actDesc}>
                            Led a 13-member interdisciplinary team analyzing South
                            Africa&apos;s systemic resilience under energy
                            constraints. Engaged in policy dialogues with City of
                            Cape Town executives, the Chinese Ambassador to South
                            Africa, and UNDP leaders.
                        </div>
                    </div>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                Core Member &amp; Project Lead — Tsinghua Algorithm Association
                            </span>
                            <span className={styles.actDate}>2025 Spring – Present</span>
                        </div>
                        <div className={styles.actDesc}>
                            Led development of Algorithmia (approved by CCF).
                            Co-organized THUPC and the inaugural &quot;Jiujing
                            Cup&quot; International Algorithm Competition.
                        </div>
                    </div>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                Teaching Assistant — Archery Class
                            </span>
                            <span className={styles.actDate}>2025 Fall</span>
                        </div>
                        <div className={styles.actDesc}>
                            Instructed 23 senior undergraduate students in archery
                            technique. All students passed the final assessment.
                        </div>
                    </div>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                Founder &amp; President — Aspiring Change Makers
                            </span>
                            <span className={styles.actDate}>2023.06 – 2024.06</span>
                        </div>
                        <div className={styles.actDesc}>
                            Founded and led a ~100-member non-profit organization
                            dedicated to equalizing education for underprivileged
                            children. Conducted 63 activities across 32 orphanages —
                            including science experiments, reading sessions, beach
                            outings, and creative workshops — serving ~1,000 students
                            with 300+ total service hours. Presented the project at
                            Indonesia&apos;s Ministry of Education (Kemendikbudristek)
                            during the &quot;Gelar Karya BIM&quot; national showcase,
                            where it was recognized as an outstanding student-led
                            public service initiative.
                        </div>
                    </div>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                Astronomy — Olympiad, Observatory &amp; Mentoring
                            </span>
                            <span className={styles.actDate}>2022 – Present</span>
                        </div>
                        <div className={styles.actDesc}>
                            Bronze medalist at the Indonesian National Science Olympiad
                            (OSN) in Astronomy (2023). Selected for the national
                            training team (TOASTI) for the International Olympiad on
                            Astronomy and Astrophysics (IOAA) 2024, training at
                            Bosscha Observatory (Institut Teknologi Bandung). Visited
                            the National Astronomical Observatories of China (NAOC)
                            Xinglong station for observation work. Mentored 30 juniors
                            in the Sutomo 1 Astronomy Club, guiding 3 to provincial
                            and 2 to national olympiad levels. Currently a member of
                            Tsinghua Astronomy Association&apos;s observation
                            department.
                        </div>
                    </div>

                    <div className={styles.actItem}>
                        <div className={styles.actHeader}>
                            <span className={styles.actRole}>
                                Student Council President — Sutomo 1 High School
                            </span>
                            <span className={styles.actDate}>2022.08 – 2023.07</span>
                        </div>
                        <div className={styles.actDesc}>
                            Coordinated 145 officers. Organized Talent Week,
                            Education Expo, and Summer Camp with attendance in the
                            thousands to tens of thousands per event. Represented
                            the school at international conferences.
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>

                    <div className={styles.skillGroup}>
                        <span className={styles.skillLabel}>Programming: </span>
                        <span className={styles.skillValue}>
                            C, C++, Python, Rust, JavaScript, TypeScript, Go
                        </span>
                    </div>
                    <div className={styles.skillGroup}>
                        <span className={styles.skillLabel}>
                            Frameworks &amp; Tools:{" "}
                        </span>
                        <span className={styles.skillValue}>
                            React, Node.js, Next.js, Electron, Tauri, Django
                        </span>
                    </div>
                    <div className={styles.skillGroup}>
                        <span className={styles.skillLabel}>Research: </span>
                        <span className={styles.skillValue}>
                            AI/ML, Data Modeling, Optogenetic Experiments,
                            Supercomputing Platforms
                        </span>
                    </div>
                    <div className={styles.skillGroup}>
                        <span className={styles.skillLabel}>Languages: </span>
                        <span className={styles.skillValue}>
                            Indonesian (Native), English (IELTS 7.5), Chinese (HSK 6),
                            Japanese (JLPT N3)
                        </span>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <div className={styles.contactInfo}>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        {" · "}
                        <a
                            href={GITHUB_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        {" · "}
                        <a
                            href={LINKEDIN_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>

                <footer className={styles.footer}>
                    &copy; {new Date().getFullYear()} Justin Maximillian Kimlim
                </footer>
            </main>
        </>
    );
}
