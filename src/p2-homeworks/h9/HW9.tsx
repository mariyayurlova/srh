import React from "react";
import Clock from "./Clock";
import styles from "./HW9.module.css";

function HW9() {
    return (
        <div className={styles.hw9}>
            <span className={styles.hw9__title}>homeworks 9</span>

            <Clock/>

        </div>
    );
}

export default HW9;
