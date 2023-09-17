import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import UploaderItemListDefault from './UploaderItemListDefault';
import UploaderDropzoneDefault from './UploaderDropzoneDefault';
import useFormRegister from '../Form/hooks/useFormRegister';

import styles from "./uploader.module.sass"


type UploaderProps = {
    children?: React.ReactNode
    fileItem?: (file: File, key: number, remove: () => void) => React.ReactNode
    drag?: boolean
}

export default function Uploader({ children, fileItem, drag }: UploaderProps) {

    const [files, setFiles] = useState<Array<File>>([]);
    const fileRef = useRef<HTMLInputElement>(null);
    const formRegister = useFormRegister();

    const dropFiles = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (drag)
            setFiles([...files, ...Array.from(e.dataTransfer?.files ? e.dataTransfer?.files : [])]);
    }

    useEffect(() => {
        if(formRegister.setValue)
            formRegister.setValue(files);
    }, [files])

    return (
        <div className={styles.uploader}>
            <input ref={fileRef} type="file" multiple hidden onChange={(e) => setFiles([...files, ...Array.from(e.target.files !== null ? e.target.files : [])])} />

            <div className={`${styles.uploader_input_wrapper} ${!drag ? styles.uploader_input_wrapper__fit : ""}`} onClick={() => {
                fileRef.current?.click();
            }}
                onDragOver={(e) =>{ e.preventDefault();}}
                onDrop={dropFiles}
            >
                {
                    !children && drag &&
                    <UploaderDropzoneDefault />
                }
                {children}
            </div>

            <div className={styles.uploader_filelist}>
                <AnimatePresence>
                    {
                        files.map((item, i) => {
                            if (fileItem) return fileItem(item, i, () => setFiles([...files.filter(inner => inner != item)]))
                            return <UploaderItemListDefault file={item} key={i} remove={() => setFiles([...files.filter(inner => inner != item)])} />
                        })
                    }
                </AnimatePresence>
            </div>

        </div>
    )
}
