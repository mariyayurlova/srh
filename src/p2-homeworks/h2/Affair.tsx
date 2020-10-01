import React from "react";
import {AffairType} from "./HW2";
import style from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div className={style.affair}>
            <span className={style.affair__title}>{props.affair.name}</span>
            <button className={style.affair__remove} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
