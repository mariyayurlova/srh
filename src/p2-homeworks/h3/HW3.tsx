import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "./Greeting.module.css";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {



    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        let newUser:UserType = {_id: v1(), name: name};
        setUsers([...users, newUser]);
    }

    return (
        <div className={s.hw3}>
            <span className={s.hw3__title}>homeworks 3</span>


            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    );
}

export default HW3;
