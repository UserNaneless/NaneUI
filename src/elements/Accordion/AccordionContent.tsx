import { AnimatePresence, motion } from "framer-motion";
import { AccordionItemContext } from "./AccordionItem";
import styles from "./accordion.module.sass"
import { useContext } from 'react';


type AccordionContentProps = {
    children?: React.ReactNode
}

export default function AccordionContent({ children }: AccordionContentProps) {

    const { showItem } = useContext(AccordionItemContext);

    return (

        <AnimatePresence>
            {
                showItem &&
                <motion.div {...{
                    initial: {
                        height: 0,
                        overflow: "hidden"
                    },

                    animate: {
                        height: "auto"
                    },

                    exit: {
                        height: 0
                    }
                }}>
                    <div className={styles.accordion_content}>
                        {children}
                    </div>
                </motion.div>
            }

        </AnimatePresence>
    )
}
