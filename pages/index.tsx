import React from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Join Adsterra Referral Program</title>
        <meta
          name="description"
          content="Earn money by sharing your Adsterra referral link. Join the program today and start generating passive income!"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.container}>
        <div style={styles.banner}>
          <a
            href="https://beta.publishers.adsterra.com/referral/CppfnZn94G"
            rel="nofollow"
            target="_blank"
          >
            <img
              alt="Adsterra Referral Banner"
              src="https://landings-cdn.adsterratech.com/referralBanners/gif/600x250_adsterra_reff.gif"
              style={styles.image}
            />
          </a>
        </div>

        <div style={styles.article}>
          <h1 style={styles.title}>Start Earning with Adsterra</h1>
          <p style={styles.text}>
            Adsterra is one of the leading global advertising networks that
            allows publishers and webmasters to earn money by monetizing their
            traffic. With a simple sign-up process, you can join and start
            generating income through high-quality ad placements and referral
            bonuses.
          </p>
          <p style={styles.text}>
            By joining the Adsterra referral program, you can invite others to
            the platform and receive lifetime commissions from their earnings.
            It's a reliable way to build a stream of passive income without any
            complicated setup.
          </p>
          <p style={styles.text}>
            Whether you’re a blogger, a website owner, or a digital marketer,
            Adsterra gives you the tools to grow and earn more. Click the button
            below to join now.
          </p>
        </div>

        <a
          href="https://beta.publishers.adsterra.com/referral/CppfnZn94G"
          rel="nofollow"
          target="_blank"
          style={styles.button}
        >
          Join Now
        </a>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#ffffff",
    color: "#000000",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    overflowX: "hidden" as const,
  },
  banner: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden" as const,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  article: {
    maxWidth: "800px",
    padding: "40px 20px",
    textAlign: "left" as const,
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "15px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "15px",
  },
  button: {
    position: "fixed" as const,
    bottom: "20px",
    right: "20px",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "14px 24px",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "1rem",
    zIndex: 9999,
    transition: "opacity 0.3s ease",
  },
};
