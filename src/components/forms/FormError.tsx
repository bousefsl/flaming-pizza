export default function FormError({ error }: { error: string[] | string }) {
  return (
    <div className="error">
      <p aria-live="polite">
        <i aria-hidden="true" className="icon-fp-alert-outline text-xl text-primary-400 inline-block pr-2"></i>
        <span className="inline-block text-md text-primary-500">{error}</span>
      </p>
    </div>
  )
}
