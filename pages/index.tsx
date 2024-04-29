import BlogPost from "@/components/BlogPost";
import Hero from "@/components/Hero";
import { PageData, fetchData } from "@/services/data-source";

export default function Home({ data }: { data: PageData }) {
  return (
    <div className="relative mx-auto w-[1240px]">
      {data?.hero && (
        <Hero 
          id={data?.hero?.id}
          title={data?.hero?.title} 
          image={data?.hero.image} 

          top="104px"
          left="0px"
          width="100%"
          height="550px"
        />
      )}
      
      {data?.blogPost && (
        <BlogPost
          id={data?.blogPost?.id}
          title={data?.blogPost?.title} 
          content={data?.blogPost?.content} 
          image={data?.blogPost.image} 
          top="1272px"
          left="95px"
          width="245px"
          height="290px"
        />
      )}

      <img src="/stonex.jpg" alt="page"/>
    </div>
  );
}

export async function getStaticProps() {
  const data: PageData = await fetchData({
    "HERO": "CONTENTFUL",
    "BLOG_POST": "CONTENTFUL"
  }, false);

  return {
    props: {
      data
    },
  };
}