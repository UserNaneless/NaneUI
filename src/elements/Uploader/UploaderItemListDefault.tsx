import { FaXmark } from "react-icons/fa6"
import styles from "./uploader.module.sass"


type UploaderProps = {
    file: File,
    remove: () => void
}

export default function UploaderItemListDefault({file, remove} : UploaderProps) {
  return (
    <div className={styles.uploader_item__default}>
        <span className={styles.uploader_item__default__name}>{file.name}</span>
        <span className={styles.uploader_item__default__close} onClick={() => remove()}><FaXmark /></span>
    </div>
  )
}
