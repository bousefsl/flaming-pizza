interface CustomTextArea extends React.HTMLProps<HTMLTextAreaElement> {
  label: string
  name: string
  rows: number
  otherClasses?: string
  defaultValue?: string | undefined
}

export default function CustomTextArea({ label, name, rows, otherClasses = "", defaultValue }: CustomTextArea) {
  return (
    <>
      <label htmlFor={name} className="block text-lg/6 font-medium">
        {label}
      </label>
      <div className="mt-2 mb-2">
        <textarea id={name} name={name} rows={rows} defaultValue={defaultValue} className={`block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-300 ${otherClasses}`}></textarea>
      </div>
    </>
  )
}
