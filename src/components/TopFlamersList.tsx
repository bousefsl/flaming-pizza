//Components
import PizzaItem from "./PizzaItem"
//Images
import Pizza1 from "../assets/images/pizza1.jpg"
import Pizza2 from "../assets/images/pizza2.jpg"
import Pizza3 from "../assets/images/pizza3.jpg"
import Pizza4 from "../assets/images/pizza4.jpg"
import Heat0 from "../assets/images/heat0.png"
import Heat1 from "../assets/images/heat1.png"
import Heat2 from "../assets/images/heat2.png"
import Heat3 from "../assets/images/heat3.png"
import Heat4 from "../assets/images/heat4.png"

export default function TopFlamersList() {
  const topFlamerProducts = [
    {
      id: "tomatolivo-flame-baked-pizza",
      image: Pizza1,
      title: "Tomatolivo flame-baked Pizza",
      content: "Lorem ipsum dolor sit amet consectetur elit. Accusantium voluptas adipisci corporis, cum nisi enim!",
      heatContent: "Medium",
      heatImg: Heat2,
    },
    {
      id: "oh-so-chorizo-flame-baked-pizza",
      image: Pizza2,
      title: "Oh-So-Chorizo flame-baked Pizza",
      content: "Lorem ipsum dolor sit amet consectetur elit. Accusantium voluptas adipisci corporis, cum nisi enim!",
      heatContent: "Mild",
      heatImg: Heat1,
    },
    {
      id: "meat-sweats-flame-baked-pizza",
      image: Pizza3,
      title: "Meat sweats flame-baked Pizza",
      content: "Lorem ipsum dolor sit amet consectetur elit. Accusantium voluptas adipisci corporis, cum nisi enim!",
      heatContent: "Scorchio",
      heatImg: Heat4,
    },
    {
      id: "pear-ific-flame-baked-pizza",
      image: Pizza4,
      title: "Pear & Honey flame-baked Pizza",
      content: "Lorem ipsum dolor sit amet consectetur elit. Accusantium voluptas adipisci corporis, cum nisi enim!",
      heatContent: "Hot",
      heatImg: Heat3,
    },
  ]

  return (
    <section className="top-flamers">
      <div className=" bg-fp-black text-white mb-12">
        <div className="container mx-auto px-8 lg:px-4 2xl:px-4">
          <div className="text-center mb-8">
            <h2 className="font-anton text-3xl sm:text-5xl text-primary-700">
              Our top <span className="font-gvibes text-4xl sm:text-6xl text-fp-yellow">Flamers</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
            {topFlamerProducts.map((item) => {
              return <PizzaItem key={item.id} {...item} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
