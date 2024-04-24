import { ComponentMap, PageData } from "../data-source";

const HERO_CONTENTSTACK = `
  allContentstackHero {
    edges {
      node {
        title
        image {
          url
        }
      }
    }
  }
`

const HERO_CONTENTFUL = `
  allContentfulHero {
    edges {
      node {
        title
        image {
          url
        }
      }
    }
  }
`

// when we moved to a shared ContentStack instance
// update this to be allContentstackBlogPost
const BLOG_POST_CONTENTSTACK = `
  allContentstackPost {
    edges {
      node {
        title
        content
        image {
          url
        }
      }
    }
  }
`

const BLOG_POST_CONTENTFUL = `
  allContentfulBlogPost {
    edges {
      node {
        title
        content
        image {
          url
        }
      }
    }
  }
`

export async function fetchConnectData(map: ComponentMap): Promise<PageData> {
  let queryData = '';

  for(const [component, source] of Object.entries(map)) {
    if(source === "CONTENTSTACK") {
      switch(component) {
        case "HERO":
          queryData += `\n${HERO_CONTENTSTACK}\n`;
          break
        case "BLOG_POST":
          queryData += `\n${BLOG_POST_CONTENTSTACK}\n`;
          break
        default:
          break
      }
    }

    if(source === "CONTENTFUL") {
      switch(component) {
        case "HERO":
          queryData += `\n${HERO_CONTENTFUL}\n`;
          break
        case "BLOG_POST":
          queryData += `\n${BLOG_POST_CONTENTFUL}\n`;
          break
        default:
          break
      }
    }
  }

  const URL = process.env.CONNECT_URL;
  const QUERY = `
    query MyQuery {
      ${queryData}
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

  let data: PageData = {};

  if(json?.data?.allContentstackHero) {
    data.hero = {
      title: json.data.allContentstackHero.edges[0].node.title + ` (via Netlify Connect)`,
      image: json.data.allContentstackHero.edges[0].node.image.url
    }
  }

  if(json?.data?.allContentfulHero) {
    data.hero = {
      title: json.data.allContentfulHero.edges[0].node.title + ` (via Netlify Connect)`,
      image: json.data.allContentfulHero.edges[0].node.image.url
    }
  }

  if(json?.data?.allContentstackPost) {
    data.blogPost = {
      title: json.data.allContentstackPost.edges[0].node.title + ` (via Netlify Connect)`,
      content: json.data.allContentstackPost.edges[0].node.content,
      image: json.data.allContentstackPost.edges[0].node.image.url
    }
  }

  if(json?.data?.allContentfulBlogPost) {
    data.blogPost = {
      title: json.data.allContentfulBlogPost.edges[0].node.title + ` (via Netlify Connect)`,
      content: json.data.allContentfulBlogPost.edges[0].node.content,
      image: json.data.allContentfulBlogPost.edges[0].node.image.url
    }
  }

  return data || {}
}