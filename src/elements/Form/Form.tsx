import { useCallback, createContext, useState } from "react"
import { useForm, FormProvider, SubmitHandler, FieldValues } from 'react-hook-form';

import styles from "./form.module.sass"


type FormProps = {
    children?: React.ReactNode,
    onDataSubmit?: SubmitHandler<FieldValues>
} & React.HTMLProps<HTMLFormElement>

export type FormRule = {
    required?: boolean,
    test?: (data: string | number | File | FileList ) => boolean
    message: string
}

type FormRulesName = {name: string} & FormRule;

type FormRulesContextType = {
    rules: Array<FormRulesName>,
    setRules: React.Dispatch<React.SetStateAction<Array<FormRulesName>>> | (() => void)
}

export const FormRulesContext = createContext<FormRulesContextType>({
    rules: [],
    setRules: () => {}
});

const processRules = (rules: Array<FormRulesName>, data: FieldValues) => {
    const errors: {
        [key: string]: string
    } = {};

    for(const rule of rules) {
        if((rule.test && !rule.test(data[rule.name])) || !(rule.required && data[rule.name])) {
            errors[rule.name] = rule.message;
        }
    }

    return errors;
}


export default function Form({ children, onDataSubmit, ...props }: FormProps) {

    const [rules, setRules] = useState<Array<FormRulesName>>([]);

    const resolver = useCallback((data: FieldValues) => {
        return {
            values: data,
            errors: processRules(rules, data)
        }
    }, [rules])


    const form = useForm({
        resolver
    });

    return (


        <FormProvider {...form}>
            <FormRulesContext.Provider value={{
                rules,
                setRules
            }}>
                <form className={styles.form} onSubmit={(e) => {
                    e.preventDefault();
                    if (onDataSubmit)
                        form.handleSubmit(onDataSubmit)(e);
                }} {...props}>
                    {children}
                </form>
            </FormRulesContext.Provider>
        </FormProvider>

    )
}
