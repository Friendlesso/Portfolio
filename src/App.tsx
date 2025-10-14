import './App.css'
import siteIcon from './assets/images/icons/world.svg'
import { DesktopPage } from './pages/Desktop/DesktopPage.tsx'

function App() {
  return (
    <>
      <title>Mihailo</title>
      <link rel="icon" type="image/svg+xml" href={siteIcon} />
      <DesktopPage />
    </>
  )
}

export default App
