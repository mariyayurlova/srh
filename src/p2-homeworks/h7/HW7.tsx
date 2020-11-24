import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "../h7/HW7.module.css";

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div className={s.hw7}>
            <span className={s.hw7__title}>homeworks 7</span>

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={s.inner}>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
        </div>
    );
}

export default HW7;
