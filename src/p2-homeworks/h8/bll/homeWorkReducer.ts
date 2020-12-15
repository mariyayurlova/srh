export type PeopleType = {
    _id: number,
    name: string,
    age: number
}

type ActionsType = ReturnType<typeof SortPeopleAC> | ReturnType<typeof SortPeopleByAgeAC>

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionsType): Array<PeopleType> => {
    switch (action.type) {
        case "sort": {
            let newState = [...state];
            newState.sort((a, b) =>{
                let nameA=a.name.toLowerCase()
                let nameB=b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            });
            if (action.payload === 'up'){
                return newState
            }
            else{
                return newState.reverse()
            }
        }
        case "check": {
            return state.filter((item) => item.age > 18)
        }
        default: return state
    }
};

export const SortPeopleAC = (payload: "up" | "down") => {
    return {type:'sort', payload: payload} as const
}

export const SortPeopleByAgeAC = () => {
    return {type: 'check'} as const
}