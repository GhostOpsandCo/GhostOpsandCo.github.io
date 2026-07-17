import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-dark min-h-screen flex items-center justify-center px-6 py-20 sm:py-28">
      <main className="w-full max-w-[980px] flex flex-col items-center">
        {/* Hero */}
        <section className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="relative mb-8">
            <Image
              src="/headshot.jpg"
              alt="Elijah Paul"
              width={140}
              height={140}
              priority
              className="rounded-2xl border border-white/10 object-cover"
              style={{ width: 140, height: 140 }}
            />
          </div>

          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white leading-none mb-4">
            Elijah Paul
          </h1>

          <p className="text-lg sm:text-xl text-white/65 font-medium tracking-tight mb-6">
            AI Solutions Architect &amp; Product Builder
          </p>

          <p className="text-xl sm:text-2xl text-white/90 max-w-[720px] leading-relaxed font-medium">
            I turn customer problems into working AI and financial products.
          </p>
        </section>

        {/* Professional Summary */}
        <section className="w-full max-w-[760px] mb-16 sm:mb-20">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-8 py-8 sm:px-10 sm:py-10">
            <div className="space-y-6 text-base sm:text-lg text-white/70 leading-[1.75]">
              <p>
                I work across crypto, fintech, and AI to map complex workflows, uncover product and
                operational bottlenecks, and build practical solutions teams can test and bring to market.
                My work spans product strategy, systems architecture, API integrations, agentic workflows,
                and human-in-the-loop controls.
              </p>

              <p>
                Most recently at Gate AI, I designed and built Treasury Router, a governed advisor workflow
                that identifies idle capital, matches it to approved products, prepares client and operations
                packets, and uses x402 for agent-to-agent access. I also audited Gate Router across the
                product experience, documentation, customer journey, and positioning, turning enterprise
                feedback into clearer product priorities.
              </p>

              <p className="border-t border-white/[0.07] pt-6 text-sm sm:text-base text-white/50">
                $20M+ in launch revenue &middot; $100M+ in ecosystem and trading volume &middot; Founder of a
                Web3 company that reached a $50M venture-backed valuation
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="flex flex-col items-center text-center">
          <p className="text-base sm:text-lg text-white/50 mb-8 max-w-[520px] leading-relaxed">
            Building AI-native finance or crypto infrastructure? I can help turn the workflow into a
            working product.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:elijah@elijahpaul.io"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-sm font-medium tracking-tight hover:bg-white/90 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/elijahpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/15 text-white/80 text-sm font-medium tracking-tight hover:bg-white/[0.06] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <p className="mt-16 text-sm sm:text-base text-white/30 max-w-[600px] text-center leading-relaxed">
          God calls us to serve others, and I strive to follow that calling in business and life.
        </p>

        {/* Footer */}
        <footer className="mt-20 sm:mt-28 text-center">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Elijah Paul
          </p>
        </footer>
      </main>
    </div>
  );
}
