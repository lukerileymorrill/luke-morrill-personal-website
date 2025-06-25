import db_image from "@/assets/num3.png"

export default function DatabaseManagement() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 px-4 pt-20 pb-16">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img
          src={db_image}
          alt="Database Management"
          className="w-full h-56 object-contain bg-white rounded-md mb-8 mt-4"
        />
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-8 text-center">Database Management</h1>
        <article className="text-white text-lg md:text-xl space-y-6 text-left bg-white/5 p-8 rounded-xl shadow-lg">
          <p>
            As a member of the backend team, I was responsible for designing, creating, and maintaining our database schema. We followed Ruby on Rails best practices to ensure the structure remained scalable, maintainable, and easy to iterate on as the application evolved.
          </p>
          <p>
            Throughout the API development process, I frequently created new models and relationships to support feature requirements. I leveraged Rails' ActiveRecord ORM for most operations, while also writing raw SQL for more complex queries that required fine-tuned performance or precision.
          </p>
          <p>
            In addition to schema design, I helped monitor and manage our database infrastructure in AWS RDS. This included tracking storage usage, increasing capacity when necessary, and ensuring the database remained performant and reliable.
          </p>
          <p>
            I also supported efforts related to data security and recovery, helping to safeguard our users' information and ensure the integrity of our data systems. This experience strengthened my understanding of both day-to-day database operations and long-term data architecture strategy.
          </p>
        </article>
      </div>
    </section>
  )
} 
