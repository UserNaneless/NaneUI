import { useEffect } from "react";

export default function useClickOutside(ref: HTMLElement | undefined | null, handler: () => void) {
    useEffect(() => {

        const eventer = (e: MouseEvent) => {
            //@ts-ignore
            if (ref.current && !ref.current.contains(e.target))
                handler();
        }
        document.addEventListener("mousedown", eventer);
        return () => {
            document.removeEventListener("mousedown", eventer);
        }
    }, [])
}
