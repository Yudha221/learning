import Navbar from './components/Navbar.jsx'

const navigationItems = [{ label: 'Beranda', href: '#beranda' }]

function App() {
  return (
    <>
      <Navbar items={navigationItems} />
      <main id="beranda" className="min-h-screen bg-white px-6 py-12 text-slate-900 sm:px-10">
        <h1 className="text-3xl font-semibold tracking-tight">Kodela Studio</h1>
      </main>
    </>
  )
}

export default App
