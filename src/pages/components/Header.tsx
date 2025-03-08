import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mapping teks navigasi ke ID yang benar
  const navItems = [
    { label: "Tentang", id: "about" },
    { label: "Proyek", id: "projects" },
    { label: "Kontak", id: "contact" },
  ];

  // Fungsi smooth scroll saat tombol ditekan
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset untuk header
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Heri&apos;s Portfolio</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="relative px-3 py-1 hover:text-blue-600 transition-colors duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
                    after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
