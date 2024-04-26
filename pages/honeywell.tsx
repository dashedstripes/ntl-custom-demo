import BlogPost from "@/components/BlogPost";
import Hero from "@/components/Hero";
import { PageData, fetchData } from "@/services/data-source";

export default function Home({ data }: { data: PageData }) {
  return (
    <div className="relative mx-auto w-[1240px]">
      {data?.hero && (
        <Hero 
          title={data?.hero?.title} 
          image={data?.hero.image} 

          top="169px"
          left="0px"
          width="100%"
          height="577px"
        />
      )}
      
      {data?.blogPost && (
        <BlogPost 
          title={data?.blogPost?.title} 
          content={data?.blogPost?.content} 
          image={data?.blogPost.image} 
          top="756px"
          left="0px"
          width="420px"
          height="170px"
        />
      )}

      <img src="/site.jpg" alt="page"/>
    </div>
  );
}

export async function getStaticProps() {
  const data: PageData = await fetchData({
    "HERO": "CONTENTSTACK",
    "BLOG_POST": "CONTENTSTACK"
  }, true);

  return {
    props: {
      data
    },
  };
}