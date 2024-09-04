import './App.css'

import { Button } from '@components/ui'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'

const Wrapper = tw.section`
  m-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-6
  text-center`

const Title = tw.h1`
  text-5xl font-bold text-stone-900
  dark:text-stone-100`

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark')
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <Wrapper>
      <Title>Claris UI</Title>
      <Button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? 'Igor Dark' : 'Claris Light'}
      </Button>
    </Wrapper>
  )
}

export default App
