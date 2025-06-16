import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-black">
      <div className="mx-auto flex h-20 items-center justify-between px-6 w-full">
        <a
          href="#"
          className="text-4xl font-extrabold tracking-tight hover:underline"
          onClick={e => {
            e.preventDefault();
            onNavigate && onNavigate('home');
          }}
        >
          Home
        </a>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-12">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-semibold hover:underline" href="/about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-semibold hover:underline" href="/#projects">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contact"
                className="text-lg font-semibold hover:underline cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  onNavigate && onNavigate('contact');
                }}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
