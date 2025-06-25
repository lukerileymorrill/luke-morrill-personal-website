import aws_image from "@/assets/aws_image.png"

export default function AwsCloud() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 px-4 pt-20 pb-16">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img
          src={aws_image}
          alt="AWS Cloud Services"
          className="w-full h-56 object-contain bg-white rounded-md mb-8 mt-4"
        />
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-8 text-center">AWS Cloud Services</h1>
        <article className="text-white text-lg md:text-xl space-y-6 text-left bg-white/5 p-8 rounded-xl shadow-lg">
          <p>
            When I joined my current company, several core services were already running in AWS—including ECS, EC2, RDS, and S3. As part of a small and agile development team, I quickly found myself needing to troubleshoot issues and make updates to our cloud infrastructure. Although I had no prior experience with AWS, I steadily developed the skills to work confidently across these services.
          </p>
          <p>
            In my role as a backend developer, I was responsible for monitoring and maintaining our backend services hosted in EC2, as well as managing containerized services running in ECS. This often required diagnosing and resolving compatibility issues between our application and the underlying AWS infrastructure.
          </p>
          <p>
            Beyond monitoring, I implemented multiple AWS Lambda functions to support application features and automation tasks. I also contributed to a biweekly security and monitoring report to ensure our systems remained secure and compliant. Through hands-on experience, I built a solid foundation in AWS and became a key contributor to the ongoing stability and scalability of our cloud-based infrastructure.
          </p>
        </article>
      </div>
    </section>
  )
} 
