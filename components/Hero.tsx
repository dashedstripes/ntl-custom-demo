export default function Hero({
  id,
  title,
  image,

  top,
  left,
  width,
  height,
}: {
  id: string,
  title: string,
  image: string,

  top: string
  left: string
  width: string
  height: string
}) {
  return (
    <div data-sb-object-id={id} className={`absolute bg-black text-white z-20 p-16 flex justify-center items-center`}
      style={{
        "top": top,
        "left": left,
        "width": width,
        "height": height,
        backgroundImage: `url(${image})`
      }}
    >
      <div className="absolute bg-black opacity-70 w-full h-full "></div>
      <h1 className="font-bold text-5xl z-40" data-sb-field-path="title">{title}</h1>
    </div>
  )
}