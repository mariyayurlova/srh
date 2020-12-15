import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./HW9.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = date ? date.toLocaleTimeString() : "Time";
    const stringDate = date ? date.toLocaleDateString() : "Date";

    return (
        <div className={styles.inner}>
            <div className={styles.wrapper}>
                <div
                    className={styles.time_wrapper}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <span className={styles.time}>{stringTime}</span>
                </div>

                {show && (
                    <div className={styles.date_wrapper}>
                        <span className={styles.date}>{stringDate}</span>
                    </div>
                )}
            </div>

            <div className={styles.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
