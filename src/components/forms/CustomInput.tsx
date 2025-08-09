//Types
import { CustomInputProps } from "@/types"

export default function CustomInput({ label, name, type = "text", otherClasses = "", defaultValue, placeholder }: CustomInputProps) {
  return (
    <>
      <label htmlFor={name} className="block text-lg/6 font-medium">
        {label}
      </label>
      <div className="mt-2 mb-2">
        <input type={type} id={name} name={name} defaultValue={defaultValue} className={`block w-1/2 bg-primary-100 border-2 border-black rounded-md pr-10 text-base text-gray-700 placeholder:text-gray-700 focus:outline-primary-700 ${type === "file" ? "py-1 pl-1" : "py-2 pl-3"} ${otherClasses}`} placeholder={placeholder} />
      </div>
    </>
  )
}
