import styles from "./datepicker.module.sass"


type DatePickerItemProps = {
    children?: React.ReactNode,
    active?: boolean,
    current?: boolean,
    disabled?: boolean,
    type?: "m",
    onClick?: () => void
}

export default function DatePickerItem({children, active, current, disabled, type, onClick} : DatePickerItemProps) {
  return (
    <div className={`${styles.date_picker_content_item} ${active ? styles.date_picker_content_item__active : ""} ${disabled ? styles.date_picker_content_item__disabled : ""} ${current ? styles.date_picker_content_item__current : ""} ${type === "m" ? styles.date_picker_content_item__month : ""}`}
        onClick={() => active && onClick && onClick()}
    >
        {children}
    </div>
  )
}
