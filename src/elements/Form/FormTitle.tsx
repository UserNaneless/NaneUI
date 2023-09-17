import styles from "./form.module.sass"

type FormTitleProps = {
    children?: React.ReactNode
}

export default function FormTitle({children} : FormTitleProps) {
    return (
        <div className={styles.form_title}>
            {children}
        </div>
    )
}
