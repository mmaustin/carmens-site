import Photo from "./Photo";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


const PreviewTemplate = ({ previewArray }) => {

  return (
    <div className="h-auto w-full my-10 gap-8 flex flex-wrap justify-around items-center">
      <div className="">
        <Photo />
      </div>
      <Carousel className="w-1/2 max-w-sm">
        <CarouselContent>
          {previewArray.map((page, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-base font-serif">{page}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default PreviewTemplate