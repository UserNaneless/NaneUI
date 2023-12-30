import { useContext } from 'react'
import { VideoContext } from './Video';

import styles from "./video.module.sass"
import { FaCompress, FaExpand } from 'react-icons/fa6';

export default function VideoFullscreen() {

    const videoContext = useContext(VideoContext);

    return (
        <button className={`${styles.video_controls__settings_button} ${styles.video_controls__button}`} onClick={() => {
            if (videoContext.setVideoState)
                videoContext.setVideoState({
                    ...videoContext.videoState,
                    fullscreen: !videoContext.videoState.fullscreen
                });
            if (!videoContext.videoState.fullscreen)
                if (videoContext.wrapperRef)
                    videoContext.wrapperRef.current?.requestFullscreen();
            else
                document.exitFullscreen().catch(e => e);

        }}>
            {
                !videoContext.videoState.fullscreen && <FaExpand />
            }
            {
                videoContext.videoState.fullscreen && <FaCompress />
            }

        </button>
    )
}
