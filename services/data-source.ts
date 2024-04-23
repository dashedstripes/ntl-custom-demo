import { fetchConnectData } from "./adapters/connect"
import { fetchContentfulData } from "./adapters/contentful"

type DataSource = "CONNECT" | "CONTENTFUL"

export type Component = "HERO" | "BLOG_POST"
export type ComponentMap = { [key in Component]: DataSource }

export type PageData = {
  hero?: {
    title: string
  }
  blogPost?: {
    image: string,
    title: string,
    content: string
  }
}

export async function fetchData(map: ComponentMap): Promise<PageData> {
  let data: PageData = {};

  const transformedMap: {
    [key in DataSource]: Component[]
  } = {
    "CONNECT": [],
    "CONTENTFUL": []
  }

  for(const [component, source] of Object.entries(map)) {
    transformedMap[source].push(component as Component)
  }

  if(transformedMap["CONNECT"].length > 0) {
  }

  if(transformedMap["CONTENTFUL"].length > 0) {
    data = {...data, ...await fetchContentfulData(transformedMap["CONTENTFUL"])}
  }

  return data
}