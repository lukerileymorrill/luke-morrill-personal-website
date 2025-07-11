import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import api_image from "@/assets/api_image.png"
import aws_image from "@/assets/aws_image.png"
import llm_image from "@/assets/llm_image.jpeg"
import db_image from "@/assets/num3.png"
import iterative_image from "@/assets/iterative.png"
import third_party_image from "@/assets/third_party.jpg"

const projects = [
  {
    title: "API Development",
    image: api_image,
  },
  {
    title: "AWS Cloud Services",
    image: aws_image,
  },
  {
    title: "3rd Party API Integrations",
    image: third_party_image,
  },
  {
    title: "LLM Integrations",
    image: llm_image,
  },
  {
    title: "Database Management",
    image: db_image,
  },
  {
    title: "Iterative Development",
    image: iterative_image,
  },
]

interface ProjectsProps {
  onReadStory?: (idx: number) => void;
}

export default function Projects({ onReadStory }: ProjectsProps) {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-b from-black to-purple-900 text-center px-2 sm:px-4 pb-16">
      <div className="w-full max-w-screen-xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-4">Professional Experiences</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl">
          Here are six key learnings from my current role that have significantly contributed to my professional growth. Click on each card to read the detailed writeup.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col h-full bg-black/90 text-white shadow-lg">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                <img
                  src={project.image}
                  alt={project.title + " image"}
                  className="w-full h-40 object-contain bg-white rounded-md mb-4 mx-auto"
                />
              </CardHeader>
              <CardFooter className="mt-auto flex justify-center">
                <Button
                  variant="default"
                  className="text-base font-semibold px-6 py-2 hover:bg-purple-700"
                  style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
                  onClick={() => onReadStory && onReadStory(idx)}
                >
                  Read Full Story <span className="ml-2">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
