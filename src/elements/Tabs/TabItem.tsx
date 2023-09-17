
import styles from "./tabs.module.sass"

type TabItemProps = {
    children?: React.ReactNode
}

export default function TabItem({ children }: TabItemProps) {
    return (
        <div className={styles.tabs_item}>
            {children}
        </div>
    )
}