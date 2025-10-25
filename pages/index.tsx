import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

interface AdData {
  image: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

export default function Home() {
  const [ad, setAd] = useState<AdData | null>(null);
  const router = useRouter();

  // 🔹 Redirect ke 404 kalau dibuka di desktop
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
        router.replace("/404");
      }
    }
  }, [router]);

  // 🔹 Ambil data dari ads.json
  useEffect(() => {
    fetch("/ads.json")
      .then((res) => res.json())
      .then((data) => setAd(data))
      .catch((err) => console.error("Error loading ad:", err));
  }, []);

  if (!ad) return null;

  return (
    <div className="adpage-container">
      <Head>
        <title>{ad.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <img src={ad.image} alt="Ad Banner" className="adpage-banner" draggable={false} />

      <div className="adpage-content">
        <h1 className="adpage-title">{ad.title}</h1>
        <p className="adpage-desc">{ad.description}</p>
        <a
          href={ad.link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="adpage-btn"
        >
          {ad.button}
        </a>
      </div>

      <style jsx>{`
        .adpage-container {
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          min-height: 100vh;
          background: #ffffff;
          overflow-x: hidden;
        }

        .adpage-banner {
          width: 100%;
          height: auto;
          object-fit: cover;
          pointer-events: none;
        }

        .adpage-content {
          width: 100%;
          max-width: 600px;
          padding: 20px;
          box-sizing: border-box;
        }

        .adpage-title {
          font-size: 22px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }

        .adpage-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #444;
          margin-bottom: 30px;
        }

        .adpage-btn {
          display: inline-block;
          background-color: #0066ff;
          color: #fff;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          padding: 14px 35px;
          font-size: 16px;
          border-radius: 6px; /* 🔹 border-radius ditambah */
          transition: 0.3s ease;
        }

        .adpage-btn:hover {
          background-color: #004ecb;
        }

        @media (max-width: 768px) {
          .adpage-title {
            font-size: 20px;
          }
          .adpage-desc {
            font-size: 14px;
          }
          .adpage-btn {
            width: 100%;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}
