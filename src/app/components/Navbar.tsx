const Navbar = () => {
  return (
    <nav className="container mx-auto pt-12 flex justify-between items-center">
      <div>
        <h2 className="text-4xl font-normal">Thibo</h2>
      </div>
      <div className="flex gap-12 items-center">
        <a href="#" className="text-xl font-normal">
          Services
        </a>
        <a href="#" className="text-xl font-normal">
          Portfolio
        </a>
        <a href="#" className="text-xl font-normal">
          Skills
        </a>
        <a href="#" className="text-xl font-normal">
          Testimonials
        </a>
        <a href="#" className="text-xl font-normal">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full">Hire me</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
