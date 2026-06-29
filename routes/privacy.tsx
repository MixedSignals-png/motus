import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Motus Research" },
      { name: "description", content: "Privacy Policy for Motus Research AI chat platform." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_295/0.15)] blur-[140px]" />

      <header className="relative z-20 mx-auto flex max-w-4xl items-center gap-4 px-6 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </header>

      <article className="relative z-10 mx-auto max-w-4xl px-6 pb-24">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated: June 30, 2025</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">1. Information We Collect</h2>
            <p>When you use Motus Research, we may collect:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong className="text-zinc-300">Account information:</strong> email address and display name when you create an account.</li>
              <li><strong className="text-zinc-300">Chat data:</strong> messages you send and receive within the platform, stored to maintain your conversation history.</li>
              <li><strong className="text-zinc-300">Usage data:</strong> pages visited, features used, timestamps, and device/browser type.</li>
              <li><strong className="text-zinc-300">Bot imports:</strong> Chai bot links or IDs you provide for importing characters.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">2. How We Use Your Information</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Provide and improve the Motus Research platform.</li>
              <li>Maintain your conversation history and bot configurations.</li>
              <li>Analyze usage patterns to enhance performance and features.</li>
              <li>Communicate important updates about the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">3. Data Storage & Security</h2>
            <p>Your data is stored on secure servers. We use industry-standard encryption for data in transit and at rest. Chat conversations are stored privately and are only accessible to your account.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data only in these cases:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>With service providers who help operate the platform (hosting, analytics).</li>
              <li>When required by law or to protect our legal rights.</li>
              <li>With your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">5. Your Rights</h2>
            <p>You may request to access, correct, or delete your personal data at any time by contacting us. You can also delete your account, which removes all associated data from our systems.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">6. Cookies</h2>
            <p>We use essential cookies for authentication and session management. We may use analytics cookies to understand usage patterns. You can disable non-essential cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">7. Age Requirement</h2>
            <p>Motus Research is intended for users aged 18 and older. We do not knowingly collect information from anyone under 18.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">8. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">9. Contact</h2>
            <p>Questions about this policy? Reach out via our Discord or email us at <span className="text-[oklch(0.75_0.25_300)]">support@motus-research.xyz</span>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
