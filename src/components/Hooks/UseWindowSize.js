import React, {useEffect, useState} from "react";

export default function useWindowSize(ref) {
    const [size, setSize] = useState(1200);
    useEffect(() => {
        if (ref.current) {
            console.log(ref.current.offsetWidth);
            setSize(ref.current.offsetWidth)
        }
    }, [ref.current])

    return size;
}