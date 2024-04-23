import { fetchConnectData } from "./adapters/connect"
import { fetchContentfulData } from "./adapters/contentful"

type DataSource = "CONNECT" | "CONTENTFUL"



export type PageData = {
  hero: {
    title: string
  }
}

export async function fetchData(source: DataSource): Promise<PageData> {
  switch(source) {
    case "CONNECT": {
      const data = await fetchConnectData()
      return {
        hero: {
          title: data.title
        }
      }
    }
    case "CONTENTFUL": {
      const data = await fetchContentfulData();
      return {
        hero: {
          title: data.title
        }
      }
    }
    default:
      return {
        hero: {
          title: "Default Title"
        }
      }
    }
}