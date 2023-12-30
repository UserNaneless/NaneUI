import { EventListeners } from "../../helpers/types/Types";
import useFormRegister from "../Form/hooks/useFormRegister"
import styles from "./input.module.sass"


type InputProps = {
    type?: "text"
} & React.HTMLProps<HTMLInputElement> & EventListeners

export default function Input({ ...props }: InputProps) {

    const formRegister = useFormRegister();

    return (
        <input {...props} {...formRegister.registerChecked()} className={styles.input} />
    )
}
