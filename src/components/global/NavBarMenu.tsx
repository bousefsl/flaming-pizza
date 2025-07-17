//Types
import { LinkProps } from "@/types"
//Components
import NavBarMenuItem from "./NavBarMenuItem"

export default function NavBarMenu({ mobMenuIsOpen, navbarNav }: { mobMenuIsOpen: boolean; navbarNav: LinkProps[] }) {
  return (
    <>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${mobMenuIsOpen ? "h-0 overflow-hidden" : "h-auto py-2"} transition-all duration-300 ease-in-out md:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navbarNav.map((item) => {
            return <NavBarMenuItem key={item.linkId} {...item} linkClass={"block"} />
          })}
        </div>
      </div>
    </>
  )
}
