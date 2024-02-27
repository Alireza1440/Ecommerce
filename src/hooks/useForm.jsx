import { useCallback, useRef } from "react"

export default function useForm() {
  const refs = useRef({})
  return {
    registerToForm(key) {
      const ref = useRef(null)
      refs.current[key] = ref
      return {
        ref
      }
    },
    handleSubmit(handler) {
      return useCallback((e) => {
        e.preventDefault()
        const vals = {}
        for (let k in refs.current) vals[k] = refs.current[k].current.value
        handler(vals)
      })
    }
  }
} 