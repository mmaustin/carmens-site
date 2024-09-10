import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="border sticky top-0 bg-chart-5/20 opacity-80 h-28">
      {/* <p className="px-8">Some Stuff</p>
      <p className="px-8">Some Stuff</p>
      <p className="px-8">Some Stuff</p> */}
      <div className="flex flex-col items-center md:flex-row justify-between">
        <Navbar />
      </div>
    </header>
  )
}
export default Header;