
type ActionType = ReturnType<typeof changeThemeId>
export type ThemeStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
