export default function Home({ data }: { data: any }) {
  return (
    <div className="relative mx-auto w-[1240px]">
      <div className="absolute bg-black text-white w-full h-[577px] z-20 top-[169px] p-16 flex justify-center items-center">
        <h1 className="font-bold text-5xl">{data?.title}</h1>
      </div>
      <img src="/page.png" alt="page"/>
    </div>
  );
}

async function fetchData() {
  const URL = "https://adam-contents-mfiojm-prod.api.netlify-connect.com/"
  const QUERY = `
    query MyQuery {
      allContentstackHero {
        edges {
          node {
            title
          }
        }
      }
    }
  `;

  const req = await fetch(URL, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.CONNECT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: QUERY, variables: {} })
  })
  const json = await req.json();
  return json?.data?.allContentstackHero?.edges?.[0]?.node || {}
}

export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: {
      data
    },
  };
}