import styles from "./offcanvas.module.sass"

type OffcanvasContentProps = {
    children?: React.ReactNode
}

export default function OffcanvasContent({ children }: OffcanvasContentProps) {
    return (
        <div className={styles.offcanvas_content}>
            {children}
        </div>
    )
}
