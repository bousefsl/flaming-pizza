//Next
import Link from "next/link"
//Types
import { ButtonProps, LinkProps } from "@/types"

//Button
export function Button({ children, variant = "primary", otherClasses = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-linear-to-b from-${variant}-700 to-${variant}-800 px-7 py-2 text-lg border-2 border-${variant}-200 rounded-xl cursor-pointer 
  transition-all ease-in duration-300 text-white hover:from-${variant}-900 hover:to-${variant}-950 hover:text-fp-light-yellow  ${otherClasses}`}
      {...props}
    >
      {children}
    </button>
  )
}

//Anchor/Text Link
export function Anchor({ linkTo, linkTarget, linkRel, linkClass, children }: LinkProps) {
  return (
    <Link href={linkTo} target={linkTarget} rel={linkRel} className={linkClass}>
      {children}
      {/* Accessibility: Adds icon at the end to signify it opens in a new window plus text to be read by screenreader */}
      {linkTarget === "_blank" ? (
        <>
          <i aria-hidden="true" className="icon-hs-open-in-new ml-2 inline-block"></i>
          <span className="visually-hidden"> opens a new window</span>
        </>
      ) : (
        <></>
      )}
    </Link>
  )
}
