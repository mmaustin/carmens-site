import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 backdrop-blur-md h-28 bg-white z-50">
      <div className="container hidden md:flex items-center gap-8 rounded-full">
        <Navbar />
      </div>
      <div className="md:hidden mt-6 md:mt-0">
        <MobileNav />
      </div>
    </header>
  )
}
export default Header;