import styles from "./audio.module.sass"

type AudioPartProps = {
    children: React.ReactNode,
}

export default function AudioPart({ children }: AudioPartProps) {
    return (
        <div className={`${styles.audio_part}`}>
            {children}
        </div>
    )
}
