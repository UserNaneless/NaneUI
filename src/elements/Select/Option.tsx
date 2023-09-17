import { useContext } from "react"
import styles from "./select.module.sass"
import { SelectContext } from "./Select"

type OptionProps = {
    children?: React.ReactNode,
}

export default function Option({ children }: OptionProps) {

    const { updateValue } = useContext(SelectContext);

    return (
        <div className={styles.option} onClick={() => {
            updateValue(children?.toString());
        }}>
            {children}
        </div>
    )
}
