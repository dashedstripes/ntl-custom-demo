export default function Hero({
  title,
  image
}: {
  title: string,
  image: string
}) {
  return (
    <div className={`absolute bg-black text-white w-full h-[577px] z-20 top-[169px]`}>
          <div className="bg-black w-full h-full p-16 flex justify-center items-center" style={{ backgroundImage: `url(${image})`}}>
            <h1 className="font-bold text-5xl">{title}</h1>
          </div>
        </div>
  )
}