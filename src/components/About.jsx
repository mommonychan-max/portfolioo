const skills = [
  "React",
  "Django",
  "Flask",
  "Python",
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL Server",
  "PostgreSQL",
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <h2 className="font-display text-3xl text-bone md:text-4xl">About</h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-smoke">
            I like understanding how things work underneath, not just how they
            look. I've built the same kind of project across different stacks —
            Django, Flask, React — mostly to see how each one handles the same
            problem differently, from the database up.
          </p>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-smoke">
            I spend more time than most people would in a schema or a query
            plan, and I usually learn a project best by pulling it apart and
            rebuilding it myself.
          </p>
        </div>

        <div>
          <p className="font-body text-sm text-blood">Tools I reach for</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border border-line px-4 py-2 font-body text-sm text-bone"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
