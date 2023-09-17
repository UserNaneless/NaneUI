import styles from "./modal.module.sass"

type ModalRowProps = {
    children?: React.ReactNode,
    title?: boolean,
    controls?: boolean,
    content?: boolean
}

export default function ModalRow({children, title, controls, content, } : ModalRowProps) {
  return (
    <div className={`${styles.modal_row} ${title ? styles.modal_title : ""} ${controls ? styles.modal_controls : ""} ${content ? styles.modal_content : ""}`}>
        {children}
    </div>
  )
}
