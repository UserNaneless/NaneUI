import styles from "./input.module.sass"
import { FaMagnifyingGlass } from "react-icons/fa6"

export type InputButtonProps = {
    icon?: React.ReactNode,
    position?: "left" | "right"
}

export default function InputButton({ icon = <FaMagnifyingGlass />, position = "right" }: InputButtonProps) {
    return (
        <div className={`${styles.input_button} ${position === "right" ? "input_button--right" : "input_button--left"}`}>
            {icon}
        </div>
    )
}
