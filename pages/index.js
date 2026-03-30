import Head from "next/head";
import Link from "next/link";

const services = [
  {
    title: "AI Solutions",
    text: "Accelerate adoption of AI with practical strategy, implementation, and scalable delivery across the enterprise.",
  },
  {
    title: "Consulting Services",
    text: "Drive modernization with cloud, cybersecurity, digital transformation, and outcome-focused technology consulting.",
  },
  {
    title: "Workforce Solutions",
    text: "Access specialized talent and project support to move faster, close skill gaps, and execute with confidence.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ITCO Solutions</title>
      </Head>

      <main className="site">

        {/* HEADER */}
        <header className="topbar">
          <img src="/itco-logo-blue.png" className="logo" />

          <nav>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1>From AI Strategy to Real World Impact</h1>
          <p>
            ITCO Solutions helps enterprises modernize with AI, cloud, cybersecurity,
            and workforce solutions.
          </p>

          <div className="buttons">
            <Link href="/contact" className="btn primary">Talk to ITCO</Link>
            <Link href="/services" className="btn">Explore Services</Link>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Build What’s Next?</h2>
          <Link href="/contact" className="btn primary">Contact Us</Link>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <img src="/itco-logo-blue.png" className="logo" />
          <p>Enterprise AI, cloud, cybersecurity, and workforce solutions.</p>
        </footer>

      </main>

      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial;
          background: black;
          color: white;
        }

        .topbar {
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
          padding: 12px 20px;
          border: 1px solid white;
          margin: 10px;
        }

        .primary {
          background: #1f6fff;
          border: none;
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
