import { createContext, useEffect, useState } from "react"
import styles from "./offcanvas.module.sass"
import { AnimatePresence, motion } from "framer-motion"

type OffcanvasProps = {
    children?: React.ReactNode,
    show?: boolean
}

type OffcanvasContext = {
    close: () => void
}

export const OffcanvasContext = createContext<OffcanvasContext>({
    close: () => { }
})

export default function Offcanvas({ children, show }: OffcanvasProps) {

    const [render, setRender] = useState(show);

    useEffect(() => {
        setRender(show);
    }, [show])

    return (
        <AnimatePresence>
            {render &&
                <motion.div {...{
                    initial: {
                        position: "fixed",
                        opacity: 0,
                    },

                    animate: {
                        opacity: 1,
                    },

                    exit: {
                        opacity: 0,
                    }
                }}>
                    <div className={styles.offcanvas_background}>
                        <motion.div {...{
                            initial: {
                                transform: "translateX(-500px)"
                            },

                            animate: {
                                transform: "translateX(0)"
                            },

                            exit: {
                                transform: "translateX(-500px)"
                            }
                        }}>
                            <div className={styles.offcanvas}>
                                <OffcanvasContext.Provider value={{
                                    close: () => setRender(false)
                                }}>
                                    {children}
                                </OffcanvasContext.Provider>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
