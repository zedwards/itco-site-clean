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
  {
    title: "Software Solutions",
    text: "Support licensing, platform optimization, and software strategy with a flexible, vendor-aware approach.",
  },
];

const highlights = [
  "Enterprise AI and cloud transformation",
  "Workforce and project delivery support",
  "Cybersecurity and infrastructure modernization",
  "Global delivery with local excellence",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ITCO Solutions | AI, Cloud, Cybersecurity & Workforce Solutions</title>
        <meta
          name="description"
          content="ITCO Solutions helps enterprises modernize with AI, cloud, cybersecurity, workforce solutions, and software services."
        />
      </Head>

      <main className="site-shell">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">ITCO</div>
            <div className="brand-text">
              <span className="brand-name">ITCO Solutions</span>
              <span className="brand-sub">AI • Cloud • Cybersecurity • Workforce</span>
            </div>
          </div>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Enterprise Technology Transformation</p>
            <h1>From Strategy to Execution Across AI, Cloud, and Workforce Solutions</h1>
            <p className="hero-text">
              ITCO Solutions helps organizations modernize infrastructure, adopt AI,
              strengthen cybersecurity, and scale delivery with the talent and expertise
              needed to move faster with confidence.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Talk to ITCO
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hero-points">
              {highlights.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual fade-in">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="grid-card">
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line vertical" />
              <div className="grid-line vertical second" />

              <div className="stat-card stat-a">
                <span className="stat-number">1997</span>
                <span className="stat-label">Built on experience</span>
              </div>

              <div className="stat-card stat-b">
                <span className="stat-number">AI</span>
                <span className="stat-label">Strategy to deployment</span>
              </div>

              <div className="stat-card stat-c">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Always-on delivery mindset</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats fade-up">
          <div className="stat">
            <h3>AI</h3>
            <p>Adoption, strategy, and practical implementation</p>
          </div>
          <div className="stat">
            <h3>Cloud</h3>
            <p>Infrastructure modernization and operational efficiency</p>
          </div>
          <div className="stat">
            <h3>Cybersecurity</h3>
            <p>Resilience, risk reduction, and enterprise protection</p>
          </div>
          <div className="stat">
            <h3>Talent</h3>
            <p>Specialized workforce solutions for critical delivery needs</p>
          </div>
        </section>

        <section className="section fade-up">
          <div className="section-heading">
            <p className="eyebrow">What We Deliver</p>
            <h2>Services Built for Enterprise Outcomes</h2>
            <p>
              We bring together consulting, workforce, software, and technology
              capabilities to help organizations execute with speed and precision.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-accent" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about fade-up">
          <div className="about-copy">
            <p className="eyebrow">About ITCO</p>
            <h2>A Trusted Partner for Complex Technology Initiatives</h2>
            <p>
              ITCO Solutions supports enterprise clients with a broad mix of consulting,
              workforce, cloud, cybersecurity, and software capabilities. Our focus is
              not just recommendations, but execution that helps organizations transform
              operations, improve agility, and deliver measurable business value.
            </p>
            <p>
              We work across fast-moving environments where leadership teams need a
              partner that can align strategy, technical depth, and delivery discipline.
            </p>
          </div>

          <div className="about-panel">
            <div className="about-panel-inner">
              <h3>Why Clients Choose ITCO</h3>
              <ul>
                <li>Experienced enterprise delivery mindset</li>
                <li>Flexible support across consulting and talent needs</li>
                <li>Strong alignment to business outcomes</li>
                <li>Scalable support for modernization initiatives</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="banner fade-up">
          <div className="banner-content">
            <p className="eyebrow">Built for What’s Next</p>
            <h2>Modernize the Core. Scale the Future.</h2>
            <p>
              Whether your priority is AI readiness, cloud modernization, cybersecurity,
              or high-impact workforce support, ITCO helps turn roadmap into execution.
            </p>
          </div>
        </section>

        <section className="cta fade-up">
          <div className="cta-box">
            <div>
              <p className="eyebrow">Let’s Talk</p>
              <h2>Ready to Build What’s Next?</h2>
              <p>
                Start with a conversation about your goals, priorities, and the outcomes
                your team needs to achieve.
              </p>
            </div>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/careers" className="btn btn-secondary">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>
            <strong>ITCO Solutions</strong>
            <p>Enterprise AI, cloud, cybersecurity, workforce, and software solutions.</p>
          </div>

          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(33, 78, 255, 0.18), transparent 32%),
            radial-gradient(circle at top right, rgba(0, 194, 255, 0.12), transparent 28%),
            linear-gradient(180deg, #03060d 0%, #071120 45%, #03060d 100%);
          color: #f5f7fb;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        .site-shell {
          width: min(1240px, calc(100% - 32px));
          margin: 0 auto;
          padding: 20px 0 48px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          margin-top: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(7, 13, 24, 0.72);
          backdrop-filter: blur(14px);
          border-radius: 18px;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #1f6fff, #00b8ff);
          box-shadow: 0 10px 30px rgba(31, 111, 255, 0.35);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .brand-name {
          font-size: 16px;
          font-weight: 700;
        }

        .brand-sub {
          font-size: 11px;
          color: #9fb1cc;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .nav {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          font-size: 14px;
          color: #d5def0;
        }

        .nav a:hover {
          color: #ffffff;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          align-items: center;
          min-height: 76vh;
          padding: 42px 6px 24px;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #7eb9ff;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
          font-weight: 700;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(44px, 7vw, 76px);
          line-height: 0.98;
          max-width: 860px;
          letter-spacing: -0.04em;
        }

        .hero-text {
          max-width: 700px;
          margin: 22px 0 0;
          color: #c2cee3;
          font-size: 18px;
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 700;
          transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          color: #ffffff;
          background: linear-gradient(135deg, #1f6fff, #00a9ff);
          box-shadow: 0 14px 35px rgba(31, 111, 255, 0.28);
        }

        .btn-secondary {
          border: 1px solid rgba(126, 185, 255, 0.45);
          background: rgba(255, 255, 255, 0.02);
          color: #e9f2ff;
        }

        .hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }

        .pill {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d7e2f4;
          font-size: 13px;
        }

        .hero-visual {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .grid-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          min-height: 520px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
            radial-gradient(circle at top left, rgba(0, 174, 255, 0.25), transparent 35%),
            linear-gradient(145deg, rgba(11, 19, 34, 0.94), rgba(5, 10, 20, 0.95));
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }

        .grid-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .grid-line:nth-child(1) {
          top: 25%;
        }

        .grid-line:nth-child(2) {
          top: 50%;
        }

        .grid-line:nth-child(3) {
          top: 75%;
        }

        .grid-line.vertical {
          top: 0;
          bottom: 0;
          left: 33.3%;
          width: 1px;
          height: auto;
        }

        .grid-line.vertical.second {
          left: 66.6%;
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.8;
        }

        .glow-one {
          width: 180px;
          height: 180px;
          top: 40px;
          right: 50px;
          background: rgba(0, 186, 255, 0.22);
          animation: floatY 5s ease-in-out infinite;
        }

        .glow-two {
          width: 140px;
          height: 140px;
          bottom: 90px;
          left: 30px;
          background: rgba(50, 108, 255, 0.24);
          animation: floatY 6s ease-in-out infinite reverse;
        }

        .stat-card {
          position: absolute;
          padding: 18px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(12px);
        }

        .stat-a {
          top: 48px;
          left: 34px;
          width: 190px;
        }

        .stat-b {
          top: 212px;
          right: 34px;
          width: 200px;
        }

        .stat-c {
          bottom: 38px;
          left: 94px;
          width: 210px;
        }

        .stat-number {
          display: block;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .stat-label {
          display: block;
          margin-top: 6px;
          color: #c2d1e9;
          font-size: 14px;
          line-height: 1.5;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 10px;
        }

        .stat {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .stat p {
          margin: 0;
          color: #b4c2d9;
          line-height: 1.6;
        }

        .section,
        .about,
        .banner,
        .cta {
          margin-top: 32px;
        }

        .section,
        .about,
        .banner,
        .cta-box {
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
        }

        .section {
          padding: 34px;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 26px;
        }

        .section h2,
        .about h2,
        .banner h2,
        .cta h2 {
          margin: 0 0 12px;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .section-heading p,
        .about p,
        .banner p,
        .cta p {
          color: #bcc9df;
          line-height: 1.75;
          font-size: 16px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          min-height: 220px;
          padding: 24px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(16, 27, 47, 0.9), rgba(8, 14, 26, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1f6fff, #00beff);
        }

        .service-card h3 {
          margin: 18px 0 12px;
          font-size: 24px;
        }

        .service-card p {
          margin: 0;
          color: #bfd0e7;
          line-height: 1.7;
        }

        .about {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          padding: 34px;
        }

        .about-panel {
          display: flex;
          align-items: stretch;
        }

        .about-panel-inner {
          width: 100%;
          padding: 26px;
          border-radius: 22px;
          background:
            radial-gradient(circle at top right, rgba(0, 174, 255, 0.16), transparent 28%),
            linear-gradient(180deg, rgba(13, 24, 42, 0.96), rgba(8, 13, 23, 0.96));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .about-panel-inner h3 {
          margin: 0 0 16px;
          font-size: 24px;
        }

        .about-panel-inner ul {
          margin: 0;
          padding-left: 18px;
          color: #d3deef;
          line-height: 2;
        }

        .banner {
          padding: 34px;
          background:
            radial-gradient(circle at left center, rgba(31, 111, 255, 0.16), transparent 25%),
            linear-gradient(135deg, rgba(10, 20, 36, 0.95), rgba(7, 12, 22, 0.96));
        }

        .cta-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 34px;
        }

        .cta-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .footer {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-top: 24px;
          padding: 30px 8px 10px;
          color: #9eb0cb;
        }

        .footer strong {
          display: block;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .footer p {
          margin: 0;
          max-width: 560px;
          line-height: 1.7;
        }

        .footer-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .fade-up {
          animation: fadeUp 0.8s ease both;
        }

        .fade-in {
          animation: fadeIn 1s ease both;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @media (max-width: 1024px) {
          .hero,
          .about,
          .cta-box {
            grid-template-columns: 1fr;
            display: grid;
          }

          .hero {
            min-height: auto;
            padding-top: 28px;
          }

          .stats,
          .card-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer {
            flex-direction: column;
          }
        }

        @media (max-width: 680px) {
          .site-shell {
            width: min(100% - 20px, 1240px);
          }

          .topbar {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }

          .nav {
            gap: 12px;
            font-size: 13px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero-text {
            font-size: 16px;
          }

          .stats,
          .card-grid {
            grid-template-columns: 1fr;
          }

          .section,
          .about,
          .banner,
          .cta-box {
            padding: 22px;
          }

          .hero-visual {
            min-height: 420px;
          }

          .grid-card {
            min-height: 420px;
          }

          .stat-a,
          .stat-b,
          .stat-c {
            position: absolute;
            width: auto;
            max-width: 70%;
          }

          .stat-a {
            top: 24px;
            left: 18px;
          }

          .stat-b {
            top: 170px;
            right: 18px;
          }

          .stat-c {
            left: 36px;
            bottom: 24px;
          }
        }
      `}</style>
    </>
  );
}
