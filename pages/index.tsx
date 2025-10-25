import { useEffect, useState } from "react";

interface AdData {
  image: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

export default function Home() {
  const [ad, setAd] = useState<AdData | null>(null);

  useEffect(() => {
    fetch("/ads.json")
      .then((res) => res.json())
      .then((data) => setAd(data))
      .catch((err) => console.error("Error loading ad:", err));
  }, []);

  if (!ad) return null;

  return (
    <div className="adpage-container">
      <img src={ad.image} alt="Ad Banner" className="adpage-banner" draggable={false} />
      <div className="adpage-content">
        <h1 className="adpage-title">{ad.title}</h1>
        <p className="adpage-desc">{ad.description}</p>
        <a href={ad.link} target="_blank" rel="nofollow noopener noreferrer" className="adpage-btn">
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
          background: #fff;
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
          background-color: #0056f4;
          color: #fff;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          padding: 14px 35px;
          font-size: 16px;
          transition: 0.3s ease;
        }

        .adpage-btn:hover {
          background-color: #0042c3;
        }

        @media (max-width: 480px) {
          .adpage-title {
            font-size: 20px;
          }
          .adpage-desc {
            font-size: 14px;
          }
          .adpage-btn {
            width: 100%;
            text-align: center;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}
