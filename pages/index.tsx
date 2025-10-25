import React from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Join Adsterra Referral</title>
        <meta
          name="description"
          content="Join Adsterra referral program and start earning today."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.container}>
        {/* Banner */}
        <div style={styles.banner}>
          <a
            href="https://beta.publishers.adsterra.com/referral/CppfnZn94G"
            rel="nofollow"
            target="_blank"
          >
            <img
              alt="Adsterra Banner"
              src="https://landings-cdn.adsterratech.com/referralBanners/gif/600x250_adsterra_reff.gif"
              style={styles.image}
            />
          </a>
        </div>

        {/* Title / Short Text */}
        <div style={styles.content}>
          <h1 style={styles.title}>Earn Money with Adsterra</h1>
          <p style={styles.subtitle}>
            Start earning by sharing your Adsterra referral link today.
          </p>
        </div>

        {/* Floating Button */}
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
    margin: 0,
    padding: 0,
    backgroundColor: "#ffffff",
    color: "#000000",
    minHeight: "100vh",
    overflowX: "hidden" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: "60vh",
    overflow: "hidden" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  content: {
    textAlign: "center" as const,
    padding: "40px 20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  button: {
    position: "fixed" as const,
    bottom: "20px",
    right: "20px",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "14px 26px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    zIndex: 9999,
  },
};
