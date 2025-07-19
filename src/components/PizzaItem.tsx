//Next
import { PizzaItemProps } from "@/types"
//Types
import Image from "next/image"
import { Button } from "./global/CTAs"

export default function PizzaItem({ image, title, content, heatContent, heatImg, buttonText }: PizzaItemProps) {
  return (
    <div className="pizza-card mb-12 grow-0 shrink-0 w-full sm:w-[48%] lg:w-[23%]">
      <div className="flex flex-col h-full">
        <div>
          <div className="mb-4 relative">
            <Image src={image} alt="" className="rounded-2xl" placeholder="blur" />
            <div className="bg-primary-950 pl-2 pr-4 py-2 rounded-tl-xl rounded-br-xl w-auto absolute right-0 bottom-0">
              <div className="flex flex-row">
                <div className="mr-2">
                  <Image src={heatImg} alt={heatContent} />
                </div>
                <p className="text-md text-fp-light-yellow font-bold">{heatContent} heat</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <h4 className="text-fp-light-yellow text-lg font-semibold ">{title}</h4>
            <p className="mb-6">{content.slice(0, 80)}...</p>
          </div>
        </div>
        <div className="text-center mt-auto">
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}
