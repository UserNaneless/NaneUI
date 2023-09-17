import { useContext } from "react";
import { FormItemContext } from "./FormItem";
import { useFormContext, FieldErrors, FieldValues } from 'react-hook-form';
import styles from "./form.module.sass"

const readErrorMessage = (errors: FieldErrors<FieldValues>, name?: string) => {
    if (name && errors[name])
        return String(errors[name])
    return ""
}

export default function FormError() {

    const formContext = useFormContext();
    const formItemContext = useContext(FormItemContext);

    return (
        <div className={styles.form_error}>
            {readErrorMessage(formContext.formState.errors, formItemContext.name)}
        </div>
    )
}
