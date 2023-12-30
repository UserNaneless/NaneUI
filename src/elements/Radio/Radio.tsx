import { useState, useContext, useEffect } from "react"
import styles from "./radio.module.sass"
import { RadioGroupContext } from "./RadioGroup";
import Children from 'react-children-utilities';
import { EventListeners } from "../../helpers/types/Types";

type RadioProps = {
    children?: React.ReactNode
} & EventListeners

export default function Radio({ children, onChange, onClick }: RadioProps) {

    const [active, setActive] = useState(false);
    const radioGroupContext = useContext(RadioGroupContext);

    useEffect(() => {
        setActive(radioGroupContext.value === Children.onlyText(children));
    }, [radioGroupContext.value])

    useEffect(() => {
        if (onChange)
            onChange(active);
        if (active)
            radioGroupContext.setValue(Children.onlyText(children));
    }, [active])

    return (
        <div className={styles.radio}>
            <div className={`${styles.radio_button} ${active ? styles.radio_button__active : ""}`} onClick={(e) => {
                setActive(!active)
                if (onClick)
                    onClick(e);
            }
            }></div>
            <span>{children}</span>
        </div>
    )
}
