import styles from "./carousel.module.sass"

type CarouselItemProps = {
    children?: React.ReactNode,
    color: string
}

export default function CarouselItem({ children, color }: CarouselItemProps) {
    return (
        <div className={styles.carousel_item} style={{
            backgroundColor: color
        }}>
                {children}
        </div>
    )
}
