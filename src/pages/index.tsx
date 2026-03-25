import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "@/utils/constant";
import {
    education,
    experience,
    projects,
    honors,
    activities,
    skills,
} from "@/data/resume";

const NAV_ITEMS = [
    "about",
    "education",
    "experience",
    "opensource",
    "honors",
    "activities",
    "skills",
    "contact",
] as const;

const NAV_LABELS: Record<string, string> = {
    opensource: "Open Source",
};

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
                <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon.png"
                />
            </Head>
            <main className={styles.main}>
                {/* Hero */}
                <header className={styles.hero}>
                    <h1 className={styles.name}>
                        Justin Maximillian Kimlim
                    </h1>
                    <p className={styles.tagline}>
                        Automation Engineering @ Tsinghua University &apos;28
                    </p>
                    <div className={styles.links}>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </header>

                {/* Navigation */}
                <nav className={styles.nav}>
                    {NAV_ITEMS.map((id) => (
                        <a key={id} href={`#${id}`} className={styles.navCard}>
                            {NAV_LABELS[id] ??
                                id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    ))}
                </nav>

                {/* About */}
                <section id="about" className={styles.section}>
                    <h2 className={styles.sectionTitle}>About</h2>
                    <p className={styles.aboutText}>
                        I&apos;m an undergraduate at Tsinghua University&apos;s
                        Department of Automation, specializing in Brain &amp;
                        Cognitive Science. My work spans research in
                        optogenetics and lunar robotics vision, full-stack
                        software development, and open-source projects.
                        I&apos;m passionate about using technology to solve
                        real-world problems — from building tools used by
                        thousands of developers to leading social impact
                        initiatives serving over 1,000 students. I speak
                        Indonesian, English, Chinese, and Japanese.
                    </p>
                </section>

                {/* Education */}
                <section id="education" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map((edu) => (
                        <div key={edu.school} className={styles.eduItem}>
                            <div className={styles.eduHeader}>
                                <span className={styles.eduSchool}>{edu.school}</span>
                                <span className={styles.eduDate}>{edu.date}</span>
                            </div>
                            {edu.detail && (
                                <div className={styles.eduDetail}>{edu.detail}</div>
                            )}
                            <ul className={styles.eduBullets}>
                                {edu.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Experience */}
                <section id="experience" className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Research &amp; Experience
                    </h2>
                    {experience.map((exp) => (
                        <div key={exp.role} className={styles.expItem}>
                            <div className={styles.expHeader}>
                                <span className={styles.expRole}>{exp.role}</span>
                                <span className={styles.expDate}>{exp.date}</span>
                            </div>
                            {exp.org && (
                                <div className={styles.expOrg}>{exp.org}</div>
                            )}
                            <div className={styles.expDesc}>{exp.desc}</div>
                        </div>
                    ))}
                </section>

                {/* Open Source */}
                <section id="opensource" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Open Source</h2>
                    {projects.map((proj) => (
                        <div key={proj.name} className={styles.projItem}>
                            <div className={styles.projName}>
                                <a
                                    href={proj.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {proj.name}
                                </a>
                            </div>
                            <div className={styles.projDesc}>{proj.desc}</div>
                            <div className={styles.projTech}>{proj.tech}</div>
                        </div>
                    ))}
                </section>

                {/* Honors */}
                <section id="honors" className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Honors &amp; Awards
                    </h2>
                    <ul className={styles.honorList}>
                        {honors.map((h) => (
                            <li key={h.name}>
                                <span className={styles.honorName}>{h.name}</span>
                                <span className={styles.honorDate}>{h.date}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Activities */}
                <section id="activities" className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Leadership &amp; Activities
                    </h2>
                    {activities.map((act) => (
                        <div key={act.role} className={styles.actItem}>
                            <div className={styles.actHeader}>
                                <span className={styles.actRole}>{act.role}</span>
                                <span className={styles.actDate}>{act.date}</span>
                            </div>
                            <div className={styles.actDesc}>{act.desc}</div>
                        </div>
                    ))}
                </section>

                {/* Skills */}
                <section id="skills" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    {skills.map((s) => (
                        <div key={s.label} className={styles.skillGroup}>
                            <span className={styles.skillLabel}>
                                {s.label}:{" "}
                            </span>
                            <span className={styles.skillValue}>{s.value}</span>
                        </div>
                    ))}
                </section>

                {/* Contact */}
                <section id="contact" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <div className={styles.contactInfo}>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        {" · "}
                        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">GitHub</a>
                        {" · "}
                        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </section>

                <footer className={styles.footer}>
                    &copy; {new Date().getFullYear()} Justin Maximillian
                    Kimlim
                </footer>
            </main>
        </>
    );
}
