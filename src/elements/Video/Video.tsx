import { useRef, useState, useEffect, createContext } from 'react';
import styles from "./video.module.sass"
import VideoPlayButton from './VideoPlayButton';
import VideoVolumeButton from './VideoVolumeButton';
import VideoTimeline from './VideoTimeline';
import VideoTiming from './VideoTiming';
import VideoSettings from './VideoSettings';
import VideoFullscreen from './VideoFullscreen';

// type VideoProps = {
//     t: string
// } & React.HTMLProps<HTMLVideoElement>

type VideoState = {
    duration?: number,
    currentTime?: number,
    fullscreen?: boolean,
    volume?: number
}

type VideoContextType = {
    videoRef?: React.RefObject<HTMLVideoElement>,
    wrapperRef?: React.RefObject<HTMLDivElement>,
    play?: boolean,
    videoState: VideoState,
    setPlay?: React.Dispatch<React.SetStateAction<boolean>>,
    setVideoState?: React.Dispatch<React.SetStateAction<VideoState>>,
}

export const VideoContext = createContext<VideoContextType>({
    videoState: {}
});

type VideoProps = {
    children?: React.ReactNode
}

export default function Video({ children }: VideoProps) {

    const [play, setPlay] = useState(false);
    const [videoState, setVideoState] = useState<VideoState>({
        fullscreen: false,
        volume: 1
    });
    const videoRef = useRef<HTMLVideoElement>(null);
    const timeBarRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (play)
            videoRef.current?.play();
        else
            videoRef.current?.pause();
    }, [play]);

    useEffect(() => {
        if (videoState.volume)
            videoRef.current!.volume = videoState.volume;
    }, [videoState.volume])


    return (
        <div ref={wrapperRef} className={styles.video_wrapper} onMouseMove={() => {

        }}>
            <video ref={videoRef} onTimeUpdate={() => {
                setVideoState({
                    ...videoState,
                    currentTime: videoRef.current?.currentTime
                });
                timeBarRef.current?.style.setProperty("--time", Number(videoRef.current?.currentTime) / Number(videoState.duration) * 100 + "%");
            }} onLoadedData={() => {
                setVideoState({
                    ...videoState,
                    duration: videoRef.current?.duration
                })
            }} onEnded={() => {
                setPlay(false);
            }} className={`${styles.video_video} ${videoState.fullscreen ? styles.video_video__fullscreen : ""}`} src="https://joy1.videvo.net/videvo_files/video/free/video0461/large_watermarked/_import_60e0167b4c3a96.14254367_preview.mp4"></video>
            <div className={styles.video_controls}>
                <VideoContext.Provider value={{
                    videoRef, wrapperRef, play, videoState, setPlay, setVideoState
                }}>
                    {
                        !children && <>
                            <VideoPlayButton />

                            <VideoVolumeButton />

                            <VideoTimeline />

                            <VideoTiming />

                            <VideoSettings />

                            <VideoFullscreen />
                        </>
                    }

                    {
                        children
                    }


                </VideoContext.Provider>

            </div>
        </div>
    )
}
