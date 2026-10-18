import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "About Me | Raddish";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content =
        "Learn about Raddish, a front-end developer with a background in finance, technology, and problem-solving.";
    }
  }, []);

  return (
    <main className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <header className="mb-5">
          <p className="text-uppercase fw-semibold mb-2">A little about me</p>

          <h1 className="display-5 fw-bold mb-4">About Me.</h1>

          <p className="lead">
            Hey! I'm Petter Rønning, also known as Raddish. I'm a front-end
            developer based in Trondheim, Norway, with a background in finance
            and a strong interest in technology, design, and problem-solving.
          </p>
        </header>

        <section className="mb-5" aria-labelledby="background-heading">
          <h2 id="background-heading" className="h3 fw-bold mb-3">
            My Background
          </h2>

          <p>
            Since 2019, I've worked at DNB, where I've gained extensive
            experience in financial advisory, customer communication, and
            finding solutions to complex problems. My professional background
            has taught me the importance of understanding people's needs and
            delivering thoughtful, practical solutions.
          </p>

          <p>
            My interest in technology led me to study front-end development at
            Noroff, where I've worked with everything from responsive websites
            to interactive applications and API integrations.
          </p>
        </section>

        <section className="mb-5" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="h3 fw-bold mb-3">
            Technologies & Skills
          </h2>

          <p>
            Through my studies and personal projects, I've gained practical
            experience with:
          </p>

          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>React and TypeScript</li>
            <li>Next.js and Vite</li>
            <li>Bootstrap, Tailwind CSS, and Sass</li>
            <li>REST APIs and asynchronous data handling</li>
            <li>Git, GitHub, and deployment with Netlify</li>
            <li>Responsive design and accessibility</li>
          </ul>
        </section>

        <section className="mb-5" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="h3 fw-bold mb-3">
            Beyond the Code
          </h2>

          <p>
            I'm naturally curious and enjoy exploring new technologies, creative
            ideas, and ways to improve how things work. My earlier studies in IT
            operations and information security at NTNU also contributed to my
            technical interests.
          </p>

          <p>
            What motivates me most is combining creativity with structured
            problem-solving to create meaningful digital experiences.
          </p>
        </section>

        <section aria-labelledby="connect-heading">
          <h2 id="connect-heading" className="h3 fw-bold mb-3">
            Let's Connect
          </h2>

          <p>
            Interested in collaborating, discussing technology, or getting to
            know me better?
          </p>

          <Link to="/contact" className="btn btn-primary mt-2">
            Get in touch →
          </Link>
        </section>
      </div>
    </main>
  );
}
