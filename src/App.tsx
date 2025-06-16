import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Home from "@/components/Home"
import Contact from "@/components/Contact"
import Projects from "@/components/Projects"

function App() {
  const [page, setPage] = useState("home")

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full flex flex-col bg-white">
        <Navbar onNavigate={setPage} />
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {page === "home" && <Home />}
          {page === "projects" && <Projects />}
          {page === "contact" && <Contact />}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App 
