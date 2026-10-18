import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const introText = "HEY I AM PETTER || RADDISH\nCALL ME WHATEVER YOU LIKE";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    document.title = "Raddish | Front-End Developer";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content =
        "Explore the portfolio of Raddish, a front-end developer with a background in finance.";
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    let characterIndex = 0;

    const interval = window.setInterval(() => {
      characterIndex += 1;
      setDisplayedText(introText.slice(0, characterIndex));

      if (characterIndex >= introText.length) {
        window.clearInterval(interval);
      }
    }, 65);

    return () => window.clearInterval(interval);
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const visibleText = prefersReducedMotion ? introText : displayedText;

  return (
    <main className="container">
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center py-5"
        style={{ minHeight: "calc(100svh - 80px)" }}
        aria-labelledby="home-heading"
      >
        <h1
          id="home-heading"
          className="display-4 fw-bold mb-4"
          style={{
            color: "var(--raddish-green)",
            fontFamily: '"Courier New", Courier, monospace',
            whiteSpace: "pre-line",
          }}
        >
          {visibleText}
          {!prefersReducedMotion && (
            <span className="typewriter-cursor" aria-hidden="true">
              |
            </span>
          )}
        </h1>

        <p className="lead mb-4" style={{ maxWidth: "650px" }}>
          Front-end developer with a background in finance, passionate about
          building thoughtful digital experiences.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          <Link to="/work" className="fw-semibold">
            My works →
          </Link>

          <Link to="/contact" className="fw-semibold">
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
