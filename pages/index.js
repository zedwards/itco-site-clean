import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ITCO Solutions | AI, Cloud, Cybersecurity & Workforce</title>
      </Head>

      <main className="site">

        {/* HEADER */}
        <header className="header">
          <img src="/itco-logo-blue.png" className="logo" alt="ITCO" />

          <nav>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1>From Strategy to Execution</h1>
          <p>
            AI, Cloud, Cybersecurity, and Workforce Solutions built for real enterprise outcomes.
          </p>

          <div className="buttons">
            <Link href="/contact" className="btn primary">Talk to ITCO</Link>
            <Link href="/services" className="btn">Explore Services</Link>
          </div>
        </section>

        {/* LOGO STRIP */}
        <section className="logo-strip">
          <p className="label">Trusted Across Enterprise Environments</p>

          <div className="logos">
            <img src="/itco-logo-blue.png" />
            <img src="/itco-logo-blue.png" />
            <img src="/itco-logo-blue.png" />
            <img src="/itco-logo-blue.png" />
            <img src="/itco-logo-blue.png" />
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          <div className="card">
            <h3>AI Solutions</h3>
            <p>Strategy to real-world deployment of enterprise AI.</p>
          </div>

          <div className="card">
            <h3>Consulting</h3>
            <p>Cloud, cybersecurity, and digital transformation execution.</p>
          </div>

          <div className="card">
            <h3>Workforce</h3>
            <p>Specialized talent to accelerate delivery and outcomes.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Move Faster?</h2>
          <Link href="/contact" className="btn primary">Contact Us</Link>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <img src="/itco-logo-blue.png" className="logo" />
          <p>Enterprise AI, Cloud, Cybersecurity, Workforce</p>
        </footer>

      </main>

      <style jsx>{`
        .site {
          background: black;
          color: white;
          font-family: Arial;
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          align-items: center;
        }

        .logo {
          height: 40px;
        }

        nav a {
          margin-left: 20px;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
        }

        .buttons {
          margin-top: 20px;
        }

        .btn {
          padding: 10px 20px;
          border: 1px solid white;
          margin: 10px;
        }

        .primary {
          background: #1f6fff;
          border: none;
        }

        .logo-strip {
          text-align: center;
          padding: 60px 20px;
        }

        .label {
          opacity: 0.6;
          margin-bottom: 20px;
        }

        .logos {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .logos img {
          height: 30px;
          opacity: 0.5;
        }

        .services {
          display: flex;
          gap: 20px;
          padding: 60px;
        }

        .card {
          border: 1px solid #333;
          padding: 20px;
          flex: 1;
        }

        .cta {
          text-align: center;
          padding: 80px;
        }

        .footer {
          text-align: center;
          padding: 40px;
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}
