import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error != "" ? s.error : ""; // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div className={s.greeting__wrapper}>
                <div className={s.greeting__inner}>
                    <input value={name} onChange={setNameCallback} className={inputClass}/>
                    <span className={s.greeting__error}>{error}</span>
                </div>
                <button className={s.greeting__button} onClick={addUser}>Добавить</button>
            </div>
            <span className={s.greeting__count}>Количество пользователей: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
