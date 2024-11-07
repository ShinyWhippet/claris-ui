import type { VariantProps } from 'class-variance-authority'
import { cva, cx } from 'class-variance-authority'
import tw from 'tailwind-styled-components'

const buttonVariants = cva(
  cx`appearance-none
  self-center
  whitespace-nowrap rounded 
  border uppercase
  tracking-wider
  shadow
  transition-all duration-150
  hover:scale-105
  dark:hover:text-white`,
  {
    variants: {
      $intent: {
        igor: [
          cx`border-teal-400
          bg-teal-50
          text-teal-800
          shadow-teal-200
          hover:shadow-lg
          hover:shadow-teal-200
          dark:border-teal-500
          dark:bg-teal-950
          dark:text-teal-100
          dark:shadow-teal-950
          dark:hover:shadow-lg
          dark:hover:shadow-teal-600`,
        ],
        claris: [
          cx`border-pink-400
          bg-white
          text-pink-800
          shadow-pink-200
          hover:shadow-lg
          hover:shadow-pink-300
          dark:border-pink-600
          dark:bg-pink-950
          dark:text-pink-100
          dark:shadow-pink-950
          dark:hover:shadow-lg
          dark:hover:shadow-pink-600`,
        ],
        neutro: [
          cx`border-neutral-400
          text-neutral-500
          hover:border-neutral-400
          hover:text-black
          dark:border-neutral-600
          dark:text-neutral-300`,
        ],
        ghost: [
          cx`border-none
          text-neutral-500
          shadow-none
          hover:text-black
          dark:text-neutral-300`,
        ],
        link: [
          cx`rounded-none
          border-transparent
          border-b-indigo-500
          !p-0
          text-indigo-500
          shadow-none
          hover:text-black
          dark:border-b-indigo-200
          dark:text-indigo-200
          dark:hover:border-b-indigo-200`,
        ],
      },
      $size: {
        icon: [
          cx`flex
          size-10
          place-content-center
          place-items-center
          rounded-full
          p-1`,
        ],
        small: [cx`px-2 py-1 text-xs`],
        medium: [cx`px-4 py-2 text-sm`],
      },
    },
    defaultVariants: {
      $intent: 'igor',
      $size: 'medium',
    },
  },
)

type ButtonVariantProps = VariantProps<typeof buttonVariants>

const Button = tw.button`
  ${(props: ButtonVariantProps) => buttonVariants(props)}`

export { Button }
export type { ButtonVariantProps }
