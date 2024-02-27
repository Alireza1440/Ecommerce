import { createContext, useContext, useReducer } from "react"

const CurrentUserContext = createContext(null)
const CurrentUserDispatchContext = createContext(null)

const initialState = JSON.parse(localStorage.getItem('currentUser'))

export function CurrentUserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CurrentUserContext.Provider value={state}>
      <CurrentUserDispatchContext.Provider value={dispatch}>
        {children}
      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export function useUser() {
  return useContext(CurrentUserContext)
}

export function useUserDispatch() {
  return useContext(CurrentUserDispatchContext)
}

function reducer(_, { type, payload }) {
  switch (type) {
    case 'set':
      localStorage.setItem('currentUser', JSON.stringify(payload))
      return payload
      break;
    case 'remove':
      localStorage.removeItem('currentUser')
      return null
      break;
    default:
      throw new Error(`Unexpected login/logout action! ${action}`)
      break;
  }
}