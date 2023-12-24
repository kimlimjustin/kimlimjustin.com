import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";

const POPPINS = Poppins({
    weight: "400",
    subsets: ["latin-ext"],
});

const Activities = () => {
    return (
        <div
            className={[styles.activitiesContainer, POPPINS.className].join(
                " "
            )}
        >
            <h1 className={styles.activitiesTitle}>Activities</h1>
        </div>
    );
};

export default Activities;
