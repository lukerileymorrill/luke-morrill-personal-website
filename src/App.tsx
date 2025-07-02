import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
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

function AppRoutes() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar onNavigate={page => {
        if (page === "home") navigate("/")
        else if (page === "about") navigate("/about")
        else if (page === "projects") navigate("/projects")
        else if (page === "contact") navigate("/contact")
      }} />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Routes>
          <Route path="/" element={<Home onNavigate={page => {
            if (page === "projects") navigate("/projects")
            else if (page === "contact") navigate("/contact")
          }} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects onReadStory={idx => {
            const paths = [
              "/projects/api-dev",
              "/projects/aws-cloud",
              "/projects/third-party-api",
              "/projects/llm-integration",
              "/projects/database-management",
              "/projects/iterative-development",
            ]
            navigate(paths[idx])
          }} />} />
          <Route path="/projects/api-dev" element={<ApiDev />} />
          <Route path="/projects/aws-cloud" element={<AwsCloud />} />
          <Route path="/projects/third-party-api" element={<ThirdPartyApi />} />
          <Route path="/projects/llm-integration" element={<LlmIntegration />} />
          <Route path="/projects/database-management" element={<DatabaseManagement />} />
          <Route path="/projects/iterative-development" element={<IterativeDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full flex flex-col bg-white">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App 
