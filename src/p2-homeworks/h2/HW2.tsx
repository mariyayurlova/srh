import React, {useState} from "react";
import Affairs from "./Affairs";
import style from "./Affairs.module.css";


// types
export type AffairPriorityType = "high" | "low" | "middle";
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = "all" | AffairPriorityType;

// constants

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs;
    else return affairs.filter((item) => item.priority === filter);
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter((item) => item._id != _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div className={style.hw2}>
            <span className={style.hw2__title}>homeworks 2</span>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    );
}

export default HW2;
