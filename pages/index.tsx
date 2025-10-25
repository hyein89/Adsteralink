import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface AdData {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Home() {
  const [ad, setAd] = useState<AdData | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Redirect ke 404 jika di desktop
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
        router.replace("/404");
      }
    }

    // Ambil data dari ads.json
    fetch("/ads.json")
      .then((res) => res.json())
      .then((data) => setAd(data))
      .catch((err) => console.error("Failed to load ad data:", err));
  }, [router]);

  if (!ad) return null;

  return (
    <div style={pageStyles.container}>
      <img src={ad.image} alt="Ad Banner" style={pageStyles.banner} draggable={false} />
      <div style={pageStyles.textContainer}>
        <h1 style={pageStyles.title}>{ad.title}</h1>
        <p style={pageStyles.desc}>{ad.description}</p>
      </div>
      <a href={ad.link} target="_blank" rel="nofollow noopener noreferrer" style={pageStyles.button}>
        Sign Up
      </a>
    </div>
  );
}

const pageStyles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "left" as const,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#fff",
    overflow: "hidden",
    position: "relative" as const,
  },
  banner: {
    width: "100%",
    height: "auto",
    objectFit: "cover" as const,
    pointerEvents: "none" as const,
    display: "block",
  },
  textContainer: {
    padding: "20px",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "8px",
    color: "#111",
  },
  desc: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#444",
    margin: 0,
  },
  button: {
    position: "fixed" as const,
    bottom: "25px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#0056f4",
    color: "#fff",
    border: "none",
    padding: "14px 35px",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    transition: "0.3s",
  },
};
