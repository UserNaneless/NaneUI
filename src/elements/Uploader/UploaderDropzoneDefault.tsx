import styles from "./uploader.module.sass"

export default function UploaderDropzoneDefault() {
    return (
        <div className={styles.uploader_dropzone__default}>
            <h3 className={styles.uploader_dropzone__default__title}>Drop files here or</h3>
            <span className={styles.uploader_dropzone__default__hint}>Click to add files</span>
        </div>
    )
}
