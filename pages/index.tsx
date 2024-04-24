import { PageData, fetchData } from "@/services/data-source";

export default function Home({ data }: { data: PageData }) {
  return (
    <div className="relative mx-auto w-[1240px]">
      {data?.hero && (
        <div className={`absolute bg-black text-white w-full h-[577px] z-20 top-[169px] p-16 flex justify-center items-center`} style={{ backgroundImage: `url(${data.hero.image})`}}>
          <h1 className="font-bold text-5xl">{data?.hero?.title}</h1>
        </div>
      )}

      {data?.blogPost && (  
        <div className="absolute bg-[#f7f7f7] h-[170px] w-[420px] left-[0px] top-[756px]">
          <div className="flex gap-8 p-4 pt-5">
            <img className="w-[100px]" src={data?.blogPost?.image} alt="blog post"/>
            <div className="text-black">
              <h2>{data?.blogPost?.title}</h2>
              <p className="font-bold text-xl">{data?.blogPost?.content}</p>
            </div>
          </div>
        </div>
      )}
      <img src="/honeywell.jpg" alt="page"/>
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