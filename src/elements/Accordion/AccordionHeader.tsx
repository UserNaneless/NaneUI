import { FaChevronDown } from "react-icons/fa6";

import styles from "./accordion.module.sass"
import { useContext } from 'react';
import { AccordionItemContext } from "./AccordionItem";

type AccordionHeaderProps = {
    children?: React.ReactNode
}

export default function AccordionHeader({ children }: AccordionHeaderProps) {

    const { showItem, setShow } = useContext(AccordionItemContext);

    return (
        <div className={`${styles.accordion_header} ${showItem ? styles.accordion_header__open : ""}`} onClick={() => {
            setShow(!showItem);
        }}>
            <span>{children}</span>
            <span className={styles.accordion_chevron}><FaChevronDown /></span>
        </div>
    )
}
