import './global.css'
import { useScrollToTop } from './hooks/useScroll-to-top'

import Router from 'src/routes/sections'
import ThemeProvider from 'src/theme'
import { useTranslation } from 'react-i18next'


function App() {
  const { i18n } = useTranslation()
  document.dir = i18n.dir()
  useScrollToTop()
  
  return (
    <ThemeProvider >
      <Router />
    </ThemeProvider>
  )
}

export default App
