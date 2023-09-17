import styles from "./tabs.module.sass"

type TabContentProps = {
    children?: React.ReactNode
}

export default function TabContent({ children }: TabContentProps) {
    return (
        <div className={styles.tabs_content}>
            {children}
        </div>
    )
}
