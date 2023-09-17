import { createContext, useContext, useEffect } from "react"
import { FormRulesContext, FormRule } from "./Form"

import styles from "./form.module.sass"

type FormItemProps = {
    children?: React.ReactNode,
    name?: string,
    rules?: FormRule[]
}

type FormItemContext = {
    name?: string
}

export const FormItemContext = createContext<FormItemContext>({});

export default function FormItem({ children, name, rules }: FormItemProps) {

    const formRulesContext = useContext(FormRulesContext);

    useEffect(() => {
        if (name)
            if (rules) {
                formRulesContext.setRules([...formRulesContext.rules, ...rules.map(item => ({
                    ...item,
                    name
                }))]);
            }
    }, []);

    return (
        <FormItemContext.Provider value={{
            name
        }}>
            <div className={styles.form_item}>
                {children}
            </div>
        </FormItemContext.Provider>
    )
}
