//Next
import Image from "next/image"
import Link from "next/link"
//Images
import FPLogo from "../../assets/images/fp-logo.png"
// import { useState } from "react"

export default function NavBar() {
  // const [mobMenuHidden, setMobMenuHidden] = useState(true)

  return (
    <nav className="bg-linear-to-b from-primary-950 to-fp-black border-b-2 border-fp-yellow">
      <div className="container mx-auto px-2 md:px-0">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block" */}
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Icon when menu is open.

            Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex shrink-0 items-center md:mr-auto">
              <Link href="/" className="my-4" aria-current="page">
                <Image src={FPLogo} alt="Flaming Pizza" className="h-16 md:h-20 lg:h-22 w-auto" />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex items-center mr-5">
              <div className="flex space-x-4 items-center">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="#" className="font-anton rounded-md px-3 py-2 text-lg transition-all ease-in duration-200 text-white hover:bg-gray-700 hover:text-fp-light-yellow">
                  View Pizzas
                </Link>
                <Link href="#" className="font-anton rounded-md px-3 py-2 text-lg transition-all ease-in duration-200 text-white hover:bg-gray-700 hover:text-fp-light-yellow">
                  Contact Us
                </Link>
                <Link href="#" className="font-anton rounded-md px-3 py-2 text-lg transition-all ease-in duration-200 text-white hover:bg-gray-700 hover:text-fp-light-yellow">
                  About Us
                </Link>
              </div>
            </div>
          </div>
          {/* Profile dropdown */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="bg-linear-to-b from-primary-700 to-primary-800 px-7 py-2 text-lg border-2 border-primary-200 rounded-xl cursor-pointer 
  hover:from-primary-900 hover:to-primary-950 transition-all ease-in duration-200;"
              >
                Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <Link href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            Dashboard
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Team
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Projects
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Calendar
          </Link>
        </div>
      </div>
      <div className="h-3 bg-primary-700">&nbsp;</div>
    </nav>
  )
}
