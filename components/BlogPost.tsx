export default function BlogPost({
  title,
  content,
  image,

  top,
  left,
  width,
  height,
}: {
  title: string
  content: string
  image: string

  top: string
  left: string
  width: string
  height: string
}) {
  return (
    <div className={`absolute bg-[#f7f7f7]`}
      style={{
        "top": top,
        "left": left,
        "width": width,
        "height": height,
      }}
    >
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