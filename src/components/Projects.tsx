import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "API Development",
    description: "Developed complex RESTFUL APIs for both internal and external use.",
  },
  {
    title: "AWS Cloud Services",
    description: "Developed and deployed scalable and secure AWS services to support our application.",
  },
  {
    title: "3rd Party API Integrations",
    description: "Integrated third-party APIs to enhance our application's functionality.",
  },
  {
    title: "LLM Integrations",
    description: "Integrated LLM APIs to enhance our application's functionality.",
  },
  {
    title: "Database Management",
    description: "Managed and optimized our database to ensure efficient data storage and retrieval.",
  },
  {
    title: "Iterative Development",
    description: "Developed and deployed features iteratively to ensure timely delivery and continuous improvement.",
  },
]

interface ProjectsProps {
  onReadStory?: (idx: number) => void;
}

export default function Projects({ onReadStory }: ProjectsProps) {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 text-center px-4 pt-40 pb-16">
      <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-4">Professional Experiences</h1>
      <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl">
        Here are six key learnings from my current role that have significantly contributed to my professional growth. Click on each card to read the detailed writeup.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <Card key={idx} className="flex flex-col h-full bg-white/90 dark:bg-zinc-900/80 text-black dark:text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white mb-2">{project.title}</CardTitle>
              <CardDescription className="text-lg text-gray-700 dark:text-gray-300 mb-4">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex justify-center">
              <Button
                variant="default"
                className="text-base text-white font-semibold px-6 py-2"
                onClick={() => onReadStory && onReadStory(idx)}
              >
                Read Full Story <span className="ml-2">→</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 
