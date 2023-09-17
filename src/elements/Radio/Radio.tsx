import { useState, useContext, useEffect } from "react"
import styles from "./radio.module.sass"
import { RadioGroupContext } from "./RadioGroup";
import Children from 'react-children-utilities';

type RadioProps = {
    children?: React.ReactNode
}

export default function Radio({ children }: RadioProps) {

    const [active, setActive] = useState(false);
    const radioGroupContext = useContext(RadioGroupContext);

    useEffect(() => {
        setActive(radioGroupContext.value === Children.onlyText(children));
    }, [radioGroupContext.value])

    useEffect(() => {
        if (active)
            radioGroupContext.setValue(Children.onlyText(children));
    }, [active])

    return (
        <div className={styles.radio}>
            <div className={`${styles.radio_button} ${active ? styles.radio_button__active : ""}`} onClick={() => setActive(!active)}></div>
            <span>{children}</span>
        </div>
    )
}
