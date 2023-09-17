import styles from "./accordion.module.sass"

type AccordionProps = {
    children?: React.ReactNode
}

export default function Accordion({ children }: AccordionProps) {
    return (
        <div className={styles.accordion}>
            {children}
        </div>
    )
}
