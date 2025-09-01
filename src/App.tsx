import './App.css'
import siteIcon from './assets/world.png'
import { DesktopPage } from './pages/desktop/DesktopPage'

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
