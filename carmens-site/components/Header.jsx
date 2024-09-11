import MobileNav from "./MobileNav";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="border sticky top-0 bg-chart-5/20 opacity-80 h-28">
      {/* <p className="px-8">Some Stuff</p>
      <p className="px-8">Some Stuff</p>
      <p className="px-8">Some Stuff</p> */}
      <div className="hidden lg:flex items-center gap-8">
        <Navbar />
      </div>
      <div className="lg:hidden mt-6 md:mt-0">
        <MobileNav />
      </div>
    </header>
  )
}
export default Header;