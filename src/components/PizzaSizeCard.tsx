//Types
import { PizzaSizeProps } from "@/types"

export default function PizzaSizeCard({ size, cost, baseSize, pizzastyleList }: PizzaSizeProps) {
  return (
    <div className="pizza-size-card mb-12 grow-0 shrink-0 w-full sm:w-[48%] lg:w-[23%]">
      <div className="bg-linear-to-b from-primary-950 to-fp-black pb-4 rounded-2xl h-full">
        <div className="ps-card-header flex flex-nowrap justify-between mb-6">
          <div className="pt-8 pl-8 pr-2 w-2/3">
            <h4 className="font-anton text-4xl">
              <span className="font-gvibes text-4xl text-fp-yellow">Flaming</span>
              <br />
              {size}
            </h4>
          </div>
          <div className="bg-primary-700 font-anton px-2 py-6 w-1/3 text-center rounded-tr-2xl rounded-bl-2xl">
            <p className="text-lg mb-0.5">From</p>
            <div className="flex flex-nowrap justify-center">
              <span className="text-xl pr-1">£</span>
              <span className="text-6xl">{cost}</span>
            </div>
          </div>
        </div>
        <div className="pc-card-body mb-8 px-8">
          <div className="flex flex-nowrap justify-center font-anton text-5xl mb-6">
            <span className="text-6xl">{baseSize}</span>
            <span className="text-2xl pl-1">"</span>
            <div className="flex flex-nowrap mt-auto pb-0.25 pl-3">base</div>
          </div>
          <div>
            <p className="text-lg text-fp-light-yellow mb-2">Base style options include:</p>
            <ul className="list-disc list-outside ml-4">
              {pizzastyleList.map((listitem, index) => {
                return <li key={index}>{listitem}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
