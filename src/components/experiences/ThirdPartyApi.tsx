import third_party_image from "@/assets/third_party.jpg"

export default function ThirdPartyApi() {
  return (
    <section className="flex flex-1 w-full min-w-full w-screen flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gradient-to-b from-black to-purple-900 px-4 pt-20 pb-16">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img
          src={third_party_image}
          alt="3rd Party API Integrations"
          className="w-full h-56 object-contain bg-white rounded-md mb-8 mt-4"
        />
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-8 text-center">3rd Party API Integrations</h1>
        <article className="text-white text-lg md:text-xl space-y-6 text-left bg-white/5 p-8 rounded-xl shadow-lg">
          <p>
            As part of building our platform, we integrated several third-party tools to enhance functionality and improve the user experience. One of the most significant integrations was Stripe, which we used to manage payments and subscriptions.
          </p>
          <p>
            In my role as a backend developer, I implemented Stripe webhooks to handle subscription events and built out the logic to support multiple subscription tiers. I connected Stripe's products and plans with our internal user and billing models, allowing us to track subscription status, upgrades, downgrades, and cancellations. This integration enabled us to support a flexible two-tier pricing model with custom backend logic for managing user access and billing behavior.
          </p>
          <p>
            Beyond Stripe, we worked with other tool such as Youtube and Slack. Another major integration involved working with large language models (LLMs) to build AI-powered features for our platform. I helped design and implement a service layer that interfaced with the LLM provider, allowing us to pass both system-level and user-generated instructions. This provided users with highly customizable content generation capabilities. Additionally, I helped develop logging infrastructure to monitor input/output data, supporting observability and future model tuning.
          </p>
          <p>
            These integrations required not only technical implementation but also thoughtful design to ensure long-term maintainability, scalability, and user control.
          </p>
        </article>
      </div>
    </section>
  )
} 
