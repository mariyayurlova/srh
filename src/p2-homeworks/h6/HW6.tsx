import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState, StateType} from "./localStorage/localStorage";
import s from "../h6/HW6.module.css";

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        const state: string = restoreState<string>("editable-span-value", "");
        setValue(state);
    };

    return (
        <div className={s.hw6}>
            <span className={s.hw6__title}>homeworks 6</span>

            {/*should work (должно работать)*/}
            <div className={s.input}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <div className={s.wrapper}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    );
}

export default HW6;
