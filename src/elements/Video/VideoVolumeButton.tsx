import { useContext } from 'react'
import { VideoContext } from './Video';
import { FaVolumeHigh } from 'react-icons/fa6';
import Slider from '../Slider/Slider';
import { advancedNumber } from '../../helpers/functions/Advanced';
import styles from "./video.module.sass"

export default function VideoVolumeButton() {

    const videoContext = useContext(VideoContext);

    return (
        <button className={`${styles.video_controls__volume_button} ${styles.video_controls__button}`}>
            <FaVolumeHigh />
            <div className={styles.video_controls__volume_wrapper}>
                <Slider picker={false} val={advancedNumber(videoContext.videoState.volume) * 100} onChange={(val) => {
                    if (videoContext.setVideoState)
                        videoContext.setVideoState({
                            ...videoContext.videoState,
                            volume: advancedNumber(val) / 100
                        })
                }} />
            </div>
        </button>
    )
}
