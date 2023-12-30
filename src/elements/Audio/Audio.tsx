import { useEffect, useRef, useState } from "react"

import styles from "./audio.module.sass"
import Slider from "../Slider/Slider"
import { advancedNumber } from "../../helpers/functions/Advanced"
import { timePrettify } from "../../helpers/functions/TimePrettifier"
import { FaBackwardStep, FaCaretRight, FaForwardStep, FaPause } from "react-icons/fa6"
import AudioPart from "./AudioPart"
import AudioRow from "./AudioRow"

type AudioProps = {
    src?: string
}

type AudioState = {
    volume?: number,
    currentTime?: number,
    duration?: number
}

export default function Audio({ src }: AudioProps) {

    const videoRef = useRef<HTMLVideoElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef(0);
    const [play, setPlay] = useState(false);
    const [audioState, setAudioState] = useState<AudioState>({
        volume: 1
    });

    useEffect(() => {

        let titleScroll = 1.01;

        const titleAnimation = () => {
            frameRef.current = requestAnimationFrame(titleAnimation);

            if (!titleRef.current) {
                cancelAnimationFrame(frameRef.current)

                return;
            }
            const title = titleRef.current;
            title!.scrollLeft += titleScroll;

            if (advancedNumber(title?.scrollLeft) >= advancedNumber(title?.scrollWidth) - advancedNumber(title?.offsetWidth) || advancedNumber(title?.scrollLeft) <= 0) {
                cancelAnimationFrame(frameRef.current);
                setTimeout(() => {
                    titleScroll *= -1;
                    if (titleScroll < 0) titleScroll = -.5;
                    else titleScroll = 1;
                    requestAnimationFrame(titleAnimation);
                }, 2000)
            }
        }

        requestAnimationFrame(titleAnimation)

        return () => {
            cancelAnimationFrame(frameRef.current);
        }
    }, [])

    useEffect(() => {
        if (play)
            videoRef.current?.play();
        else
            videoRef.current?.pause();
    }, [play]);

    useEffect(() => {
        if (audioState.volume)
            videoRef.current!.volume = audioState.volume;
    }, [audioState.volume])

    return (
        <div className={styles.audio}>
            <video ref={videoRef} src={src} hidden
                onPlay={() => {
                    setAudioState({
                        ...audioState,
                        duration: videoRef.current?.duration
                    })
                }}

                onTimeUpdate={() => {
                    setAudioState({
                        ...audioState,
                        currentTime: videoRef.current?.currentTime
                    })
                }}></video>

            <div className={styles.audio__thumbnail}>
                <div className={styles.audio__play_button} onClick={(() => {
                    setPlay(!play);
                })}>
                    {
                        !play && <FaCaretRight />
                    }
                    {
                        play && <FaPause />
                    }
                </div>
            </div>

            <AudioPart>
                <AudioRow>
                    <div className={styles.audio__name} ref={titleRef}>
                        Parallel Universe Shifter - かめりあ(Camellia)
                    </div>

                    <div className={styles.audio__timings}>
                        <span>{timePrettify(audioState.currentTime)}</span> / <span>{timePrettify(audioState.duration)}</span>
                    </div>
                </AudioRow>


                <AudioRow>
                    <Slider picker={false} bgColor='#595959' barColor='white' val={Number(audioState.currentTime) / Number(audioState.duration) * 100} onChange={(val) => {
                        videoRef.current!.currentTime = advancedNumber(val) / 100 * advancedNumber(audioState.duration);
                    }} />
                </AudioRow>

            </AudioPart>

            <AudioPart>
                <AudioRow>
                    <div className={styles.audio__backward_step}>
                        <FaBackwardStep />
                    </div>

                    <div className={styles.audio__backward_step}>
                        <FaForwardStep />
                    </div>
                </AudioRow>

                <AudioRow>
                    <Slider picker={false} bgColor='#595959' barColor='white' val={advancedNumber(audioState.volume) * 100} onChange={(val) => {
                        setAudioState((audioState) => ({
                            ...audioState,
                            volume: advancedNumber(val) / 100
                        }));
                    }} />
                </AudioRow>
            </AudioPart>

        </div>
    )
}
