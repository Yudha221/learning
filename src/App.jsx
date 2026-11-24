import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'

const navigationItems = [{ label: 'Beranda', href: '#beranda' }]

function App() {
  return (
    <>
      <Navbar items={navigationItems} />
      <main id="beranda" className="bg-white text-slate-900">
        <Hero />
      </main>
    </>
  )
}

export default App
