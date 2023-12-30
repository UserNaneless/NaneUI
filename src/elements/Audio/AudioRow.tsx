import styles from "./audio.module.sass"

type AudioRowProps = {
    children: React.ReactNode,
}

export default function AudioRow({children} : AudioRowProps) {
  return (
    <div className={styles.audio_row}>
        {children}
    </div>
  )
}
