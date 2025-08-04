//Next
import { StaticImageData } from "next/image"
//React
import { ChangeEvent, HTMLInputTypeAttribute } from "react"

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

//Form elements
//--Input
export interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  name: string
  type?: HTMLInputTypeAttribute
  otherClasses?: string
  defaultValue?: string | undefined
  placeholder?: string
}

//--Textarea
export interface CustomTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string
  name: string
  rows: number
  otherClasses?: string
  defaultValue?: string | undefined
}

//--Radio Button
export type CustomRadioBtnProps = {
  id: number
  heatLabel: string
  heatId: string
  name: string
  defaultChecked?: boolean | undefined
  required?: boolean
}

//--Checkbox
export type CustomCheckboxProps = {
  label: string
  name: string
  defaultChecked?: boolean | undefined
}

//Create Pizza form "initialState"
export type CreatePizzaActionState = {
  title?: string
  image?: string
  content?: string
  content2?: string
  heatContent?: string
  toppings?: string[]
  errors?: {
    title?: string[]
    // image?: string[]
    content?: string[]
    content2?: string[]
    // heatContent?: string[]
    toppings?: string[]
  }
}
