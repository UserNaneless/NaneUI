import { FaXmark } from "react-icons/fa6"
import styles from "./offcanvas.module.sass"
import { useContext } from 'react';
import { OffcanvasContext } from './Offcanvas';

type OffcanvasHeaderProps = {
    children?: React.ReactNode
}

export default function OffcanvasHeader({ children }: OffcanvasHeaderProps) {

    const {close} = useContext(OffcanvasContext);

    return (
        <div className={styles.offcanvas_header}>
            {children}
            <span className={styles.offcanvas_header__close} onClick={close}><FaXmark /></span>
        </div>
    )
}
