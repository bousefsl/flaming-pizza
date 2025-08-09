//Types
import { CustomTextAreaProps } from "@/types"

export default function CustomTextArea({ label, name, rows, otherClasses = "", defaultValue }: CustomTextAreaProps) {
  return (
    <>
      <label htmlFor={name} className="block text-lg/6 font-medium">
        {label}
      </label>
      <div className="mt-2 mb-2">
        <textarea id={name} name={name} rows={rows} defaultValue={defaultValue} className={`block w-full bg-primary-100 border-2 border-black rounded-md px-3 py-2 text-base text-gray-700 placeholder:text-gray-700 focus:outline-primary-700 ${otherClasses}`}></textarea>
      </div>
    </>
  )
}
