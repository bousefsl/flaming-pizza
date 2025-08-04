//Next
import Image from "next/image"
//Components
import HeroImg from "../assets/images/hero-bg.jpg"
import HeroBannerCard from "./HeroBannerCard"
import RedLine from "./global/RedLine"

export default function HeroBanner() {
  return (
    <section className="hero-banner mb-16">
      <div className=" border-b-2 border-fp-yellow">
        <div className="min-h-120 max-h-150 overflow-hidden relative py-8 sm:py-16">
          <Image src={HeroImg} alt="Pizza" className="hero-img" priority />
          <div className="container mx-auto">
            <HeroBannerCard />
          </div>
        </div>
      </div>
      {/*Bottom Red Line*/}
      <RedLine />
    </section>
  )
}
