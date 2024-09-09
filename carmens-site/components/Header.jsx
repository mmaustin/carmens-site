import { Button } from "./ui/button";

Button


const Header = () => {
  return (
    <div className="border border-blue-600 bg-chart-5">
      <Button variant="destructive" size="icon" className="border border-blue-700 text-red-700" >
        press play
      </Button>
    </div>
  )
}
export default Header;