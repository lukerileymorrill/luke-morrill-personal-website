export default function Contact() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 text-center px-4">
      <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 mt-8">Contact Me</h1>
      <p className="text-xl md:text-2xl text-white mb-8 max-w-xl">
        Connect with me on any of the platforms below:
      </p>
      <div className="flex flex-col gap-6 w-full max-w-md items-center">
        <a
          href="https://www.linkedin.com/in/luke-morrill-bb0027193/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-8 py-4 rounded-md bg-black text-black font-semibold text-lg shadow hover:bg-blue-800 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:lukemorrill@icloud.com"
          className="w-full px-8 py-4 rounded-md bg-gray-200 text-black font-semibold text-lg shadow hover:bg-gray-300 transition"
        >
          Email
        </a>
        <a
          href="https://github.com/lukerileymorrill"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-8 py-4 rounded-md bg-black text-white font-semibold text-lg shadow hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
} 
