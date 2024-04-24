import { fetchConnectData } from "./adapters/connect"
import { fetchContentfulData } from "./adapters/contentful"

type DataSource = "CONTENTFUL" | "CONTENTSTACK"

export type Component = "HERO" | "BLOG_POST"
export type ComponentMap = { [key in Component]?: DataSource }

export type PageData = {
  hero?: {
    title: string
    image: string
  }
  blogPost?: {
    image: string,
    title: string,
    content: string
  }
}

export async function fetchData(map: ComponentMap, useConnect: boolean): Promise<PageData> {
  let data: PageData = {};

  if(useConnect) {
    data = {...data, ...await fetchConnectData(map)}
  } else {
    const transformedMap: {
      [key in DataSource]: Component[]
    } = {
      "CONTENTFUL": [],
      "CONTENTSTACK": []
    }
  
    for(const [component, source] of Object.entries(map)) {
      transformedMap[source].push(component as Component)
    }
  
    if(transformedMap["CONTENTFUL"].length > 0) {
      data = {...data, ...await fetchContentfulData(transformedMap["CONTENTFUL"])}
    }
    
    if(transformedMap["CONTENTSTACK"].length > 0) {
    }
  }


  return data
}