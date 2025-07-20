import { Fragment } from "react"

export function SkeletonList({ amount, children }: { amount: number; children: React.ReactNode }) {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => {
        return <Fragment key={index}>{children}</Fragment>
      })}
    </>
  )
}

export function Skeleton({ short, inline }: { short?: boolean; inline?: boolean }) {
  return <div className="skeleton animate-skeleton bg-primary-200 w-full h-6 rounded-lg" style={{ width: short ? "10rem" : undefined, display: inline ? "inline-block" : undefined }}></div>
}

export function SkeletonImg() {
  return <div className="mt-4 animate-skeleton bg-primary-200 w-full h-64 rounded-xl" />
}

export function SkeletonBtn() {
  return <div className="skeleton animate-skeleton bg-primary-200 h-10 rounded-xl mt-8 mx-auto w-1/2" />
}

export function SkeletonPizzaCard() {
  return (
    <div className="pizza-card mb-12 grow-0 shrink-0 w-full sm:w-[48%] lg:w-[23%]">
      <div className="flex flex-col h-full">
        <div>
          <div className="mb-4 relative">
            <SkeletonImg />
          </div>
          <div className="px-2">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <SkeletonBtn />
      </div>
    </div>
  )
}
