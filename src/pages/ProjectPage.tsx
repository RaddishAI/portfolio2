import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect } from "react";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((project) => project.slug === slug);

  useEffect(() => {
    document.title = project
      ? `${project.title} | Raddish`
      : "Project not found | Raddish";

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (metaDescription) {
      metaDescription.content = project
        ? project.description
        : "Explore front-end development projects by Raddish.";
    }

    return () => {
      document.title = "Raddish | Front-End Developer";

      if (metaDescription) {
        metaDescription.content =
          "Explore the portfolio and front-end development projects of Raddish.";
      }
    };
  }, [project]);

  if (!project) {
    return (
      <main className="container py-5">
        <h1>Project not found</h1>
        <p>The requested project does not exist.</p>
        <Link to="/">Back to home</Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "960px" }}>
        <Link to="/" className="d-inline-block mb-4">
          ← Back to home
        </Link>

        <header className="mb-5">
          <p className="text-uppercase text-body-secondary small fw-semibold mb-2">
            {project.category}
          </p>

          <h1 className="display-4 fw-bold mb-3">{project.title}</h1>

          <p className="lead text-body-secondary">{project.description}</p>
        </header>

        <figure className="mt-4 mb-5">
          <img
            src={project.image}
            alt={project.imageCaption}
            className="img-fluid rounded-3 w-100"
            loading="lazy"
          />
          <figcaption className="text-body-secondary small mt-2">
            {project.imageCaption}
          </figcaption>
        </figure>

        <section aria-labelledby="project-about-heading" className="mb-4">
          <h2 id="project-about-heading" className="h4 fw-semibold mb-3">
            About this project
          </h2>

          <p>{project.content}</p>
        </section>

        <div className="d-flex flex-wrap gap-3 mt-5 pt-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View live project ↗
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}
