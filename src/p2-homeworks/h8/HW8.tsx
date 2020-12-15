import React, {useState} from "react";
import {homeWorkReducer, SortPeopleAC, SortPeopleByAgeAC} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from './HW8.module.css';

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div className={styles.peoples} key={p._id}>
            <span>{p.name} : {p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortPeopleAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortPeopleAC('down')))
    const sortByAge = () => setPeople(homeWorkReducer(initialPeople, SortPeopleByAgeAC()))

    return (
        <div className={styles.hw8}>
            <span className={styles.hw8__title}>homeworks 8</span>

            <div className={styles.wrapper}>

            <div className={styles.people}>
                {finalPeople}
            </div>
            <div className={styles.buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortByAge}>check 18</SuperButton>
            </div>
            </div>
        </div>
    );
}

export default HW8;
