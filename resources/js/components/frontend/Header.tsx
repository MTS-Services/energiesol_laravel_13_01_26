"use client"

import { useState } from "react"
import { Menu, X, Sun } from "lucide-react"
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-nav-bg border-b border-nav-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src="/frontend/logo.png" alt="" />

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-nav-text hover:text-nav-text-hover transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-6">
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-nav-text hover:text-nav-text-hover transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full w-full mt-2">
                Configurator
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
