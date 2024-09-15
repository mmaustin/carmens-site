import MobileNav from "./MobileNav";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 bg-chart-5/20 opacity-80 h-28">
      <div className="container border border-red-700  hidden lg:flex items-center gap-8">
        <Navbar />
      </div>
      <div className="lg:hidden mt-6 md:mt-0">
        <MobileNav />
      </div>
    </header>
  )
}
export default Header;