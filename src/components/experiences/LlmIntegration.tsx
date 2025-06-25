import llm_image from "@/assets/llm_image.jpeg"

export default function LlmIntegration() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 px-4 pt-20 pb-16">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img
          src={llm_image}
          alt="LLM Integrations"
          className="w-full h-56 object-contain bg-white rounded-md mb-8 mt-4"
        />
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-8 text-center">LLM Integrations</h1>
        <article className="text-white text-lg md:text-xl space-y-6 text-left bg-white/5 p-8 rounded-xl shadow-lg">
          <p>
            As part of our AI initiatives, we built infrastructure to integrate large language models (LLMs) into our platform in a way that was both powerful and user-customizable. In my role as a backend developer, I helped create a service that connected our application to LLM providers, enabling dynamic output generation based on user and system input.
          </p>
          <p>
            A key focus of this work was customization. We developed fine-tuned system instructions tailored specifically to our use case and iterated on them continuously to improve quality. In parallel, we built features that allowed users to define their own custom instructions and inputs, enabling a highly flexible generation process that adapted to individual workflows.
          </p>
          <p>
            To support this functionality, we also implemented robust input/output logging, giving us visibility into how the models were used and how they performed across different scenarios. This data proved essential for monitoring quality, debugging edge cases, and planning future enhancements.
          </p>
          <p>
            Together, these efforts resulted in a highly adaptable and user-friendly AI tool that leveraged LLMs in a production environment.
          </p>
        </article>
      </div>
    </section>
  )
} 
