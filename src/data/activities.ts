const activities = [
    {
        name: "Student Council",
        image: "/activities/studentcouncil.jpg",
        role: "President (2022-2023), Steering Committe (2023-ongoing)",
        brief_description:
            "Leading ~145 committees in ~3000 students school; Managed talents week, camps, expo with a total ~10k participants; discussed educational issues with governor; Represented school in international conference",
    },
    {
        name: "Aspiring Change Makers",
        role: "Founder, President (2023-ongoing)",
        image: "/activities/aspiringchangemakers.jpg",
        brief_description:
            "Leading 100 members to improve education in orpahanages; Empowered ~500 less fortunate students through scientific experiments and expert interactions, broadening their opportunities; Presented the project to the Ministry of Education",
    },
    {
        name: "Xplorer",
        image: "/activities/xplorer.webp",
        role: "Founder, Lead Developer (2021-ongoing)",
        brief_description:
            "Out-of-the-box designed file explorer that supports tabbing, file previewing, and customizing; 3.6 stars on GitHub; 32k downloads; Built using TypeScript and Rust on top of Tauri.",
    },
    {
        name: "Sutomo 1 Astronomy Club",
        image: "/activities/astronomyclub.jpg",
        role: "Mentor (2022 - ongoing)",
        brief_description:
            "Facilitated 30 juniors in Astronomy and Astrophysics, teaching complex lessons. Led 3 members to provincial olympiad, and 2 to national olympiads. ",
    },
];
const getActivities = () => {
    return activities;
};

export default getActivities;
