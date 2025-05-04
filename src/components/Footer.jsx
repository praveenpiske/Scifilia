const Footer = () => {
    return (
      <footer className="bg-[#050816] text-gray-400 py-10 border-t border-gray-700 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Title */}
          <div className="text-center md:text-left">
            <h2 className="text-xl text-white font-bold">SciFilia</h2>
            <p className="text-sm mt-1">Where Science Meets Fantasy</p>
          </div>
  
          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/explore" className="hover:text-white transition">Explore</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
          </div>
  
          {/* Socials or Credits */}
          <div className="text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} SciFilia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  