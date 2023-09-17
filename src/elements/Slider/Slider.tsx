import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.sass"


type SliderProps = {
    width?: number,
    picker?: boolean,
    pickerSize?: number,
    step?: number
}

export default function Slider({width = 4, picker = true, pickerSize = 8} : SliderProps) {

    const [value, setValue] = useState(0);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.style.setProperty("--slider-width", width + "px");
        ref.current?.style.setProperty("--show-picker", picker ? "block" : "none");
        ref.current?.style.setProperty("--slider-picker", pickerSize + "px")
        ref.current?.style.setProperty("--current-percent", 50 + "%")
    }, [])

    return (
        <div className={styles.slider}>
            <div className={styles.slider_main_bar} ref={ref}
                onMouseDown={() => {
                    setMouseDown(true)

                }}

                onMouseMove={(e) => {
                    if (mouseDown) {
                        const slider = e.currentTarget as HTMLDivElement;

                        const percent = Math.max(0, Math.min((e.clientX - slider.getBoundingClientRect().left) / slider.offsetWidth * 100, 100));

                        setValue(percent);

                        slider.style.setProperty("--current-percent", value + "%")
                    }
                }}

                onMouseUp={() => {
                    setMouseDown(false);
                }}>
                    <div className={styles.slider_slider_picker}></div>
                </div>
        </div>
    )
}
