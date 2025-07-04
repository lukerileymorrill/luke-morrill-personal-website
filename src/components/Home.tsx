import terryMethod from "../assets/terry-method.png"

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-b from-black to-purple-900 text-center px-2 sm:px-4">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <img src={terryMethod} alt="Profile" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-6" />
        <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-extrabold mb-6 mt-8">Hi, I'm Luke Morrill</h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-white mb-10">
          I'm a backend engineer with 2 years of experience building scalable solutions using AI-driven approaches. I'm passionate about leveraging AI to solve complex challenges and deliver innovative code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            type="button"
            className="px-8 py-4 rounded-md font-semibold text-lg shadow transition flex items-center justify-center gap-2 border border-gray-700"
            style={{ backgroundColor: '#000000', color: '#ffffff' }}
            onClick={() => onNavigate && onNavigate('projects')}
          >
            View My Work
            <span className="ml-2">→</span>
          </button>
          <button
            type="button"
            className="px-8 py-4 rounded-md font-semibold text-lg shadow transition flex items-center justify-center border border-gray-700"
            style={{ backgroundColor: '#000000', color: '#ffffff' }}
            onClick={() => onNavigate && onNavigate('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
} 
