import { Poppins, Alfa_Slab_One } from "next/font/google";
import styles from "@/styles/Home.module.css";
import getActivities from "@/data/activities";
import { encode } from "html-entities";

const POPPINS = Poppins({
    weight: "400",
    subsets: ["latin-ext"],
});

const ALFA_SLAB_ONE = Alfa_Slab_One({
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
            <h2 className={styles.activitiesSubtitle}>What do I do</h2>
            <div className={styles.activitiesList}>
                {getActivities().map((activity) => (
                    <div className={styles.activitiesItem} key={activity.name}>
                        <div
                            className={[
                                styles.activitiesItemName,
                                ALFA_SLAB_ONE.className,
                            ].join(" ")}
                        >
                            {activity.name}
                        </div>
                        <div className={styles.activitiesItemRole}>
                            {activity.role}
                        </div>
                        <img
                            src={activity.image}
                            className={styles.activitiesImage}
                            alt={activity.name}
                        />
                        <p className={styles.activitiesItemBriefDescription}>
                            {encode(activity.brief_description)}
                        </p>
                        <a href="" className={styles.activitiesItemReadMore}>
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activities;
