import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { useSmoothScrolling } from './hooks/useSmoothScrolling'
import { useAnimations } from './hooks/useAnimations'
import { useScrollToTop } from './hooks/useScrollToTop'
import { useAnalytics } from './hooks/useAnalytics'

function App() {
  // Separación de responsabilidades usando hooks personalizados
  useSmoothScrolling();
  useAnimations();
  useScrollToTop();
  useAnalytics();

  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App
