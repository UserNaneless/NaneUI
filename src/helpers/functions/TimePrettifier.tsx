export const timePrettify = (raw?: number) => {
    if (!raw || raw < 1) return "00:00"

    if (raw / 3600 < 1)
        return String(Math.floor(raw / 60)).padStart(2, "0") + ":" + String(Math.round(raw % 60)).padStart(2, "0");

    return String(Math.floor(raw / 3600)).padStart(2, "0") + ":" + String(Math.floor(raw / 60)).padStart(2, "0") + ":" + String(Math.round(raw % 60)).padStart(2, "0");
}
