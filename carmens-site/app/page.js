import Photo from "@/components/Photo";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl my-10 font-serif">
          Uptown Menance
        </h1>
        <div className="flex flex-row justify-around items-center columns-2 mb-8 lg:mb-0 rounded-xl w-full">
          <div>
            <Photo />
          </div>
          <div>
            <Photo />
          </div>
          {/* <h4 className="border">go to the center!</h4>
          <h4 className="border">go to the center!</h4> */}
        </div>
      </div>
    </div>
  );
}
