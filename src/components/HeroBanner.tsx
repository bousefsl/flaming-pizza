import Image from "next/image"
import HeroImg from "../assets/images/hero-bg.jpg"
import { Button } from "./global/CTAs"

export default function HeroBanner() {
  return (
    <section className="hero-banner mb-8">
      <div className=" border-b-2 border-fp-yellow">
        <div className="min-h-120 max-h-150 overflow-hidden relative py-16">
          <Image src={HeroImg} alt="Pizza" className="hero-img" />
          <div className="container mx-auto">
            <div className="w-full sm:w-1/2 md:w-2/5 px-26">
              <div className="bg-linear-to-b from-primary-950/80 to-fp-black/80 px-8 pt-8 pb-12 rounded-2xl">
                <div className="mb-8">
                  <p className="font-gvibes text-4xl text-fp-yellow mb-6">New Flamer!</p>
                  <h1 className="font-anton text-primary-300 text-4xl/tight">
                    Do you like <span className="text-white">chicken?</span>... <br />
                    Do you like <span className="text-white">bacon</span>?... <br />
                    Do you like pizza with <span className="text-white">chicken</span>, <span className="text-white">bacon</span>, <span className="text-white">onion</span>, <span className="text-white">herbs</span> and more?...
                  </h1>
                </div>
                <Button>View our NEW Pizza</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Bottom Red Line*/}
      <div className="h-3 bg-primary-700">&nbsp;</div>
    </section>
  )
}
