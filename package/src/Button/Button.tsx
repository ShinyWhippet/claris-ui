import type { HTMLAttributes, Ref } from 'react'
import { forwardRef } from 'react'
import tw from 'tailwind-styled-components'

const TwElement = tw.button`
  cursor-pointer select-none rounded
  bg-gradient-to-br from-rose-50 to-rose-200
  px-6 py-3
  text-center text-xs
  font-normal
  uppercase tracking-[2px]
  text-stone-600
  shadow-xl shadow-stone-400
  transition-all duration-500 ease-[cubic-bezier(0.3,0,0.2,1)]
  hover:shadow-2xl
  hover:shadow-zinc-950
  dark:from-teal-900
  dark:to-teal-950
  dark:text-teal-300
  dark:shadow-zinc-950
  dark:hover:shadow-xl
  dark:hover:shadow-teal-500`

type ButtonType<T> = T extends { href: string }
  ? HTMLAnchorElement
  : HTMLButtonElement

type ButtonProps<T extends HTMLElement> = HTMLAttributes<T> & {
  disabled?: boolean
  href?: string
}

const Button = forwardRef<
  ButtonType<HTMLButtonElement | HTMLAnchorElement>,
  ButtonProps<HTMLButtonElement | HTMLAnchorElement>
>((props, ref) => {
  const asElement = (props as { href?: string }).href ? 'a' : 'button'

  return (
    <TwElement
      {...props}
      $as={asElement}
      ref={ref as Ref<ButtonType<ButtonProps<HTMLElement>>>}
    />
  )
})

export default Button
