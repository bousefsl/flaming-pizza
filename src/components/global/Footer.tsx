//Next
import Image from "next/image"
//Images
import FPLogo from "../../assets/images/fp-logo.png"

export default function Footer() {
  const footerNav = [
    {
      title: "Lorem ipsum",
      items: [
        { linkId: 1, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "View Pizzas" },
        { linkId: 2, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "Contact Us" },
        { linkId: 3, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "About Us" },
      ],
    },
    {
      title: "Sit dolor amet",
      items: [
        { linkId: 4, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "Lorem ipsum dolor" },
        { linkId: 5, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "Duis aute irure" },
        { linkId: 6, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "Excepteur sint" },
        { linkId: 7, linkTo: "#", linkTarget: "", linkRel: "", linkContent: "Ut enim ad minim" },
      ],
    },
  ]

  return (
    <section className="footer pt-12 mt-auto">
      {/* "mt-auto" - Necessary for footer to stick to the bottom*/}
      <div className="border-t-2 border-fp-yellow">
        <div className="bg-linear-to-b from-primary-950 to-fp-black border-t-12 border-primary-700">
          <div className="container mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col sm:flex-row">
                {footerNav.map((section, index) => {
                  return (
                    <div key={index} className="mb-8 mr-12 lg:mr-24 w-full sm:w-1/2 md:w-auto">
                      <p className="font-anton text-fp-light-yellow text-xl mb-2">{section.title}</p>
                      <ul className="link-outside">
                        {section.items.map((item) => {
                          return <li key={item.linkId}>{item.linkContent}</li>
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
              <div>
                <p className="font-anton text-fp-light-yellow text-xl mb-6">Follows us at: {/* Todo: Add icon & links */}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex justify-end md:items-center h-full">
                <Image src={FPLogo} alt="Flaming Pizza" className="h-24 md:h-30 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
