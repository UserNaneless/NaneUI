import { useEffect, useReducer, useRef, useState } from "react";
import styles from "./slider.module.sass"
import useFormRegister from "../Form/hooks/useFormRegister";
import { advancedNumber } from './../../helpers/functions/Advanced';
import { clamp } from "framer-motion";


type SliderProps = {
    width?: number,
    picker?: boolean,
    pickerSize?: number,
    step?: number,
    val?: number,
    valRange?: [min: number, max: number]
    showValue?: boolean,
    barColor?: string,
    bgColor?: string,
    onChange?: (e: number) => void
}

type Action = {
    type: "callOnChange" | "update",
    onChange?: (val: number) => void,
    value: number
}

const reducer = (_: number, action: Action) => {
    switch (action.type) {
        case "callOnChange":
            if (action.onChange)
                action.onChange(action.value)
            return action.value
        case "update":
            return action.value
    }
}

export default function Slider({ width = 4, picker = true, pickerSize = 8, step, val, valRange, showValue = false, barColor, bgColor, onChange }: SliderProps) {

    const [value, setValue] = useReducer(reducer, 0);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const formRegister = useFormRegister();

    useEffect(() => {
        ref.current?.style.setProperty("--slider-width", width + "px");
        ref.current?.style.setProperty("--show-picker", picker ? "block" : "none");
        ref.current?.style.setProperty("--slider-picker", pickerSize + "px")
        ref.current?.style.setProperty("--current-percent", value + "%")
        if (barColor)
            ref.current?.style.setProperty("--bar-color", barColor)
        if (bgColor)
            ref.current?.style.setProperty("--bg-color", bgColor)
    }, [])

    useEffect(() => {
        formRegister.setValue(value);
        ref.current?.style.setProperty("--current-percent", value + "%")
    }, [value])

    useEffect(() => {
        if (!mouseDown)
            setValue({
                value: advancedNumber(val),
                type: "update"
            });
    }, [val])

    return (
        <div className={styles.slider}>
            <div className={styles.slider_main_bar} ref={ref}
                onMouseDown={() => {
                    setMouseDown(true);
                    window.onmousemove = (e) => {
                        const sliderRect = ref.current?.getBoundingClientRect();
                        if (sliderRect) {
                            const percent = clamp(0, 100, (e.clientX - sliderRect.left) / sliderRect.width * 100);
                            setValue({
                                value: percent,
                                onChange,
                                type: "callOnChange"
                            });

                            if (onChange) {
                                onChange(percent);
                            }
                        }

                        // if (step)
                        //     if (valRange) {
                        //         const ranged = Math.round(value / 100 * (valRange[1] - valRange[0]) + valRange[0]);
                        //         if (ranged % step !== 0) {
                        //             //(ranged - ranged % step)
                        //             percent = Math.round(((ranged - ranged % step) - valRange[0]) / (valRange[1] - valRange[0]) * 100);
                        //         }

                        //     }

                    }

                    window.onmouseup = () => {
                        setMouseDown(false);
                        window.onmousemove = () => { };
                        window.onmouseup = () => { };
                    }
                }}>
                {
                    picker &&
                    <div className={styles.slider_slider_picker}></div>
                }
                {
                    showValue &&
                    <div className={styles.slider_value_tooltip}>
                        {valRange ?
                            Math.round(value / 100 * (valRange[1] - valRange[0]) + valRange[0]) :
                            Math.round(value)
                        }
                    </div>
                }
            </div>
        </div>
    )
}
