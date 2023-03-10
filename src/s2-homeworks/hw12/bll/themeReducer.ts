
const SET_THEME_ID = 'SET_THEME_ID'

type SetThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ActionType = SetThemeActionType

export type ThemeStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => {
    // debugger// fix any
    // console.log(state)
    switch (action.type) {
        // дописать
        case SET_THEME_ID: {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeActionType => ({ type: 'SET_THEME_ID', id } as const) // fix any
