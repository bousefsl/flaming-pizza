//Next
import Link from "next/link"
//Types
import { ButtonLinkProps, ButtonProps, LinkProps } from "@/types"

//Button
export function Button({ children, otherClasses = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-linear-to-b from-primary-700 to-primary-800 px-7 py-1.5 text-md border-2 border-primary-200 rounded-xl cursor-pointer 
  transition-all ease-in duration-300 text-white hover:from-primary-900 hover:to-primary-950 hover:text-fp-light-yellow ${otherClasses}`}
      {...props}
    >
      {children}
    </button>
  )
}

//Anchor Link but with button appearance
export function ButtonLink({ linkTo, linkTarget, linkRel, linkClass, children }: ButtonLinkProps) {
  return (
    <Link
      href={linkTo}
      target={linkTarget}
      rel={linkRel}
      className={`bg-linear-to-b from-primary-700 to-primary-800 px-7 py-2.5 text-md border-2 border-primary-200 rounded-xl cursor-pointer 
  transition-all ease-in duration-300 text-white hover:from-primary-900 hover:to-primary-950 hover:text-fp-light-yellow ${linkClass}`}
    >
      {children}
      {/* Accessibility: Adds icon at the end to signify it opens in a new window plus text to be read by screenreader */}
      {linkTarget === "_blank" ? (
        <>
          <i aria-hidden="true" className="icon-fp-open-in-new ml-2 inline-block"></i>
          <span className="visually-hidden"> opens a new window</span>
        </>
      ) : (
        <></>
      )}
    </Link>
  )
}

//Anchor/Text Link
export function Anchor({ linkTo, linkTarget, linkRel, linkClass, children }: LinkProps) {
  return (
    <Link href={linkTo} target={linkTarget} rel={linkRel} className={`underline decoration-dotted underline-offset-2 hover:text-fp-light-yellow hover:no-underline ${linkClass}`}>
      {children}
      {/* Accessibility: Adds icon at the end to signify it opens in a new window plus text to be read by screenreader */}
      {linkTarget === "_blank" ? (
        <>
          <i aria-hidden="true" className="icon-fp-open-in-new ml-2 inline-block"></i>
          <span className="sr-only"> opens a new window</span>
        </>
      ) : (
        <></>
      )}
    </Link>
  )
}
