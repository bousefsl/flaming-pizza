export default function FormError({ error }: { error: string[] }) {
  return (
    <div className="error">
      <p className="text-md text-red-500">{error}</p>
    </div>
  )
}
