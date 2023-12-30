export type EventListeners = {
    onChange?: (e: ValueType) => void,
    onClick?: <T>(e: ValueType | React.MouseEvent<T, MouseEvent>) => void,
    onFocus?: <T>(e: ValueType | React.FocusEvent<T, Element>) => void
}

type ValueType = string | number | boolean | File 