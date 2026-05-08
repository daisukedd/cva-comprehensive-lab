import { button } from "./button"
import { type VariantProps } from "class-variance-authority"

type ButtonProps = VariantProps<typeof button> & {
  children: React.ReactNode
}

export function Button({ color, size, children }: ButtonProps) {
  return (
    <button className={button({ color, size })}>
      {children}
    </button>
  )
}