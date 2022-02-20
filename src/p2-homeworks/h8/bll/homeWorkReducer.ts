import {actionsType, InitialStateType} from "../HW8";

export const homeWorkReducer = (state: InitialStateType, action: actionsType): InitialStateType => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1)
            } else return state
        }
        case 'check':
            return state.filter(p => p.age > action.payload)
        default:
            return state

    }
}