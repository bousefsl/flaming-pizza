//Components
import HeroBanner from "@/components/HeroBanner"
import PizzaSizesList from "@/components/PizzaSizesList"
import TopFlamersList from "@/components/TopFlamersList"

export default function HomePage() {
  return (
    <div className="home">
      <HeroBanner />
      <TopFlamersList />
      <PizzaSizesList />
    </div>
  )
}
