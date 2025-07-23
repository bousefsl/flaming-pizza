import { StaticImageData } from "next/image"

//CTAs
export type LinkProps = {
  linkId?: number
  linkTo: string
  linkClass?: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
  linkContent?: string
  children?: React.ReactNode
}

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  id?: string
  otherClasses?: string
}

export type ButtonLinkProps = {
  linkId?: number
  linkTo: string
  linkClass?: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
  children: React.ReactNode
}

export type SocialMediaLinkProps = {
  linkTo: string
  linkClass?: string
  linkAriaLabel: string
  iconName: string
  iconClass?: string
}

//Pizza Item
export type PizzaItemProps = {
  id: string
  image: string | StaticImageData
  title: string
  content: string
  content2?: string
  toppings?: string[]
  heatContent: string
  heatImg: string | StaticImageData
  blurHash?: string
}

//Pizza Size Card
export type PizzaSizeProps = {
  id: number
  size: string
  cost: number
  baseSize: number
  pizzastyleList: string[]
}
