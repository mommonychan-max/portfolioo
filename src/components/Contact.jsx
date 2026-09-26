export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="font-display text-3xl text-bone md:text-4xl">
          Let's work together.
        </h2>
        <p className="mt-4 max-w-md font-body text-base text-smoke">
          I'm open to freelance projects and full-time roles. The fastest way to
          reach me is email.
        </p>

        <a
          href="mailto:mommonychan@gmail.com"
          className="mt-8 inline-block border-b-2 border-blood pb-1 font-display text-2xl text-bone md:text-3xl"
        >
          mommonychan@gmail.com
        </a>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line pt-8 font-body text-sm text-smoke md:flex-row">
          <span>Mom Monychan</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/mommonychan-max"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              GitHub
            </a>  
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
