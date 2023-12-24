import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
// Create infinite loop typewriter effect from given array of strings
export const Typewriter = ({ strings }: { strings: string[] }) => {
    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const [currentString, setCurrentString] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(
            () => {
                if (
                    !isDeleting &&
                    currentChar === strings[currentString].length
                ) {
                    setIsDeleting(true);
                } else if (isDeleting && currentChar === 0) {
                    setCurrentString((currentString + 1) % strings.length);
                    setIsDeleting(false);
                }

                setCurrentChar(currentChar + (isDeleting ? -1 : 1));
            },
            isDeleting ? DELETING_SPEED : TYPING_SPEED
        );

        return () => clearInterval(interval);
    }, [currentString, currentChar, isDeleting, strings]);

    return (
        <span className={styles.typewriter}>
            {strings[currentString].substring(0, currentChar)}
        </span>
    );
};
