import Photo from "@/components/Photo";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-10 font-serif">
          Uptown Menance
        </h1>
        <div className="order-1 lg:order-none mb-8 lg:mb-0 rounded-xl">
          <Photo />
        </div>
      </div>
    </div>
  );
}
