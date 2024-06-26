import { ContentfulContentSource } from "@stackbit/cms-contentful";
import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "nextjs",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID!,
      environment: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
      previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
      accessToken: process.env.CONTENTFUL_CMA_TOKEN!
    })
  ],
});
