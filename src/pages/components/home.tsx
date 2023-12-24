import styles from "@/styles/Home.module.css";
import { Typewriter } from "@/utils/typewriter";
import { Poppins, Alfa_Slab_One } from "next/font/google";
import SocialLinks from "./sociallinks";
import Image from "next/image";

const POPPINS = Poppins({
    weight: "400",
    subsets: ["latin-ext"],
});

const ALFA_SLAB_ONE = Alfa_Slab_One({
    weight: "400",
    subsets: ["latin-ext"],
});

const INTRO_STRINGS = [
    "full stack developer",
    "high school student",
    "NGO FOUNDER",
];

const Home = () => (
    <div className={styles.container}>
        <SocialLinks />
        <Typewriter strings={INTRO_STRINGS} />
        <h2 className={[styles.title, POPPINS.className].join(" ")}>
            Hello, I am
        </h2>
        <h1 className={[styles.name1, ALFA_SLAB_ONE.className].join(" ")}>
            JUSTIN
        </h1>
        <h1 className={[styles.name2, ALFA_SLAB_ONE.className].join(" ")}>
            KIMLIM
        </h1>
        <div className={styles.glow}></div>
        <div className={styles.imageContainer}>
            <Image
                className={styles.image}
                src="/picture.png"
                alt="Justin Maximillian Kimlim"
                layout="fill"
            />
        </div>
        <div className={[styles.activities, POPPINS.className].join(" ")}>
            View Portfolio
        </div>
        <a
            className={[styles.contactme, POPPINS.className].join(" ")}
            href="mailto:kimlimjustin@gmail.com"
        >
            Reach Me Out
        </a>
    </div>
);
export default Home;
