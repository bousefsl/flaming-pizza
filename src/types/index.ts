export type LinkProps = {
  linkId: number
  linkTo: string
  linkClass?: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
  linkContent: string
  children?: React.ReactNode
}

export type ButtonProps = {
  children: React.ReactNode
  variant?: string
  disabled?: boolean
  id?: string
  otherClasses?: string
}
