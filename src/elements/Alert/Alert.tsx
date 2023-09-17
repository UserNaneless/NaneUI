import { FaCircleCheck, FaCircleInfo, FaCircleXmark, FaXmark } from "react-icons/fa6"
import styles from "./alert.module.sass"
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

type AlertProps = {
    type?: "info" | "error" | "success",
    showcase?: boolean
}

export default function Alert({ type = "info", showcase }: AlertProps) {

    const [render, setRender] = useState(true);

    return (
        <AnimatePresence>
            {render &&
                <motion.div {...{
                    initial: {
                        opacity: 0
                    },

                    animate: {
                        opacity: 1
                    },

                    exit: {
                        opacity: 0
                    }
                }}>
                    <div className={styles.alert} style={{
                        position: showcase ? "relative" : "fixed"
                    }}>
                        <span className={styles.alert__icon}>
                            {
                                type === "info" && <span className={styles.alert__icon__info}>
                                    <FaCircleInfo />
                                </span>
                            }
                            {
                                type === "error" && <span className={styles.alert__icon__error}>
                                    <FaCircleXmark />
                                </span>
                            }
                            {
                                type === "success" && <span className={styles.alert__icon__success}>
                                    <FaCircleCheck />
                                </span>
                            }
                        </span>
                        <span className={styles.alert__text}>Alert</span>
                        <span className={styles.alert__close} onClick={() => setRender(false)}>
                            <FaXmark />
                        </span>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
