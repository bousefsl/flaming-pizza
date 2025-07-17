//Next
import Link from "next/link"
//Types
import { ButtonProps, LinkProps } from "@/types"

//Button
export function Button({ children, variant = "primary", otherClasses = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-linear-to-b from-primary-700 to-primary-800 px-7 py-2 text-lg border-2 border-primary-200 rounded-xl cursor-pointer 
  transition-all ease-in duration-300 text-white hover:from-primary-900 hover:to-primary-950 hover:text-fp-light-yellow ${otherClasses}`}
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
