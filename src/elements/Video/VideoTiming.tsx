import { useContext } from 'react'
import { VideoContext } from './Video';
import { timePrettify } from '../../helpers/functions/TimePrettifier';
import styles from "./video.module.sass"

export default function VideoTiming() {

    const videoContext = useContext(VideoContext);

    return (
        <div className={styles.video_controls__timings}>
            <span>{timePrettify(videoContext.videoState.currentTime)}</span> / <span>{timePrettify(videoContext.videoState.duration)}</span>
        </div>
    )
}
