//Types
import { CustomCheckboxProps } from "@/types"

export default function CustomCheckbox({ label, name, defaultChecked }: CustomCheckboxProps) {
  return (
    <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
      <input id={`${label}-checkbox`} type="checkbox" name={name} value={label} defaultChecked={defaultChecked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 hover:cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor={`${label}-checkbox`} className="w-full py-4 text-sm font-medium hover:cursor-pointer">
        <span className="ml-2 inline-flex align-top">{label}</span>
      </label>
    </div>
  )
}
