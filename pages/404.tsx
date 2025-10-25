import Link from "next/link";

export default function Custom404() {
  return (
    <main style={styles.container}>
      <div style={styles.inner}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
        <Link href="/" style={styles.link}>Go Back Home</Link>
      </div>
    </main>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#0a0a0a",
    textAlign: "center" as const,
  },
  inner: {
    animation: "fadeInUp 1s ease forwards",
    maxWidth: "600px",
    padding: "0 20px",
  },
  title: {
    fontSize: "10rem",
    fontWeight: 800,
    margin: 0,
    lineHeight: 1,
    color: "#ffffff",
  },
  message: {
    fontSize: "1.25rem",
    marginTop: "10px",
    color: "#b0b0b0",
  },
  link: {
    display: "inline-block",
    marginTop: "40px",
    padding: "14px 32px",
    background: "#ffffff",
    color: "#000000",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    borderRadius: "0",
    transition: "all 0.3s ease",
  },
};
