import React from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Join Adsterra Referral Program</title>
        <meta
          name="description"
          content="Join Adsterra referral program and start earning with your traffic today."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={page.container}>
        {/* Banner */}
        <div style={page.banner}>
          <a
            href="https://beta.publishers.adsterra.com/referral/CppfnZn94G"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="https://landings-cdn.adsterratech.com/referralBanners/gif/600x250_adsterra_reff.gif"
              alt="Adsterra Referral Banner"
              style={page.image}
            />
          </a>
        </div>

        {/* Content */}
        <div style={page.content}>
          <h1 style={page.title}>Top iGaming Ad Network</h1>
          <p style={page.desc}>
            The best for advertisers. 248 GEOs. All payment models: CPM, CPC, CPA.
            SSP/managed.
          </p>

          <a
            href="https://beta.publishers.adsterra.com/referral/CppfnZn94G"
            rel="nofollow"
            target="_blank"
            style={page.button}
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}

const page = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    color: "#000000",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    overflowX: "hidden" as const,
  },
  banner: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden" as const,
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover" as const,
  },
  content: {
    maxWidth: "600px",
    textAlign: "center" as const,
    padding: "40px 20px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 600,
    marginBottom: "10px",
  },
  desc: {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "30px",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#0056f5",
    color: "#fff",
    padding: "14px 40px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    letterSpacing: "0.5px",
  },
};
