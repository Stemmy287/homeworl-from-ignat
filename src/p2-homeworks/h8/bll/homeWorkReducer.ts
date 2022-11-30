import {UserType} from "../HW8";
import {exec} from "child_process";


export type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

export type CheckActionType = {
    type: 'check'
    payload: 18
}

export type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                : [...state].sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}