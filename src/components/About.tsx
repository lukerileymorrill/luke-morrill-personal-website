export default function About() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 text-center px-4 pt-20 pb-16">
      <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6">About Me</h1>
      <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
        I'm Luke Morrill, a passionate software engineer with a love for building impactful products and solving complex problems. My experience spans API development, cloud infrastructure, database management, and integrating cutting-edge AI technologies. I thrive in collaborative environments and learning from others, and delivering high-quality solutions.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-4xl">
        <div className="flex-1 bg-white/10 rounded-lg p-6 shadow text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
            <li>TypeScript, JavaScript, Python, Ruby </li>
            <li>React</li>
            <li>Ruby on Rails, Django</li>
            <li>AWS (Lambda, S3, S3, ECS, EC2, SES, etc...)</li>
            <li>PostgreSQL</li>
            <li>RESTful API Design</li>
            <li>LLM & AI API Integrations</li>
            <li>Agile & Iterative Development</li>
          </ul>
        </div>
        <div className="flex-1 bg-white/10 rounded-lg p-6 shadow text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Interests</h2>
          <p className="text-lg text-white/90">
            Outside of developing, I play guitar in a number of local bands, playing and recording across the DMV area and East Coast.
          </p>
        </div>
      </div>
    </section>
  )
} 
