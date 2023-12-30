import styles from "./modal.module.sass"

//8909

type ModalProps = {
    children?: React.ReactNode,
    showcase?: boolean,
    width?: number
}

export default function Modal({ children, showcase, width = 520 }: ModalProps) {
    return (
        <div className={styles.modal} style={{
            position: showcase ? "relative" : "fixed",
            transform: "none",
            left: "0",
            marginInline: "auto",
            width: window.innerWidth > 520 ? width : 280
        }}>
            {children}
        </div>
    )
}
