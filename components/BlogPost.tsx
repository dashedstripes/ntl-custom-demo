export default function BlogPost({
  id,
  title,
  content,
  image,

  top,
  left,
  width,
  height,
}: {
  id: string
  title: string
  content: string
  image: string

  top: string
  left: string
  width: string
  height: string
}) {
  return (
    <div data-sb-object-id={id} className={`absolute bg-[#f7f7f7]`}
      style={{
        "top": top,
        "left": left,
        "width": width,
        "height": height,
      }}
    >
      <div className="flex flex-col gap-8 p-4 pt-5">
        <img className="w-[100px]" src={image} alt="blog post"/>
        <div className="text-black">
          <h2 data-sb-field-path="title">{title}</h2>
          <p className="font-bold text-xl" data-sb-field-path="content">{content}</p>
        </div>
      </div>
    </div>
  )
}