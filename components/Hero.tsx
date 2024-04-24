export default function Hero({
  title,
  image,

  top,
  left,
  width,
  height,
}: {
  title: string,
  image: string,

  top: string
  left: string
  width: string
  height: string
}) {
  return (
    <div className={`absolute bg-black text-white z-20`}
      style={{
        "top": top,
        "left": left,
        "width": width,
        "height": height,
      }}
    >
      <div className="bg-black w-full h-full p-16 flex justify-center items-center" style={{ backgroundImage: `url(${image})` }}>
        <h1 className="font-bold text-5xl">{title}</h1>
      </div>
    </div>
  )
}