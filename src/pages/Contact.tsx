import { useEffect, useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    document.title = "Contact | Raddish";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content =
        "Get in touch with Raddish, a front-end developer. Send a message or connect on GitHub and LinkedIn.";
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xwpkkvev", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "720px" }}>
        <h1 className="display-5 fw-bold mb-3">Get in touch.</h1>

        <p className="lead mb-5">
          Have a question, an opportunity, or just want to say hello? Feel free
          to reach out!
        </p>

        <form onSubmit={handleSubmit} className="mb-5">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="contact-name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="contact-name"
                name="name"
                autoComplete="name"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="contact-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="contact-email"
                name="_replyto"
                autoComplete="email"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="contact-subject"
                name="subject"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="contact-message"
                name="message"
                rows={6}
                required
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary px-4"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>

          <div role="status" aria-live="polite" className="mt-3">
            {status === "success" && (
              <p className="text-success">
                Thanks for reaching out! Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p
                className="fw-semibold"
                style={{ color: "var(--raddish-green)" }}
              >
                Thanks for reaching out! Your message has been sent.
              </p>
            )}
          </div>
        </form>

        <section aria-labelledby="contact-alternatives">
          <h2 id="contact-alternatives" className="h4 mb-3">
            Other ways to connect
          </h2>

          <div className="d-flex flex-wrap gap-3">
            <a
              href="https://github.com/RaddishAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/petter-r%C3%B8nning-80602613a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
