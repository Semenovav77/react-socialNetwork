
import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref && !ref.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

export default useOutsideClick;
