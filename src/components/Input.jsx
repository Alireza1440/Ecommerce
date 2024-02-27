import { forwardRef } from "react"

const Input = forwardRef(function ({ required, label, id, type = "text" }, ref) {
  return (
    <div className="flex flex-col mt-3">
      <label htmlFor={id} className="-translate-x-2">
        {label}
      </label>
      <input required ref={ref} id={id} type={type} className="p-2 text-black rounded-md border-[2px] border-blue-700 outline-0 " />
    </div>
  )
})

export default Input