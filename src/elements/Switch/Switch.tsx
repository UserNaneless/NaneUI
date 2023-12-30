import { useEffect, useState } from "react"
import styles from "./switch.module.sass"
import useFormRegister from "../Form/hooks/useFormRegister";

type SwitchProps = {
    values: [any, any],
    valuesPlaceholder?: [React.ReactNode | undefined, React.ReactNode | undefined],
    defaultIndex?: 1 | 2
}

export default function Switch({ values, valuesPlaceholder, defaultIndex }: SwitchProps) {

    const [value, setValue] = useState(defaultIndex || 0);
    const formRegister = useFormRegister();

    useEffect(() => {
        formRegister?.setValue(values[value]);
    }, [value])


    return (
        <div className={`${styles.switch_wrapper}`} onClick={() => {
            setValue((value) => {
                if (value + 1 > 1)
                    return 0
                return value + 1;
            })
        }}>
            <div className={`${styles.switch_head} ${value ? styles.switch_head__right : ""}`}></div>
            <div className={styles.switch_item}>{valuesPlaceholder?.[0]}</div>
            <div className={styles.switch_item}>{valuesPlaceholder?.[1]}</div>
        </div>
    )
}
