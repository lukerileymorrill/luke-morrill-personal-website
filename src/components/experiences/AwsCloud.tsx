export default function AwsCloud() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 text-center px-4 pt-20 pb-16">
      <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6">AWS Cloud Services</h1>
      <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl">
        I architected, developed, and deployed scalable AWS cloud services to support our growing application needs. My work included designing serverless solutions, automating infrastructure, and ensuring security best practices.<br /><br />
        <strong>Key Contributions:</strong>
        <ul className="list-disc list-inside text-left text-lg text-white/90 my-6 mx-auto max-w-2xl">
          <li>Designed and deployed Lambda functions, API Gateway endpoints, and S3 storage solutions.</li>
          <li>Automated infrastructure provisioning using AWS CloudFormation and Terraform.</li>
          <li>Implemented monitoring and alerting with CloudWatch and SNS.</li>
          <li>Ensured security with IAM roles, policies, and VPC configurations.</li>
          <li>Optimized costs by leveraging serverless and auto-scaling resources.</li>
        </ul>
        <strong>Impact:</strong> <br />
        These cloud services enabled our team to deliver features faster, scale seamlessly, and maintain high availability and security.
      </p>
    </section>
  )
} 
