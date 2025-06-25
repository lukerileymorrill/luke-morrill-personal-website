import iterative_image from "@/assets/iterative.png"

export default function IterativeDevelopment() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 px-4 pt-20 pb-16">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img
          src={iterative_image}
          alt="Iterative Development"
          className="w-full h-56 object-contain bg-white rounded-md mb-8 mt-4"
        />
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-8 text-center">Iterative Development</h1>
        <article className="text-white text-lg md:text-xl space-y-6 text-left bg-white/5 p-8 rounded-xl shadow-lg">
          <p>
            One of the key practices I've relied on throughout my work is iterative development—shipping small, functional pieces first and improving them over time. Especially in a fast-moving startup environment, this approach allowed me to deliver value quickly while staying responsive to feedback and changing requirements.
          </p>
          <p>
            At first this was a bit of a struggle for me, as I always wanted to have something that I was fully satisfied with, yet I had to learn to let go of that and just get something out there.
          </p>
          <p>
            Rather than aiming for perfect solutions upfront, I prioritized getting a working version into the hands of users or teammates early. For example, when building new API endpoints or integrating third-party services, I would first implement the core functionality with minimal assumptions, then test it end-to-end. From there, I would iterate—adding error handling, edge case support, performance improvements, and more robust security once the basic version was verified and in use.
          </p>
          <p>
            This cycle of building, testing, and refining helped reduce the risk of large rewrites and kept development aligned with real-world usage. It also improved collaboration across the team, since frontend developers and stakeholders could give feedback early in the process.
          </p>
          <p>
            Using this approach, I've consistently been able to balance speed and quality—getting features into production quickly, while still meeting long-term reliability and maintainability goals.
          </p>
        </article>
      </div>
    </section>
  )
} 
