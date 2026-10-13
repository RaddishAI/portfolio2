import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((project) => project.slug === slug);

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
      <Link to="/" className="d-inline-block mb-4">
        ← Back to home
      </Link>

      <h1>{project.title}</h1>
      <p>{project.description || "Project description coming soon."}</p>

      <section aria-label="Project details">
        <h2>About this project</h2>
        <p>{project.content || "Project details coming soon."}</p>
      </section>
    </main>
  );
}
