import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const [ads, setAds] = useState<any>(null);
  const router = useRouter();

  // Redirect ke 404 kalau buka di desktop
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
        router.replace("/404");
      }
    }
  }, [router]);

  useEffect(() => {
    fetch("/ads.json")
      .then((res) => res.json())
      .then(setAds)
      .catch((err) => console.error("Error loading ads.json:", err));
  }, []);

  if (!ads) return null;

  return (
    <div style={styles.container}>
      <img
        src={ads.image}
        alt="Ad Banner"
        style={styles.banner}
        draggable={false}
      />
      <div style={styles.content}>
        <h1 style={styles.title}>{ads.title}</h1>
      </div>
      <a href={ads.buttonLink} target="_blank" rel="nofollow noopener noreferrer">
        <button style={styles.button}>{ads.buttonText}</button>
      </a>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "left" as const,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative" as const,
    overflow: "hidden",
  },
  banner: {
    width: "100%",
    height: "auto",
    objectFit: "cover" as const,
    pointerEvents: "none" as const, // ✅ fix ini
  },
  content: {
    padding: "20px",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "1.4",
    marginTop: "15px",
  },
  button: {
    position: "fixed" as const,
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#ff4747",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.3s",
    fontFamily: "'Poppins', sans-serif",
  },
};
