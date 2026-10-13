import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container py-5 text-center">
      <h1>404 – Page not found</h1>

      <p className="lead">Sorry, the page you're looking for doesn't exist.</p>

      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </main>
  );
}
