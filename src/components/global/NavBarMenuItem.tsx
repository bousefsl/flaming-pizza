//Next
import Link from "next/link"
//Types
import { LinkProps } from "@/types"

export default function NavBarMenuItem({ linkTo, linkTarget, linkRel, linkContent, linkClass }: LinkProps) {
  return (
    <Link href={linkTo} target={linkTarget} rel={linkRel} className={`${linkClass} font-anton rounded-md px-3 py-2 text-lg transition-all ease-in duration-200 text-white hover:bg-gray-700 hover:text-fp-light-yellow`}>
      {linkContent}
    </Link>
  )
}
