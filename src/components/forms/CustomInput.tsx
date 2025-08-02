import { HTMLInputTypeAttribute } from "react"

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  name: string
  type?: HTMLInputTypeAttribute
  otherClasses?: string
  defaultValue?: string | undefined
  placeholder?: string
}

export default function CustomInput({ label, name, type = "text", otherClasses = "", defaultValue, placeholder }: CustomInputProps) {
  return (
    <>
      <label htmlFor={name} className="block text-lg/6 font-medium">
        {label}
      </label>
      <div className="mt-2 mb-2">
        <input type={type} id={name} name={name} defaultValue={defaultValue} className={`block w-1/2 bg-white rounded-md  pr-10 text-base text-gray-900 placeholder:text-gray-400 focus:outline-primary-300 ${type === "file" ? "py-1 pl-1" : "py-2 pl-3"} ${otherClasses}`} placeholder={placeholder} />
      </div>
    </>
  )
}
