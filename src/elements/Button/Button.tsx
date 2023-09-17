import styles from "./button.module.sass"

type ButtonProps = {
    children?: React.ReactNode,
    disabled?: boolean,
    contrast?: boolean,
    onClick?: () => void
}

export default function Button({children, disabled, contrast, onClick} : ButtonProps) {
    return (
        <button className={`${styles.button} ${contrast ? styles.button__contrast : ""}`} {...{
            disabled, onClick
        }}>
            {children}
        </button>
    )
}
