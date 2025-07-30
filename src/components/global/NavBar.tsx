"use client"

//Next
import Image from "next/image"
import Link from "next/link"
//React
import { useState } from "react"
//Images
import FPLogo from "../../assets/images/fp-logo.png"
//Components
import NavBarMenuBtn from "./NavBarMenuBtn"
import NavBarMenu from "./NavBarMenu"
import NavBarMenuItem from "./NavBarMenuItem"
import { ButtonLink } from "./CTAs"
import RedLine from "./RedLine"

export default function NavBar() {
  const [mobMenuIsOpen, setMobMenuIsOpen] = useState(true)

  const navbarNav = [
    { linkId: 1, linkTo: "/pizzas", linkTarget: "", linkRel: "", linkContent: "View Pizzas" },
    { linkId: 2, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "Contact Us" },
    { linkId: 3, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "About Us" },
  ]

  const toggleMenu = () => {
    setMobMenuIsOpen(!mobMenuIsOpen)
  }

  return (
    <nav className="bg-linear-to-b from-primary-950 to-fp-black border-b-2 border-fp-yellow">
      <div className="container mx-auto px-2 md:px-0">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <NavBarMenuBtn mobMenuIsOpen={mobMenuIsOpen} toggleMenu={toggleMenu} />
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex shrink-0 items-center md:mr-auto">
              <Link href="/" className="my-4">
                <Image src={FPLogo} alt="Flaming Pizza" className="h-16 md:h-20 lg:h-22 w-auto" priority={true} />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex items-center mr-5">
              <div className="flex space-x-4 items-center">
                {navbarNav.map((item) => {
                  return <NavBarMenuItem key={item.linkId} {...item} />
                })}
              </div>
            </div>
          </div>
          <div className="relative ml-3">
            <div>
              <ButtonLink linkTo="/pizzas/create-pizza">Create Pizza</ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/*Mobile Menu*/}
      <NavBarMenu mobMenuIsOpen={mobMenuIsOpen} navbarNav={navbarNav} />
      {/*Bottom Red Line*/}
      <RedLine />
    </nav>
  )
}
