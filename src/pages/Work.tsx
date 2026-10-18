import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <main className="container py-5">
      <header className="mb-5">
        <p className="text-uppercase text-secondary fw-semibold mb-2">
          Selected work
        </p>

        <h1 className="display-5 fw-bold mb-3">Projects I've built.</h1>

        <p className="lead text-secondary">
          A selection of projects showcasing my skills, creativity, and
          development journey.
        </p>
      </header>

      <section aria-label="Featured projects">
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.slug}>
              <article className="card h-100 shadow-sm border-secondary">
                {project.image && (
                  <img
                    src={project.image}
                    className="card-img-top object-fit-cover"
                    alt={project.imageCaption}
                    loading="lazy"
                    style={{ height: "220px" }}
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <p className="text-uppercase text-body-secondary small fw-semibold mb-2">
                    {project.category}
                  </p>

                  <h2 className="card-title h5">{project.title}</h2>

                  <p className="card-text text-body-secondary">
                    {project.description}
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
