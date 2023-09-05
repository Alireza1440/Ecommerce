import { createContext, useContext, useReducer } from "react"

const ModalContext = createContext(null)
const ModalDispatchContext = createContext(null)

const initialState = { register: false, login: false }

export function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ModalContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}

export function useModalDispatch() {
  return useContext(ModalDispatchContext)
}

function reducer(state, action) {
  switch (action) {
    case 'register/open':
      return { ...state, register: true }
      break;
    case 'register/close':
      return { ...state, register: false }

      break;
    case 'login/open':
      return { ...state, login: true }

      break;
    case 'login/close':
      return { ...state, login: false }

      break;
    default:
      throw new Error('Unexpected action!')
      break;
  }
}