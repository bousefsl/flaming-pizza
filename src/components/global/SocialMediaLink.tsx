//Next
import Link from "next/link"
//Types
import { SocialMediaLinkProps } from "@/types"

export default function SocialMediaLink({ linkTo, linkClass, linkAriaLabel, iconName, iconClass }: SocialMediaLinkProps) {
  return (
    <Link href={linkTo} target="_blank" rel="noreferrer" className={`transition-all duration-200 ease-in text-white hover:text-gray-400 ${linkClass}`} aria-label={linkAriaLabel}>
      <i className={`icon-fp-${iconName} ${iconClass}`}></i>
    </Link>
  )
}
