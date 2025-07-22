//Components
import { ButtonLink } from "@/components/global/CTAs"

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container mx-auto text-center">
        <h1 className="font-anton text-primary-300 text-3xl sm:text-4xl/tight mt-24 mb-8">
          Oops! <span className="text-white">There seems to be a problem...</span>
        </h1>
        <p className="mb-4">We could not find the page you were looking for. The page may not exist.</p>
        <p className="mb-12">Please return to the homepage and try again. Thank you.</p>
        <ButtonLink linkTo="/">Return to homepage</ButtonLink>
      </div>
    </div>
  )
}
