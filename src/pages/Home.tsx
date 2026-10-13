import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="container py-5">
      <header className="mb-5">
        <h1>Raddish Portfolio</h1>
        <p className="lead">
          Welcome to my portfolio. Explore my projects below.
        </p>
      </header>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="mb-4">
          My Projects
        </h2>

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
