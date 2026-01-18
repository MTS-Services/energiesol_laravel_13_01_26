import { useState } from "react"
import { Menu, X, Link, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service" },
  { label: "Advantages", href: "/advantages" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Our Products", href: "/products" },
]
const currentPath = window.location.pathname

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-nav-bg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <a href="/" className="flex items-center gap-2">
            <img src="/frontend/logo.png" alt="" />

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-md font-medium transition-colors ${isActive
                      ? "text-brand-blue"
                      : "text-nav-text hover:text-nav-text-hover"
                    }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>


          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size={"lg"} className="bg-brand-blue hover:bg-brand-hover text-brand-foreground rounded-full pl-2 pr-4 text-md">
              <span className="bg-white rounded-full p-1">
                <ArrowRight className="text-black" />
              </span>
              Configurator
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-nav-text" />
            ) : (
              <Menu className="h-6 w-6 text-nav-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-nav-border">
            <nav className="flex flex-col gap-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${isActive
                        ? "text-brand"
                        : "text-nav-text hover:text-nav-text-hover"
                        }`}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </nav>
              <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full w-full mt-2">
                <span className="bg-white rounded-full p-1">
                  <ArrowRight className="text-black" />
                </span>
                Configurator
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
