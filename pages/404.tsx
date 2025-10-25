import { useEffect, useState } from "react";

export default function Custom404() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.text}>Oops! Page not found{dots}</p>
      <a href="/" style={styles.button}>Go Back Home</a>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
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
