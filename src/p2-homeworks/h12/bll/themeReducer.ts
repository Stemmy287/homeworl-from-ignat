const initState = {
    themeId: 'some'
};

export const themeReducer = (state = initState, action: {type: 'CHANGE-THEME-ID', id: string}): {themeId: string} => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME-ID': {
            return {...state, themeId: action.id};
        }
        default: return state;
    }
};

export const changeThemeC = (id: string): {type: 'CHANGE-THEME-ID', id: string} => ({
    type: 'CHANGE-THEME-ID',
    id
}); // fix any