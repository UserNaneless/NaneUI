
import styles from "./tabs.module.sass"

type TabHeaderProps = {
    children?: React.ReactNode,
    active?: boolean,
    onClick?: () => void
}

export default function TabHeader({ children, active, onClick }: TabHeaderProps) {
    return (
        <div className={`${styles.tabs_header} ${active ? styles.tabs_header__active : ""}`} onClick={onClick}>
            {children}
        </div>
    )
}
