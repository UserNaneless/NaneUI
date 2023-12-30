import styles from "./input.module.sass"

type InputIconProps = {
    icon?: React.ReactNode
}

export default function InputIcon({icon}: InputIconProps) {
  return (
    <div className={styles.input_icon}>
        {icon}
    </div>
  )
}
