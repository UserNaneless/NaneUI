import { useContext } from "react"
import { FormItemContext } from "../../Form/FormItem";
import { useFormContext } from 'react-hook-form';

export default function useFormRegister() {
    const formItemContext = useContext(FormItemContext);
    const formContext = useFormContext();

    const registerChecked = () => {
        if (formItemContext.name && formContext.register)
            return formContext.register(formItemContext.name);
        else
            return {}
    }

    const setValue = (val: string | number | File | FileList | File[]) => {
        formContext?.setValue(String(formItemContext.name), val)
    }

    return {registerChecked, setValue };
}
