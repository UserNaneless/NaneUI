import { useEffect, useRef, useState } from "react"
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight, FaRegCalendar } from "react-icons/fa6"
import InputIcon from "../Input/InputIcon"
import InputWrapper from "../Input/InputWrapper"
import Input from "../Input/input"
import moment, { Moment } from "moment"
import styles from "./datepicker.module.sass"
import DatePickerItem from "./DatePickerItem"
import useFormRegister from "../Form/hooks/useFormRegister"
import useClickOutside from './../../helpers/hooks/useClickOutside';

const fillDays = (currentDate: Moment) => {
    const lstMonday = moment(currentDate).subtract(1, "month").endOf("month").startOf("week");
    const res = [];
    for (let i = 0; i < 42; i++)
        res.push(moment(lstMonday.add(1, "d")));
    return res;
}

const weekdayNames = () => {
    const startOfWeek = moment().startOf("week");
    const res = [];
    for (let i = 0; i < 7; i++) {
        res.push(moment(startOfWeek.add(1, "d")))
    }
    return res;
}

const monthsNames = (currentDate: Moment) => {
    const startOfYear = moment(currentDate).startOf("year").subtract(1, "M");
    const res = [];
    for (let i = 0; i < 12; i++) {
        res.push(moment(startOfYear.add(1, "M")))
    }
    return res;
}

const years = (currentDate: Moment) => {
    const startYear = moment(String(Math.floor((moment(currentDate).year()) / 12) * 12)).subtract(1, "y");
    const res = [];
    for (let i = 0; i < 12; i++) {
        res.push(moment(startYear.add(1, "y")))
    }
    return res;
}

const formatVisualFromType = (type: "Days" | "Months" | "Years" | undefined) => {
    switch (type) {
        case "Days" || undefined:
            return "MMMM yyyy";
        case "Months":
            return "MMMM yyyy";
        case "Years":
            return "YYYY";
    }
}

const bigNext = (type: "Days" | "Months" | "Years" | undefined) => {
    switch (type) {
        case "Days" || undefined:
            return "M";
        case "Months":
            return "M";
        case "Years":
            return "y";
    }
    return "M"
}

const smallNext = (type: "Days" | "Months" | "Years" | undefined) => {
    switch (type) {
        case "Days" || undefined:
            return "d";
        case "Months":
            return "M";
        case "Years":
            return "y";
    }
    return "d"
}


type DatePickerProps = {
    type?: "Days" | "Months" | "Years",
    format?: string
}

export default function DatePicker({ type, format }: DatePickerProps) {

    const [showPicker, setShowPicker] = useState(false);
    const [value, setValue] = useState(moment());

    const formRegiser = useFormRegister();

    const wrapper = useRef<HTMLDivElement>(null);

    useClickOutside(wrapper, () => {
        setShowPicker(_ => false);
    })

    useEffect(() => {
        formRegiser?.setValue(value);
    }, [value])

    return (
        <div className={styles.date_picker_wrapper} ref={wrapper}>
            <InputWrapper>
                <Input placeholder="Выберите дату" onClick={() => {
                    setShowPicker(true);
                }} value={value.format(String(format || (type === "Days" && "YYYY-MM-DD") || (type === "Years" && "YYYY")|| (type === "Months" && "YYYY-MM") ))}/>
                <InputIcon icon={<FaRegCalendar />} />
            </InputWrapper>

            <div className={styles.date_picker} style={{
                visibility: showPicker ? "visible" : "hidden"
            }}>
                <div className={styles.date_picker_controls}>
                    <div className={styles.date_picker_controls__button} onClick={() => {
                        setValue(moment(value).subtract(1, bigNext(type)));
                    }}>
                        <FaAnglesLeft />
                    </div>

                    <div className={styles.date_picker_controls__button} onClick={() => {
                        setValue(moment(value).subtract(1, smallNext(type)));
                    }}>
                        <FaAngleLeft />
                    </div>

                    <div className={styles.date_picker_controls__current_date}>
                        {value.format(formatVisualFromType(type))}
                    </div>

                    <div className={styles.date_picker_controls__button} onClick={() => {
                        setValue(moment(value).add(1, smallNext(type)));
                    }}>
                        <FaAngleRight />
                    </div>

                    <div className={styles.date_picker_controls__button} onClick={() => {
                        setValue(moment(value).add(1, bigNext(type)));
                    }}>
                        <FaAnglesRight />
                    </div>
                </div>

                <div className={styles.date_picker_content}>
                    {
                        (!type || type === "Days") &&
                        <>
                            {
                                weekdayNames().map((item, i) =>
                                    <div className={`${styles.date_picker_content_item}`} key={i}>
                                        {item.format("dd")}
                                    </div>
                                )
                            }
                            {
                                fillDays(value).map((item, i) => {
                                    return <DatePickerItem {...{
                                        current: item.format("MMMM") === value.format("MMMM") && item.format("D") === value.format("D"),
                                        active: item.format("MMMM") === value.format("MMMM"),
                                        disabled: item.format("MMMM") !== value.format("MMMM"),
                                        key: i,
                                        onClick: () => {
                                            setValue(moment(item))
                                        }
                                    }}>
                                        {item.format("D")}
                                    </DatePickerItem>
                                })
                            }
                        </>
                    }

                    {
                        (type === "Months") &&
                        <>
                            {
                                monthsNames(value).map((item, i) =>
                                    <DatePickerItem {...{
                                        current: item.format("MMMM") === value.format("MMMM"),
                                        active: true,
                                        disabled: false,
                                        type: "m",
                                        key: i,
                                        onClick: () => {
                                            setValue(moment(item))
                                        }
                                    }}>
                                        {item.format("MMM")}
                                    </DatePickerItem>
                                )
                            }
                        </>
                    }

                    {
                        (type === "Years") &&
                        <>
                            {
                                years(value).map((item, i) =>
                                    <DatePickerItem {...{
                                        current: item.format("YYYY") === value.format("YYYY"),
                                        active: true,
                                        disabled: false,
                                        type: "m",
                                        key: i,
                                        onClick: () => {
                                            setValue(moment(item))
                                        }
                                    }}>
                                        {item.format("YYYY")}
                                    </DatePickerItem>
                                )
                            }
                        </>
                    }

                </div>
            </div>

        </div>
    )
}
