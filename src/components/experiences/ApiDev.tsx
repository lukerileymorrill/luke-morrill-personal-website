import api_image from "@/assets/api_image.png"

export default function ApiDev() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 px-4 pt-20 pb-16">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img
          src={api_image}
          alt="API Development"
          className="w-full h-56 object-contain bg-white rounded-md mb-8 mt-4"
        />
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-8 text-center">API Development</h1>
        <article className="text-white text-lg md:text-xl space-y-6 text-left bg-white/5 p-8 rounded-xl shadow-lg">
          <p>
            When I joined my current company, my previous experience had been limited to small programs built during internships, with little exposure to API development. However, I quickly transitioned into a fast-paced, iterative cycle of API design and implementation.
          </p>
          <p>
            As a backend developer using Ruby on Rails, my primary responsibility was to design and deliver new features through APIs. I worked closely with frontend developers to ensure smooth integration and timely delivery of features to stakeholders. This required a strong focus on both technical execution and team collaboration.
          </p>
          <p>
            Over time, I developed both hard and soft skills essential to the role. I learned how to clearly communicate technical ideas and challenges with the team—whether during planning, delivering mock APIs, or iterating on feedback. At the same time, I became proficient at building APIs efficiently without compromising quality.
          </p>
          <p>
            Beyond writing API endpoints, I also took responsibility for keeping our API documentation current, maintaining an admin interface for managing backend records, and addressing key security concerns. Through this experience, I gained a strong, practical understanding of designing and maintaining RESTful APIs in a real-world production environment.
          </p>
        </article>
      </div>
    </section>
  )
} 
