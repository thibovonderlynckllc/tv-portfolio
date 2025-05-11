import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-neutral-950 sm:py-12 bg-neutral-950">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 text-center">
        <Link href="#header" className="text-2xl sm:text-3xl md:text-4xl font-normal hover:text-orange-500 transition-colors duration-300">Thibo</Link>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <Link href="#skills" className="text-base font-normal relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link href="#projects" className="text-base font-normal relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link href="#testimonials" className="text-base font-normal relative group">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link href="#contact" className="text-base font-normal relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-white"><span className="text-white/70">Thibo Vonderlynck</span> &copy; All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;