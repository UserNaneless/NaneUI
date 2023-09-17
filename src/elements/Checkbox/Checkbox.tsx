import { useState } from "react"
import { FaCheck } from "react-icons/fa6"
import styles from "./checkbox.module.sass"

type CheckboxProps = {
    children?: React.ReactNode,
}

export default function Checkbox({ children }: CheckboxProps) {

    const [active, setActive] = useState(false);

    return (
        <div className={styles.checkbox_wrapper}>
            <div className={`${styles.checkbox} ${active ? styles.checkbox_active : ""}`} onClick={() => setActive(!active)}>
                <span className={styles.checkbox_checkmark}><FaCheck /></span>
            </div>
            {children}
        </div>
    )
}
