import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Head from "next/head";

type DataItem = {
  id: string;
  title: string;
  url_img: string;
  linkoffer: string;
};

type Props = {
  item?: DataItem;
  shouldRedirect: boolean;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.params!;
  const userAgent = context.req.headers["user-agent"] || "";

  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const jsonData: DataItem[] = JSON.parse(fileData);

  const item = jsonData.find((x) => x.id === id);

  if (!item) {
    return { notFound: true };
  }

  // Deteksi apakah user datang dari bot sosial media
  const botPattern = /(facebookexternalhit|twitterbot|whatsapp|telegrambot|linkedinbot)/i;
  const shouldRedirect = !botPattern.test(userAgent);

  return {
    props: {
      item,
      shouldRedirect,
    },
  };
};

export default function RedirectPage({ item, shouldRedirect }: Props) {
  if (!item) return null;

  return (
    <>
      <Head>
        {/* OG Meta tags */}
        <title>{item.title}</title>
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.url_img} />
        <meta property="og:url" content={`https://contoh.vercel.app/${item.id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={item.title} />
        <meta name="twitter:image" content={item.url_img} />
      </Head>

      {shouldRedirect ? (
        <>
          <meta httpEquiv="refresh" content={`1;url=${item.linkoffer}`} />
          <main
            style={{
              textAlign: "center",
              padding: "60px",
              fontFamily: "sans-serif",
            }}
          >
            <img
              src={item.url_img}
              alt={item.title}
              style={{
                maxWidth: "400px",
                width: "100%",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />
            <h2>{item.title}</h2>
            <p>Anda akan diarahkan ke halaman tujuan...</p>
          </main>
        </>
      ) : (
        // Saat bot sosial media membuka (Facebook, Telegram, dll)
        <main
          style={{
            textAlign: "center",
            padding: "60px",
            fontFamily: "sans-serif",
          }}
        >
          <img
            src={item.url_img}
            alt={item.title}
            style={{
              maxWidth: "400px",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <h2>{item.title}</h2>
          <p>Preview link untuk sosial media.</p>
        </main>
      )}
    </>
  );
}
