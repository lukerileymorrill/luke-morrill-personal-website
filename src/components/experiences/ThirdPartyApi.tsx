export default function ThirdPartyApi() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 text-center px-4 pt-20 pb-16">
      <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6">3rd Party API Integrations</h1>
      <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl">
         <br />
        I integrated a variety of third-party APIs to extend our application's functionality and provide a seamless user experience. This included payment gateways, communication platforms, and analytics tools.<br /><br />
        <strong>Key Contributions:</strong>
        <ul className="list-disc list-inside text-left text-lg text-white/90 my-6 mx-auto max-w-2xl">
          <li>Integrated payment processing with Stripe and OpenAI APIs.</li>
          <li>Connected to tools like Slack and Sentry for real-time notifications and messaging.</li>
          <li>Ensured robust error handling and graceful degradation for all integrations.</li>
          <li>Maintained up-to-date documentation for all third-party connections.</li>
        </ul>
        <strong>Impact:</strong> <br />
        These integrations enhanced our product's capabilities, improved user engagement, and provided valuable business insights.
      </p>
    </section>
  )
} 
