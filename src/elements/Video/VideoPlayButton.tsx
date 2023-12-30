import { useContext } from 'react'
import { VideoContext } from './Video';
import { FaCaretRight, FaPause } from 'react-icons/fa6';

import styles from "./video.module.sass"


export default function VideoPlayButton() {

    const videoContext = useContext(VideoContext);

    return (
        <button className={`${styles.video_controls__play_button} ${styles.video_controls__button_hover}`} onClick={() => {
            if (videoContext.setPlay)
                videoContext.setPlay(!videoContext.play);
        }}>
            {
                !videoContext.play && <FaCaretRight />
            }
            {
                videoContext.play && <FaPause />
            }
        </button>
    )
}
