import { PageData, fetchData } from "@/services/data-source";

export default function Home({ data }: { data: PageData }) {
  return (
    <div className="relative mx-auto w-[1240px]">
      <div className="absolute bg-black text-white w-full h-[577px] z-20 top-[169px] p-16 flex justify-center items-center">
        <h1 className="font-bold text-5xl">{data?.hero?.title}</h1>
      </div>
      <img src="/honeywell.jpg" alt="page"/>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchData("CONTENTFUL");

  return {
    props: {
      data
    },
  };
}