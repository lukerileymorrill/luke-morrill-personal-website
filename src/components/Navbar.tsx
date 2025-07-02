import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Home as HomeIcon, Menu as MenuIcon, X as XIcon } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (page: string) => {
    setMobileOpen(false)
    onNavigate && onNavigate(page)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-black">
      <div className="mx-auto flex h-20 items-center justify-between px-6 w-full">
        <a
          href="#"
          className="flex items-center text-4xl font-extrabold tracking-tight hover:underline"
          onClick={e => {
            e.preventDefault();
            handleNav('home');
          }}
        >
          <HomeIcon className="w-10 h-10" />
        </a>
        {/* Desktop Nav */}
        <div className="hidden sm:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-12">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="text-lg font-semibold hover:underline cursor-pointer"
                  onClick={e => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="text-lg font-semibold hover:underline cursor-pointer"
                  onClick={e => {
                    e.preventDefault();
                    handleNav('projects');
                  }}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="text-lg font-semibold hover:underline cursor-pointer"
                  onClick={e => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Hamburger Icon */}
        <button
          className="flex sm:hidden items-center justify-center p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden fixed top-20 left-0 w-full bg-black z-50 flex flex-col items-center py-8 space-y-6 border-b border-gray-800">
          <a
            href="#"
            className="text-2xl font-bold text-white hover:underline"
            onClick={e => { e.preventDefault(); handleNav('about'); }}
          >
            About
          </a>
          <a
            href="#"
            className="text-2xl font-bold text-white hover:underline"
            onClick={e => { e.preventDefault(); handleNav('projects'); }}
          >
            Projects
          </a>
          <a
            href="#"
            className="text-2xl font-bold text-white hover:underline"
            onClick={e => { e.preventDefault(); handleNav('contact'); }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
