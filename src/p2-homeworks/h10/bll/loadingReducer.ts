type initStateType = typeof initState

const initState = {
    isLoading:false
}

export enum MAIN {
    LOADING = "LOADING"
}

export const loadingReducer = (state = initState, action: loadingType): initStateType => { // fix any
    switch (action.type) {
        case MAIN.LOADING: {
            return {...state,isLoading: action.isLoading}
        }
        default: return state
    }
}
type loadingType = {
    type:MAIN.LOADING
    isLoading:boolean
}
export const loadingAC = (isLoading:boolean): loadingType => ({type:MAIN.LOADING,isLoading})