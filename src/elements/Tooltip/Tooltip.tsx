import { useEffect, useRef, useState } from "react"
import styles from "./tooltip.module.sass"
import { AnimatePresence, motion } from "framer-motion"

type TooltipProps = {
    children?: React.ReactNode,
    tooltipText?: string,
    tooltipPos?: "top" | "right" | "bottom" | "left"
}

const posToClass = (pos: string | undefined) => {
    if (!pos) return styles.tooltip_top

    switch (pos) {
        case "top":
            return styles.tooltip_top
        case "right":
            return styles.tooltip_right
        case "bottom":
            return styles.tooltip_bottom
        case "left":
            return styles.tooltip_left
    }
}

export default function Tooltip({ children, tooltipText, tooltipPos }: TooltipProps) {

    const tooltipRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            tooltipRef.current!.style.top = childrenRef.current!.offsetTop - Number(tooltipRef.current?.offsetHeight) - 8 + "px";
            tooltipRef.current!.style.left = childrenRef.current!.offsetLeft + (childrenRef.current!.offsetWidth - Number(tooltipRef.current?.offsetWidth)) / 2 + "px";
        }
    }, [active])

    return (
        <>
            <AnimatePresence>
                {active &&
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
                    }} ref={tooltipRef} className={`${styles.tooltip} ${posToClass(tooltipPos)}`}>
                        {tooltipText}
                    </motion.div>
                }

            </AnimatePresence>


            <div ref={childrenRef} className={styles.tooltip_children}
                onMouseOver={() => {
                    timeoutRef.current = setTimeout(() => {
                        setActive(true);
                    }, 1000)
                }}
                onMouseLeave={() => {
                    setActive(false);
                    clearTimeout(Number(timeoutRef.current));
                }}>
                {children}
            </div>
        </>

    )
}
