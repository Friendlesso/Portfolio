import './App.css'
import siteIcon from './assets/images/icons/world.svg'
import { Analytics } from '@vercel/analytics/react'
import { DesktopPage } from './pages/desktop/DesktopPage'

function App() {
  return (
    <>
      <title>Mihailo</title>
      <link rel="icon" type="image/svg+xml" href={siteIcon} />
      <DesktopPage />
      <Analytics />
    </>
  )
}

export default App
