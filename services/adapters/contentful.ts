import { Component, PageData } from "../data-source";

export async function fetchContentfulData(components: Component[]): Promise<PageData> {
  const BASE_URL=`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`

  const QUERY = `
    query MyQuery {

      ${components.map(component => {
        switch(component) {
          case "HERO":
            return `
              heroCollection {
                items {
                  title
                  image {
                    url
                  }
                  sys {
                    id
                  }
                }
              }
            `
          case "BLOG_POST":
            return `
              blogPostCollection {
                items {
                  title
                  content
                  image {
                    url
                  }
                  sys {
                    id
                  }
                }
              }
            `
          default:
            return ""
        }
      })}
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

  const data: PageData = {}

  components.forEach(component => {
    switch(component) {
      case "HERO":
        data.hero = {
          id: json?.data?.heroCollection?.items?.[0]?.sys?.id,
          title: json?.data?.heroCollection?.items?.[0]?.title,
          image: json?.data?.heroCollection?.items?.[0]?.image?.url
        }
        break
      case "BLOG_POST":
        data.blogPost = {
          id: json?.data?.blogPostCollection?.items?.[0]?.sys?.id,
          title: json?.data?.blogPostCollection?.items?.[0]?.title,
          content: json?.data?.blogPostCollection?.items?.[0]?.content,
          image: json?.data?.blogPostCollection?.items?.[0]?.image?.url
        }
        break
    }
  })

  return data || {}
}