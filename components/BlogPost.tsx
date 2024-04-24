export default function BlogPost({
  title,
  content,
  image
}: {
  title: string,
  content: string,
  image: string
}) {
  return (
    <div className="absolute bg-[#f7f7f7] h-[170px] w-[420px] left-[0px] top-[756px]">
      <div className="flex gap-8 p-4 pt-5">
        <img className="w-[100px]" src={image} alt="blog post"/>
        <div className="text-black">
          <h2>{title}</h2>
          <p className="font-bold text-xl">{content}</p>
        </div>
      </div>
    </div>
  )
}