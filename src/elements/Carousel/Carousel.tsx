import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Children from "react-children-utilities";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import styles from "./carousel.module.sass"


type CarouselProps = {
    children?: React.ReactNode
}

const wrap = (val: number, max: number, c: number) => {
    if (val + c >= max)
        return 0;
    if (val + c < 0)
        return max - 1;

    return val + c;
}

const slide = {
    enter: (direction: number) => ({
        x: direction > 0 ? window.innerWidth / 2 : -window.innerWidth / 2
    }),

    center: {
        x: 0
    },

    exit: (direction: number) => ({
        x: direction > 0 ? -window.innerWidth / 2 : window.innerWidth / 2
    }),
}

const crossfade = {
    enter: () => ({
        opacity: 0
    }),

    center: {
        opacity: 1
    },

    exit: () => ({
        opacity: 0,
    }),
}

export default function Carousel({ children }: CarouselProps) {

    const [slides, setSlides] = useState(Children.toArray(children));
    const [currentSlide, setCurrentSlide] = useState({ direction: 1, currentSlide: 0 });

    useEffect(() => {
        setSlides(Children.toArray(children));
    }, [children])


    return (
        <div className={styles.carousel}>
            <AnimatePresence custom={currentSlide.direction}>
                <motion.div {...{
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                    },

                    key: Math.random(),
                    custom: currentSlide.direction,

                    variants: crossfade && slide,

                    initial: "enter",

                    animate: "center",

                    exit: "exit",

                    transition: {
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: {duration: .3}
                    },

                    drag: "x",

                    dragConstraints: {
                        left: 0,
                        right: 0
                    },

                    onDragEnd: (_, { velocity }) => {
                        if (velocity.x !== 0)
                            setCurrentSlide({
                                direction: -Math.sign(velocity.x),
                                currentSlide: wrap(currentSlide.currentSlide, slides.length, -Math.sign(velocity.x))
                            })
                    }
                }}>
                    {slides[currentSlide.currentSlide]}
                </motion.div>
            </AnimatePresence>


            <button className={`${styles.carousel_controls} ${styles.carousel_controls__prev}`} onClick={() => setCurrentSlide({
                direction: -1,
                currentSlide: wrap(currentSlide.currentSlide, slides.length, -1)
            })}>
                <FaChevronLeft />
            </button>

            <button className={`${styles.carousel_controls} ${styles.carousel_controls__next}`} onClick={() => setCurrentSlide({
                direction: 1,
                currentSlide: wrap(currentSlide.currentSlide, slides.length, 1)
            })}>

                <FaChevronRight />
            </button>

            <div className={styles.carousel_pages}>
                {
                    slides.map((_, i) => {
                        return <span key={i} className={`${styles.carousel_page} ${i === currentSlide.currentSlide ? styles.carousel_page__active : ""}`}></span>
                    })
                }
            </div>
        </div>
    )
}
