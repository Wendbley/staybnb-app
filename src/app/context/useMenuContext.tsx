'use client'

import { createContext, useReducer, Dispatch } from "react"


interface Props{
    children: React.ReactNode
}

type State = {
    menuOpen: boolean
}
type Action = {
    type: 'OPEN' | 'CLOSE'
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'OPEN':
            return { ...state, menuOpen: true }
        case 'CLOSE':
            return { ...state, menuOpen: false }
        default:
            return state
    }
}

const initialState: State = {
    menuOpen: false
}

/**
 * 
 */
export const useMenuContext = createContext<{state: State, dispatch: Dispatch<Action>}>({ state: initialState, dispatch: () => null })

/**
 * 
 * @param param0 
 * @returns 
 */
const  MenuContextProvider: React.FC<Props> = ({children}:Props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <useMenuContext.Provider value={{ state, dispatch }}>
            {children}
        </useMenuContext.Provider>
    )
}

export default MenuContextProvider