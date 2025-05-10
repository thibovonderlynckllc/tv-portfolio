const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 bg-neutral-950">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">Thibo</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <a href="#" className="text-base md:text-lg font-normal hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="text-base md:text-lg font-normal hover:text-orange-500 transition-colors">Services</a>
          <a href="#" className="text-base md:text-lg font-normal hover:text-orange-500 transition-colors">Portfolio</a>
          <a href="#" className="text-base md:text-lg font-normal hover:text-orange-500 transition-colors">Skills</a>
          <a href="#" className="text-base md:text-lg font-normal hover:text-orange-500 transition-colors">Contact</a>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-white"><span className="text-white/70">Thibo Vonderlynck</span> &copy; All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;