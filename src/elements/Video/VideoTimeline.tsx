import { useContext } from 'react'
import { VideoContext } from './Video';
import Slider from '../Slider/Slider';
import { advancedNumber } from '../../helpers/functions/Advanced';

export default function VideoTimeline() {

    const videoContext = useContext(VideoContext);

    return (
        <Slider picker={false} bgColor='#595959' barColor='white' val={Number(videoContext.videoState.currentTime) / Number(videoContext.videoState.duration) * 100} onChange={(val) => {
            if (videoContext.videoRef) {
                videoContext.videoRef.current!.currentTime = advancedNumber(val) / 100 * advancedNumber(videoContext.videoState.duration)
            }
        }} />
    )
}
