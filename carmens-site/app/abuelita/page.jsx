import Photo from "@/components/Photo";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const abulita = [
  "Abulita And The Magic Stove dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
];

const AbuelitaMagicStove = () => {

  return (
    <div className="h-auto w-full my-10 gap-8 flex flex-wrap justify-around items-center">
      <div className="">
        <Photo />
      </div>
      <Carousel className="w-1/2 max-w-sm">
        <CarouselContent>
          {abulita.map((page, i) => (
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
export default AbuelitaMagicStove;