//Types
import { CustomRadioBtnProps } from "@/types"

export default function CustomRadioBtn({ heatLabel, heatId, name, required, defaultChecked }: CustomRadioBtnProps) {
  return (
    <div className="border-1 border-gray-200 dark:border-gray-700 hover:border-primary-100 hover:cursor-pointer rounded-sm flex items-center gap-2 px-2 py-2">
      <input id={`${name}-${heatId}`} type="radio" name={name} value={`${heatLabel}${" "}${heatId}`} required={required} defaultChecked={defaultChecked} className="peer relative w-4 h-4 appearance-none shrink-0 border-2 border-gray-400 rounded-full hover:cursor-pointer" />
      <div className="absolute w-2 h-2 rounded-full peer-checked:bg-blue-500 ml-1" />
      <label htmlFor={`${name}-${heatId}`} className="w-full text-sm font-medium hover:cursor-pointer">
        {heatLabel}
      </label>
    </div>
  )
}
