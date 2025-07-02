export default function About() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-b from-black to-purple-900 text-center px-2 sm:px-4 pb-16">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-6">About Me</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl">
          I'm Luke Morrill, a passionate software engineer with a love for building impactful products and solving complex problems. My experience spans API development, cloud infrastructure, database management, and integrating cutting-edge AI technologies. I thrive in collaborative environments and enjoy mentoring others, continuously learning, and delivering high-quality solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-4xl">
          <div className="flex-1 bg-white/10 rounded-lg p-6 shadow text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Skills</h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-white/90 space-y-2">
              <li>TypeScript, JavaScript, Python</li>
              <li>React, Next.js, Vite</li>
              <li>Node.js, Express</li>
              <li>AWS (Lambda, S3, API Gateway, CloudFormation)</li>
              <li>PostgreSQL, MongoDB</li>
              <li>RESTful API & 3rd Party Integrations</li>
              <li>LLM & AI API Integrations</li>
              <li>Agile & Iterative Development</li>
            </ul>
          </div>
          <div className="flex-1 bg-white/10 rounded-lg p-6 shadow text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Interests</h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-white/90 space-y-2">
              <li>AI and Machine Learning</li>
              <li>Open Source Projects</li>
              <li>Mentoring and Teaching</li>
              <li>Music and Audio Engineering</li>
              <li>Hiking and Outdoor Adventures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 
