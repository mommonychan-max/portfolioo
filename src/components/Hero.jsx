import portrait from "../asset/image.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line pt-32 pb-24 md:pt-44 md:pb-32"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-[420px] bg-blood-dim/20"
        style={{ clipPath: "polygon(60% 0, 100% 0, 40% 100%, 0 100%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_460px] md:px-10">
        <div>
          <div className="mb-4 h-1 w-12 bg-blood" />
          <p className="font-body text-sm text-blood">
            Frontend developer, based in Phnom Penh
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-bone md:text-6xl">
            I build interfaces that hold up under real use.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-smoke md:text-lg">
            Five years shipping web products for startups and design studios. I
            care about speed, accessibility, and details most people won't
            notice until they're missing.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="bg-blood px-6 py-3 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="font-body text-sm text-bone underline decoration-line underline-offset-4 hover:decoration-blood"
            >
              Get in touch
            </a>
          </div>
        </div>

        <img
          src={portrait}
          alt="Portrait of Monychan Mom"
          className="h-[420px] w-full border border-line object-cover md:h-[500px] md:w-[460px]"
        />
      </div>
    </section>
  );
}
