export default function FormError({ error, mainerror }: { error: string[] | string; mainerror?: boolean }) {
  return (
    <div className={`error ${mainerror ? "border-1 border-primary-300 rounded-sm px-4 py-4 mt-8" : ""}`}>
      <p className="flex" aria-live="polite">
        <i aria-hidden="true" className="icon-fp-alert-outline text-xl text-primary-400 pr-2"></i>
        <span className="text-md text-primary-500">{error}</span>
      </p>
    </div>
  )
}
