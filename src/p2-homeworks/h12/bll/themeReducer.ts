const initState = {
  theme: 'dark'
}

export type ThemeType = 'dark' | 'red' | 'some' | 'blue'
type StateType = typeof initState
type ChangeThemeType = ReturnType<typeof changeThemeC>

export enum Theme {
  Change = 'change'
}

export const themeReducer = (state = initState, action: ChangeThemeType): StateType => {
  switch (action.type) {
    case Theme.Change: {
      return {...state, theme: action.theme}
    }
    default:
      return state
  }
}

export const changeThemeC = (theme: ThemeType) => ({type: Theme.Change, theme})