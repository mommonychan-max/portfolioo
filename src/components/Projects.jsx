const projects = [
  {
    number: "01",
    name: "Clothing Store",
    description:
      "A static storefront for a clothing shop, built from scratch with plain HTML and CSS to practice layout, typography, and responsive design fundamentals.",
    stack: "HTML, CSS",
  },
  {
    number: "02",
    name: "Computer Store Manager",
    description:
      "A management system for a computer store, handling inventory, sales records, and stock tracking through a Django backend.",
    stack: "Django, Python, PostgreSQL",
  },
  {
    number: "03",
    name: "Mart Management System",
    description:
      "A management system for a mart, covering products, stock levels, and day-to-day operations through a React frontend.",
    stack: "React, JavaScript",
  },
  {
    number: "04",
    name: "Movie Ticket Booking",
    description:
      "A movie theater ticket booking system built with Flask, handling showtimes, seat selection, and bookings.",
    stack: "Flask, Python",
  },
  {
    number: "05",
    name: "Store Database Analysis",
    description:
      "A database originally designed in Django, analyzed and restructured from scratch to study the schema and improve its design.",
    stack: "SQL, Django",
  },
]

export default function Projects() {
  return (
    <section id="work" className="border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="font-display text-3xl text-bone md:text-4xl">
          Selected work
        </h2>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {projects.map((project) => (
            <a
              key={project.number}
              href="#"
              className="group grid grid-cols-[auto_1fr] gap-6 py-10 transition-colors hover:bg-surface md:grid-cols-[80px_1fr_auto]"
            >
              <span className="font-display text-sm text-blood">
                {project.number}
              </span>

              <div>
                <h3 className="font-display text-2xl text-bone md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-smoke">
                  {project.description}
                </p>
              </div>

              <span className="col-span-2 mt-4 font-body text-xs text-smoke md:col-span-1 md:mt-0 md:self-center md:text-right">
                {project.stack}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
