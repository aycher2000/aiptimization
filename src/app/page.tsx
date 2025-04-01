import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text px-6 py-12 font-sans">
      <header className="text-center space-y-4 mb-16">
        <div className="inline-block animate-float">
          <Image
            src="/logo.png"
            alt="Aiptimization logo"
            width={200}
            height={200}
            className="mx-auto rounded-xl shadow-neon animate-pulse-slow"
          />
        </div>
        <h1 className="text-6xl font-display tracking-widest text-accent drop-shadow-md">
          Aiptimization
        </h1>
        <p className="text-lg text-accentDark italic font-medium">
          Aiptimization... it will find you.
        </p>
        <a
          href="#get-started"
          className="inline-block mt-6 px-6 py-3 bg-accent text-bg font-bold rounded-md shadow-neon hover:scale-105 transition-transform"
        >
          Get Started
        </a>
      </header>

      <section className="max-w-4xl mx-auto space-y-10">
        <div className="bg-card border border-border p-6 rounded-lg shadow-deep">
          <h2 className="text-3xl font-bold text-accent mb-3">What is Aiptimization?</h2>
          <p className="leading-relaxed">
            Aiptimization is the process of making your content, site, and digital presence AI-discoverable and contextually quotable in tools like ChatGPT, Claude, Perplexity, and more. It goes beyond traditional SEO and focuses on being visible in AI conversations.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg shadow-deep">
          <h2 className="text-3xl font-bold text-accent mb-3">Why It Matters</h2>
          <ul className="space-y-3">
            <li><strong>The Prompt Era:</strong> People are prompting, not Googling. Future traffic comes through AI recommendations.</li>
            <li><strong>AI Readability:</strong> Your site needs to be AI-readable, not just SEO-ready. Structure matters more than keywords.</li>
            <li><strong>Context is King:</strong> AI needs clean context, not keyword stuffing. Clear semantic structure wins.</li>
          </ul>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg shadow-deep">
          <h2 className="text-3xl font-bold text-accent mb-4">The Core Pillars of Aiptimization</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>AI-Readable Content:</strong> Semantic clarity, structured text, bullet points.</li>
            <li><strong>Smart Metadata:</strong> Schema, OpenGraph, JSON-LD, rich semantic tags.</li>
            <li><strong>Agent Integration Readiness:</strong> Make content usable by personal AI agents.</li>
            <li><strong>Proactive Context Engineering:</strong> Anticipate how AI interprets and quotes your content.</li>
            <li><strong>Decentralized Visibility:</strong> Optimize for ChatGPT, Claude, Perplexity—not just Google.</li>
          </ol>
        </div>

        <div id="get-started" className="bg-card border border-border p-6 rounded-lg shadow-neon">
          <h2 className="text-3xl font-bold text-accent mb-2">Join the Movement</h2>
          <p className="mb-4 text-sm">Be part of the AIP revolution. Get updates, tools, and resources.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-black"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-bg font-semibold rounded-md hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        <footer className="text-center text-sm text-zinc-500 pt-12">
          <p>© 2025 Aiptimization.com | Coined by Aycher & Cypher</p>
          <a
            href="https://github.com/aycher2000/aiptimization"
            target="_blank"
            className="underline hover:text-accent"
          >
            GitHub Repo
          </a>
        </footer>
      </section>
    </main>
  );
}