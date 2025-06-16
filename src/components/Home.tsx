import terryMethod from "../assets/terry-method.png"

export default function Home() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 text-center px-4">
      <img src={terryMethod} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-6" />
      <h1 className="text-6xl md:text-7xl text-white font-extrabold mb-6 mt-8">Hi, I'm Luke Morrill</h1>
      <p className="text-2xl md:text-3xl text-white mb-10">
       I love solving complex problems and learning new skills.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <a
          href="#projects"
          className="px-8 py-4 rounded-md bg-black text-white font-semibold text-lg shadow hover:bg-gray-900 transition flex items-center justify-center gap-2"
        >
          View My Work
          <span className="ml-2">→</span>
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-md border border-gray-300 bg-white text-black font-semibold text-lg shadow hover:bg-gray-100 transition flex items-center justify-center"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
} 
