import Photo from "@/components/Photo";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const uptownMenace = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum minima modi eaque vitae. Quidem, autem maxime? Ratione assumenda provident, exercitationem eligendi quas, deleniti officia praesentium suscipit reprehenderit, neque vel!"
];

const UptownMenace = () => {

  return (
    <div className="h-auto w-full my-10 gap-8 flex flex-wrap justify-around items-center">
      <div className="">
        <Photo />
      </div>
      <p className="w-[250px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nostrum accusamus amet ut eaque minima perferendis quae ipsa labore, rem mollitia magnam omnis veniam magni temporibus facilis dolor officia. Eaque.</p>
    </div>
  )
}
export default UptownMenace;