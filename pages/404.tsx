import Link from "next/link";

export default function Custom404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.text}>Page not found.</p>
      <Link href="/" style={styles.button}>
        Back home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    background: "#0d0d0d",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center" as const,
    padding: "20px",
  },
  code: {
    fontSize: "120px",
    margin: 0,
    letterSpacing: "-2px",
    animation: "fadeIn 1.2s ease-in-out",
  },
  text: {
    fontSize: "20px",
    marginTop: "10px",
    animation: "fadeIn 2s ease-in-out",
  },
  button: {
    marginTop: "30px",
    textDecoration: "none",
    padding: "12px 28px",
    background: "#ffffff",
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase" as const,
    transition: "all 0.3s ease",
    border: "none",
    borderRadius: "0px",
  },
};
