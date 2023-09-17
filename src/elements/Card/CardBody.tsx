import styles from "./card.module.sass"

type CardBodyProps = {
    children?: React.ReactNode
}

export default function CardBody({ children }: CardBodyProps) {
    return (
        <div className={styles.card_body}>
            {children}
        </div>
    )
}
