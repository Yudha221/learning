import { useId, useState } from 'react'

const linkClassName =
  'rounded-sm text-sm font-medium text-slate-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300'

function Navbar({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()
  const hasMobileMenu = items.length >= 2
  const brandHref = items.find(({ href }) => href === '#beranda')?.href

  return (
    <header className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        {brandHref ? (
          <a
            href={brandHref}
            className="rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Kodela Studio
          </a>
        ) : (
          <span className="text-lg font-semibold tracking-tight">Kodela Studio</span>
        )}

        {items.length > 0 && (
          <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
            {items.map(({ label, href }) => (
              <a key={href} href={href} className={linkClassName}>
                {label}
              </a>
            ))}
          </nav>
        )}

        {items.length === 1 && (
          <nav aria-label="Navigasi utama" className="md:hidden">
            <a href={items[0].href} className={linkClassName}>
              {items[0].label}
            </a>
          </nav>
        )}

        {hasMobileMenu && (
          <button
            type="button"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((open) => !open)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-md border border-slate-600 text-white hover:border-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
          >
            <span aria-hidden="true" className="h-0.5 w-5 bg-current" />
            <span aria-hidden="true" className="h-0.5 w-5 bg-current" />
            <span aria-hidden="true" className="h-0.5 w-5 bg-current" />
          </button>
        )}
      </div>

      {hasMobileMenu && (
        <nav
          id={panelId}
          aria-label="Navigasi mobile"
          className={isOpen ? 'border-t border-slate-800 px-6 py-4 sm:px-10 md:hidden' : 'hidden'}
        >
          <div className="flex flex-col gap-4">
            {items.map(({ label, href }) => (
              <a key={href} href={href} className={linkClassName} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
