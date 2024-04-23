export async function fetchConnectData() {
  const URL = process.env.CONNECT_URL;
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

  const req = await fetch(URL!, {
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