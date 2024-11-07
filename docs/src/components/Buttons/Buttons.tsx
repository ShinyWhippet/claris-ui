import { Dog } from 'lucide-react'
import type { FC } from 'react'
import { Fragment } from 'react'
import tw from 'tailwind-styled-components'

import type { ButtonVariantProps } from '@/package/Button'
import { Button } from '@/package/Button'

const BUTTON_INTENTS: ButtonVariantProps['$intent'][] = [
  'neutro',
  'claris',
  'igor',
  'ghost',
  'link',
]

const BUTTON_SIZES: ButtonVariantProps['$size'][] = ['small', 'medium', 'icon']

const Wrapper = tw.div`
  grid grid-cols-[auto_auto_auto_auto_auto_auto] items-center justify-items-center gap-10
  rounded border
  p-6
  dark:border-neutral-700`

const Label = tw.p`
  text-xs font-bold uppercase`

const Buttons: FC = () => {
  return (
    <Wrapper>
      <div></div>
      {BUTTON_INTENTS.map((intent) => (
        <Label key={intent}>{intent}</Label>
      ))}
      {BUTTON_SIZES.map((size) => (
        <Fragment key={size}>
          <Label className="justify-self-end">{size}</Label>
          {BUTTON_INTENTS.map((intent) => (
            <div key={intent}>
              <div>
                <Button $intent={intent} $size={size}>
                  {size === 'icon' ? <Dog strokeWidth={1.2} /> : 'Lovely Dogs'}
                </Button>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </Wrapper>
  )
}

export { Buttons }
