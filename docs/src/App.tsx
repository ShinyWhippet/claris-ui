import './App.css'

import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'

import { Buttons } from '@/docs/components/Buttons'
import { Content, Wrapper } from '@/docs/ui/Structure.tsx'
import { Button } from '@/package/Button'

const Title = tw.h1`
  text-5xl font-bold`

const Subtitle = tw(Title)`
  text-2xl`

const Section = tw.section`grid gap-4`

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark')
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <Wrapper>
      <Content>
        <Title>Claris UI</Title>
        <Button $intent="neutro" onClick={toggleDarkMode}>
          {isDarkMode ? 'Dark' : 'Light'}
        </Button>
      </Content>
      <Section>
        <Subtitle>Buttons</Subtitle>
        <Buttons />
      </Section>
    </Wrapper>
  )
}

export default App
