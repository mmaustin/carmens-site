import MobileNav from "./MobileNav";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 backdrop-blur-md h-36">
      <div className="container hidden lg:flex items-center gap-8 rounded-full">
        <Navbar />
      </div>
      <div className="lg:hidden mt-6 md:mt-0">
        <MobileNav />
      </div>
    </header>
  )
}
export default Header;