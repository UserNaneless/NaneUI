import styles from "./card.module.sass"

type CardHeaderProps = {
    children?: React.ReactNode
}

export default function CardHeader({children} : CardHeaderProps) {
    return (
        <div className={styles.card_header}>
            {children}
        </div>
    )
}
