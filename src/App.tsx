import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Home from "@/components/Home"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Projects from "@/components/Projects"
import ApiDev from "@/components/experiences/ApiDev"
import AwsCloud from "@/components/experiences/AwsCloud"
import ThirdPartyApi from "@/components/experiences/ThirdPartyApi"
import LlmIntegration from "@/components/experiences/LlmIntegration"
import DatabaseManagement from "@/components/experiences/DatabaseManagement"
import IterativeDevelopment from "@/components/experiences/IterativeDevelopment"

function App() {
  const [page, setPage] = useState("home")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full flex flex-col bg-white">
        <Navbar onNavigate={p => { setPage(p); setSelectedProject(null); }} />
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {page === "home" && <Home onNavigate={p => { setPage(p); setSelectedProject(null); }} />}
          {page === "about" && <About />}
          {page === "projects" && selectedProject === null && (
            <Projects onReadStory={idx => setSelectedProject(idx)} />
          )}
          {page === "projects" && selectedProject === 0 && <ApiDev />}
          {page === "projects" && selectedProject === 1 && <AwsCloud />}
          {page === "projects" && selectedProject === 2 && <ThirdPartyApi />}
          {page === "projects" && selectedProject === 3 && <LlmIntegration />}
          {page === "projects" && selectedProject === 4 && <DatabaseManagement />}
          {page === "projects" && selectedProject === 5 && <IterativeDevelopment />}
          {page === "contact" && <Contact />}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App 
