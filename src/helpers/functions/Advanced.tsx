export const advancedNumber = (val?: number | string) => {

    if (typeof val === "number") {
        if (!isNaN(val))
            return Number(val);
    }

    if (typeof val === "string") {
        if (!isNaN(Number(val)))
            return Number(val)
    }

    return 0

}