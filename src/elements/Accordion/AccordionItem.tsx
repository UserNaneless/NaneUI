import styles from "./accordion.module.sass"
import { createContext, useState } from 'react';

type AccordionItemProps = {
    children?: React.ReactNode
}

type AccordionItemContext = {
    showItem: boolean,
    setShow: (() => void) | ((val: boolean) => void)
}

export const AccordionItemContext = createContext<AccordionItemContext>({
    showItem: false,
    setShow: () => {}
});

export default function AccordionItem({ children }: AccordionItemProps) {

    const [showItem, setShowItem] = useState(false);

    return (
        <div className={styles.accordion_item}>
            <AccordionItemContext.Provider value={{
                showItem, 
                setShow: (val: boolean) => setShowItem(val)
            }}>
                {children}
            </AccordionItemContext.Provider>
        </div>
    )
}
