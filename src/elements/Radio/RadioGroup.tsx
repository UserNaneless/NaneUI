import { createContext, useEffect, useState } from "react"
import styles from "./radio.module.sass"
import useFormRegister from "../Form/hooks/useFormRegister"

type RadioGroupProps = {
    children?: React.ReactNode
}

type RadioContext = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>> | (() => void)
}

export const RadioGroupContext = createContext<RadioContext>({
    value: "",
    setValue: () => { }
});

export default function RadioGroup({ children }: RadioGroupProps) {

    const [value, setValue] = useState("");
    const formRegister = useFormRegister();

    useEffect(() => {
        formRegister.setValue(value);
    }, [value])

    return (
        <div className={styles.radio_group}>
            <RadioGroupContext.Provider value={{
                value,
                setValue
            }}>
                {formRegister &&
                    <input type="text" hidden defaultValue={value} {...formRegister.registerChecked()} />
                }
                {children}
            </RadioGroupContext.Provider>
        </div>
    )
}
