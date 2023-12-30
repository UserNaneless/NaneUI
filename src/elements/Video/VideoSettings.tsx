import { FaGear } from 'react-icons/fa6';
import styles from "./video.module.sass"

export default function VideoSettings() {
    return (
        <button className={`${styles.video_controls__settings_button} ${styles.video_controls__button}`}>
            <FaGear />
            <div className={styles.video_controls__settings_wrapper}></div>
        </button>
    )
}
