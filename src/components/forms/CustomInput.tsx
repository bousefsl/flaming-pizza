interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  name: string
  otherClasses?: string
  defaultValue?: string | undefined
  placeholder: string
}

export default function CustomInput({ label, name, otherClasses = "", defaultValue, placeholder }: CustomInputProps) {
  return (
    <>
      <label htmlFor={name} className="block text-lg/6 font-medium">
        {label}
      </label>
      <div className="mt-2 mb-2">
        <input id={name} name={name} defaultValue={defaultValue} className={`block w-1/2 bg-white rounded-md py-2 pl-3 pr-10 text-base text-gray-900 placeholder:text-gray-400 focus:outline-primary-300 ${otherClasses}`} placeholder={placeholder} />
      </div>
    </>
  )
}
