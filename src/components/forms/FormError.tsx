export default function FormError({ error }: { error: string[] | string }) {
  return (
    <div className="error">
      <p className="text-md text-red-500" aria-live="polite">
        {error}
      </p>
    </div>
  )
}
