import Water from "./water";

export default function Home() {
  return (
    <div className="page">
      <Water />
      <main className="hero">
        <div className="name">
          <h1>thvu</h1>
          <section className="links">
            <div className="link-row">
              <a className="link" href="mailto:hi@thvu.dev">
                @
              </a>
              <a
                className="link"
                href="https://github.com/vuhuuthang15"
                target="_blank"
                rel="noreferrer"
              >
                gh
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/vuhuuthang15"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
              <a
                className="link"
                href="https://x.com/vuhuuthang15"
                target="_blank"
                rel="noreferrer"
              >
                x
              </a>
            </div>
          </section>
        </div>

        <span className="footer">
          © {new Date().getFullYear()} huu thang vu
        </span>
      </main>
    </div>
  );
}
