export interface Education {
    school: string;
    date: string;
    detail?: string;
    bullets: string[];
}

export interface Experience {
    role: string;
    date: string;
    org?: string;
    desc: string;
}

export interface Project {
    name: string;
    href: string;
    desc: string;
    tech: string;
}

export interface Honor {
    name: string;
    date: string;
}

export interface Activity {
    role: string;
    date: string;
    desc: string;
}

export interface Skill {
    label: string;
    value: string;
}

export const education: Education[] = [
    {
        school: "Tsinghua University \u2014 Department of Automation, B.Eng.",
        date: "2024.08 \u2013 Present",
        detail: "GPA 3.6 / 4.0",
        bullets: [
            "Class 46, Specialized Class in Brain & Cognitive Science",
            "Research: Optogenetic treatment of Obstructive Sleep Apnea (OSA)",
            "Tsinghua HPC Team \u00b7 Archery Team \u00b7 President, Zijing College Assoc. of Science & Technology",
        ],
    },
    {
        school: "NTU-BIM Pre-College Summer Program \u2014 Nanyang Technological University, Singapore",
        date: "2023.06 \u2013 2023.07",
        bullets: [
            'Completed semester-equivalent "Navigating the Digital World" course in two weeks',
            "Leadership and conflict management training by Nanyang Business School faculty",
            "Funded by Indonesia\u2019s Puspresnas / Indonesia Maju Scholarship",
        ],
    },
    {
        school: "Sutomo 1 Senior High School \u2014 Natural Science",
        date: "2021.07 \u2013 2024.06",
        detail: "GPA 94 / 100",
        bullets: [
            "Student Council President",
            "Indonesian National Astronomy Olympiad Training Team (TOASTI)",
            'Ministry of Education "Indonesia Maju" Scholarship Awardee',
        ],
    },
];

export const experience: Experience[] = [
    {
        role: "Undergrad Research \u2014 Multi-Camera Vision for Lunar Robotics",
        date: "2025.09 \u2013 Present",
        org: "Tsinghua University",
        desc: "Developing coordinate frame systems for each camera in a multi-camera lunar robot system and designing algorithms for robot sight modeling.",
    },
    {
        role: "Undergrad Research \u2014 Optogenetic Treatment of OSA",
        date: "2025.02 \u2013 Present",
        org: "Tsinghua University",
        desc: "Conducting experiments combining electrical stimulation with optogenetics to explore intelligent OSA treatment. Independently developed a smartphone-audio-based diagnostic model achieving ~85% accuracy.",
    },
    {
        role: "Intern \u2014 AI Medical Engineering",
        date: "2025.02 \u2013 Present",
        org: "Beijing Biosense Co., Ltd.",
        desc: "High-precision calibration and testing of embedded medical machinery. Core feature development for an intelligent medical treatment app.",
    },
    {
        role: "Project Lead \u2014 Algorithmia",
        date: "2025.01 \u2013 Present",
        org: "Tsinghua University Algorithm Association",
        desc: "Initiated development of a competitive programming problem-setting platform, approved by the China Computer Federation (CCF). Leading a team of 10 for full-stack development (React + Go).",
    },
    {
        role: "R&D \u2014 Judicia Online Judge",
        date: "2025.01 \u2013 Present",
        org: "Tsinghua University Algorithm Association",
        desc: "Built an Online Judge platform with an extensible judging system optimized in Rust with plugin-based architecture. Planned for use in the China National Olympiad of Informatics (NOI).",
    },
    {
        role: "Lead Software Developer \u2014 Studio 31 Hair Design",
        date: "2023.03 \u2013 Present",
        desc: "Built and maintained an appointment system website serving ~300k daily visitors, plus an internal finance system and social media publication system. Tech: Next.js, React, Node.js.",
    },
    {
        role: "Freelance Developer \u2014 COMMUNE-OS",
        date: "2022.06 \u2013 2024.08",
        desc: "Maintained and optimized system functionality, fixed front-end and back-end bugs, and built an importer tool from Mastodon.",
    },
];

export const projects: Project[] = [
    {
        name: "Xplorer \u2014 5,100+ GitHub Stars",
        href: "https://github.com/kimlimjustin/xplorer",
        desc: "Cross-platform, highly customizable file manager with file preview and multi-tab support. Reached GitHub Trending multiple times \u2014 ranked #2 overall and #1 in TypeScript.",
        tech: "TypeScript \u00b7 React \u00b7 Rust \u00b7 Tauri",
    },
];

export const honors: Honor[] = [
    { name: "Beijing Government Scholarship Type A", date: "2025.12" },
    { name: "Tsinghua Dept. of Automation Outstanding Volunteer", date: "2025.11" },
    { name: "Tsinghua-Nike Sustainability Ambassador", date: "2025.09" },
    { name: "Outstanding Volunteer, International Olympiad of AI", date: "2025.09" },
    { name: "Top 10, Indonesian National Astronomy Olympiad Training Team", date: "2024.05" },
    { name: "Bronze Medal, Indonesian National Astronomy Olympiad", date: "2023.08" },
    { name: 'Indonesia Ministry of Education "Indonesia Maju" Scholarship', date: "2022 \u2013 2024" },
    { name: "GitHub Trending Developer of the Day #22", date: "2023.09" },
];

export const activities: Activity[] = [
    {
        role: "President \u2014 Zijing College Assoc. of Science & Technology",
        date: "2025 Fall \u2013 Present",
        desc: "Led planning and execution of academic and technology initiatives. Organized ~10 activities with 30% participation rate and led university-recognized technological projects.",
    },
    {
        role: "Team Leader \u2014 Tsinghua-South Africa Overseas Social Practice",
        date: "2025 Fall",
        desc: "Led a 13-member interdisciplinary team analyzing South Africa\u2019s systemic resilience under energy constraints. Engaged in policy dialogues with City of Cape Town executives, the Chinese Ambassador to South Africa, and UNDP leaders.",
    },
    {
        role: "Core Member & Project Lead \u2014 Tsinghua Algorithm Association",
        date: "2025 Spring \u2013 Present",
        desc: 'Led development of Algorithmia (approved by CCF). Co-organized THUPC and the inaugural "Jiujing Cup" International Algorithm Competition.',
    },
    {
        role: "Teaching Assistant \u2014 Archery Class",
        date: "2025 Fall",
        desc: "Instructed 23 senior undergraduate students in archery technique. All students passed the final assessment.",
    },
    {
        role: "Founder & President \u2014 Aspiring Change Makers",
        date: "2023.06 \u2013 2024.06",
        desc: 'Founded and led a ~100-member non-profit organization dedicated to equalizing education for underprivileged children. Conducted 63 activities across 32 orphanages \u2014 including science experiments, reading sessions, beach outings, and creative workshops \u2014 serving ~1,000 students with 300+ total service hours. Presented the project at Indonesia\u2019s Ministry of Education (Kemendikbudristek) during the "Gelar Karya BIM" national showcase, where it was recognized as an outstanding student-led public service initiative.',
    },
    {
        role: "Astronomy \u2014 Olympiad, Observatory & Mentoring",
        date: "2022 \u2013 Present",
        desc: "Bronze medalist at the Indonesian National Science Olympiad (OSN) in Astronomy (2023). Selected for the national training team (TOASTI) for the International Olympiad on Astronomy and Astrophysics (IOAA) 2024, training at Bosscha Observatory (Institut Teknologi Bandung). Visited the National Astronomical Observatories of China (NAOC) Xinglong station for observation work. Mentored 30 juniors in the Sutomo 1 Astronomy Club, guiding 3 to provincial and 2 to national olympiad levels. Currently a member of Tsinghua Astronomy Association\u2019s observation department.",
    },
    {
        role: "Student Council President \u2014 Sutomo 1 High School",
        date: "2022.08 \u2013 2023.07",
        desc: "Coordinated 145 officers. Organized Talent Week, Education Expo, and Summer Camp with attendance in the thousands to tens of thousands per event. Represented the school at international conferences.",
    },
];

export const skills: Skill[] = [
    { label: "Programming", value: "C, C++, Python, Rust, JavaScript, TypeScript, Go" },
    { label: "Frameworks & Tools", value: "React, Node.js, Next.js, Electron, Tauri, Django" },
    { label: "Research", value: "AI/ML, Data Modeling, Optogenetic Experiments, Supercomputing Platforms" },
    { label: "Languages", value: "Indonesian (Native), English (IELTS 7.5), Chinese (HSK 6), Japanese (JLPT N3)" },
];
