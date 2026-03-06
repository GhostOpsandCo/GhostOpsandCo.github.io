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

          <p className="text-lg sm:text-xl text-white/60 font-medium tracking-tight mb-6">
            Strategic Partnerships and Revenue Operator
          </p>

          <p className="text-base sm:text-lg text-white/40 max-w-[620px] leading-relaxed">
            I build partnership-led growth engines that drive revenue, activation,
            and durable market momentum.
          </p>
        </section>

        {/* Professional Summary */}
        <section className="w-full max-w-[680px] mb-16 sm:mb-20">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-8 sm:px-10 sm:py-10">
            <p className="text-base sm:text-lg text-white/70 leading-[1.75]">
              Growth and revenue operator with experience driving $20M+ primary
              launch revenue and sustaining $100M+ secondary trading volume across
              AI and crypto. I own partnerships and distribution end-to-end,
              translating relationships into pipeline, liquidity, and revenue. I
              thrive in fast-moving environments where execution and outcomes
              matter.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="flex flex-col items-center text-center">
          <p className="text-base sm:text-lg text-white/50 mb-8 max-w-[520px] leading-relaxed">
            If you are building and need growth, I can help. Let&apos;s talk.
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
