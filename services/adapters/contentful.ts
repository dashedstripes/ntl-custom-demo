export async function fetchContentfulData() {
  const BASE_URL=`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`

  const QUERY = `
    query MyQuery {
      heroCollection {
        items {
          title
        }
      }
    }
  `

  const req = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: QUERY, variables: { preview: true } })
  })
  const json = await req.json();
  return json?.data?.heroCollection?.items?.[0] || {}
}