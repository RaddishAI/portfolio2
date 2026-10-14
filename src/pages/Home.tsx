import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="container py-5">
      <header className="min-vh-100 d-flex flex-column justify-content-center py-5 mb-5">
        <p className="text-uppercase text-secondary fw-semibold mb-2">
          Welcome to my portfolio
        </p>

        <h1 className="display-4 fw-bold">
          Hey, I'm Petter.
          <span className="d-block">But you can call me Raddish.</span>
        </h1>

        <p className="lead text-secondary mt-3">
          Front-end developer with a background in finance, passionate about
          building thoughtful digital experiences.
        </p>
      </header>

      <section aria-labelledby="projects-heading">
        <div className="mb-5">
          <p className="text-uppercase text-secondary fw-semibold mb-2">
            Selected work
          </p>

          <h2 id="projects-heading" className="display-5 fw-bold mb-3">
            Projects I've built.
          </h2>

          <p className="lead text-secondary">
            A selection of projects showcasing my skills, creativity, and
            development journey.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.slug}>
              <article className="card h-100">
                {project.image && (
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`Preview of ${project.title}`}
                    loading="lazy"
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5">{project.title}</h3>

                  <p className="card-text">
                    {project.description || "Project description coming soon."}
                  </p>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="btn btn-primary mt-auto align-self-start"
                    aria-label={`Read more about ${project.title}`}
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
