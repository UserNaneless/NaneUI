import styles from "./input.module.sass"

type InputWrapperProps = {
    children?: React.ReactNode
}

export default function InputWrapper({ children }: InputWrapperProps) {
    return (
        <div className={styles.input_wrapper} tabIndex={0}>
            {children}
        </div>
    )
}
