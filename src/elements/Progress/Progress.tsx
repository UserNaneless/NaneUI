import styles from "./progress.module.sass"
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

type ProgressProps = {
    error?: boolean,
    success?: boolean
}

export default function Progress({ error, success }: ProgressProps) {

    const [progress, setProgress] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.style.setProperty("--progress", progress + "%");
        setTimeout(() => {
            if (progress + 1 > 100)
                setProgress(0);
            else
                setProgress(progress + 1);
        }, 1000)
    }, [progress])

    return (
        <div className={`${styles.progress_wrapper} ${error ? styles.progress_wrapper__error : ""} ${success ? styles.progress_wrapper__success : ""}`}>
            <div ref={ref} className={styles.progress}>
            </div>

            {
                !error && !success &&
                <span className={styles.progress_icon}>
                    {progress}%
                </span>
            }

            {
                success &&
                <span className={styles.progress_icon}>
                    <FaCircleCheck />
                </span>
            }

            {
                error &&
                <span className={styles.progress_icon}>
                    <FaCircleXmark />
                </span>
            }

        </div>
    )
}
