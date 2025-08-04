"use client"

import { useRef } from "react"
//Components
import { ButtonLink } from "./global/CTAs"
//Motion
import { useInView } from "motion/react"

export default function HeroBannerCard() {
  //Motion (animation)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0 })

  return (
    <div className={`w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 px-2 sm:px-12 opacity-0 transition-all duration-500 blur-sm -translate-x-28 ease-in ${isInView ? "opacity-100! blur-none! translate-x-0!" : ""}`} ref={ref}>
      <div className="bg-linear-to-b from-primary-950/80 to-fp-black/80 px-8 pt-8 pb-12 rounded-2xl">
        <div className="mb-8">
          <p className="font-gvibes text-3xl sm:text-4xl text-fp-yellow mb-6">New Flamer!</p>
          <h1 className="font-anton text-primary-300 text-3xl sm:text-4xl/tight">
            Do you like <span className="text-white">chicken?</span>... <br />
            Do you like <span className="text-white">bacon</span>?... <br />
            Do you like pizza with <span className="text-white">chicken</span>, <span className="text-white">bacon</span>, <span className="text-white">onion</span>, <span className="text-white">herbs</span> and more?...
          </h1>
        </div>
        <ButtonLink linkTo="/pizzas/spicy-chicken-flame-baked-pizza">View our NEW Pizza</ButtonLink>
      </div>
    </div>
  )
}
