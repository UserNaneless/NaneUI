import React, { useEffect, useRef, useState } from "react"
import styles from "./select.module.sass"
import { FaChevronDown } from "react-icons/fa6"
import { AnimatePresence, motion } from "framer-motion";
import Children from "react-children-utilities"
import useFormRegister from "../Form/hooks/useFormRegister";

type SelectContextType = {
    updateValue: (str?: string) => void
}

export const SelectContext = React.createContext<SelectContextType>({
    updateValue: () => { }
})

type SelectProps = {
    children: Array<React.ReactNode> | React.ReactNode
}

export default function Select({ children }: SelectProps) {

    const [value, setValue] = useState(Children.onlyText(Children.toArray(children)[0]) );
    const [show, setShow] = useState(false);
    const [focus, setFocus] = useState(false);
    const formRegister = useFormRegister();
    const ref = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        formRegister.setValue(value);
        setFocus(false);
    }, [value])


    useEffect(() => {
        if (focus)
            ref.current?.focus();
        else
            ref.current?.blur();
    }, [focus])


    return (
        <div ref={ref} className={styles.select_wrapper} tabIndex={-1}
            onClick={() => {
                setFocus(true);
            }}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
        >
            <input type="text" defaultValue={value} hidden {...formRegister.registerChecked()} />
            <div className={styles.select}>
                <span>{value}</span>
                <FaChevronDown />
            </div>
            <AnimatePresence>
                <div className={styles.options_wrapper}>
                    {show &&
                        <motion.div {...{
                            initial: {
                                opacity: 0,
                                height: 0
                            },

                            animate: {
                                opacity: 1,
                                height: "auto"
                            },

                            exit: {
                                opacity: 0,
                                height: 0
                            }
                        }}>
                            <div className={styles.select_options}>
                                <SelectContext.Provider value={{
                                    updateValue: (str) => {
                                        if (str)
                                            setValue(str);
                                    }
                                }}>
                                    {children}
                                </SelectContext.Provider>
                            </div>
                        </motion.div>
                    }
                </div>
            </AnimatePresence>
        </div>
    )
}
