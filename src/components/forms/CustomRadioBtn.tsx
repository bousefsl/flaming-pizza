//Types
import { CustomRadioBtnProps } from "@/types"

export default function CustomRadioBtn({ heatLabel, heatId, name, defaultChecked, required }: CustomRadioBtnProps) {
  return (
    <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
      <input id={`${name}-${heatId}`} type="radio" name={name} value={`${heatLabel}${" "}${heatId}`} required={required} defaultChecked={defaultChecked} className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 hover:cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor={`${name}-${heatId}`} className="w-full py-4 text-sm font-medium hover:cursor-pointer">
        <span className="ml-2 inline-flex align-top">{heatLabel}</span>
      </label>
    </div>
  )
}
