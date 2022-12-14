
const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): { isLoading: boolean } => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type loadingActionType = {
    type: 'SET-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingActionType => ({
    type: 'SET-LOADING',
    isLoading
}) // fix any