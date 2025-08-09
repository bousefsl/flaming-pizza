//Types
import { CustomCheckboxProps } from "@/types"

export default function CustomCheckbox({ label, name, defaultChecked }: CustomCheckboxProps) {
  return (
    <div className="border-1 border-gray-200 dark:border-gray-700 hover:border-primary-100 hover:cursor-pointer rounded-sm flex items-center gap-2 px-2 py-2">
      <input id={`${label}-checkbox`} type="checkbox" name={name} value={label} defaultChecked={defaultChecked} className="peer relative w-4 h-4 appearance-none shrink-0 border-2 border-gray-400 rounded-sm hover:cursor-pointer" />
      <div className="absolute w-2 h-2 rounded-xs peer-checked:bg-blue-500 ml-1" />
      <label htmlFor={`${label}-checkbox`} className="w-full text-sm font-medium hover:cursor-pointer">
        {label}
      </label>
    </div>
  )
}
