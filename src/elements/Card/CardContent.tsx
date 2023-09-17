import styles from "./card.module.sass"

type CardContentProps = {
    children?: React.ReactNode
}

export default function CardContent({children} : CardContentProps) {
    return (
        <div className={styles.card_content}>
            {children}
        </div>
    )
}
