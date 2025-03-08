import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-6 text-center border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Heri</span>.  
        Dibuat dengan <span className="text-blue-600 font-medium">Next.js</span> & <span className="text-blue-600 font-medium">Tailwind CSS</span>.
      </p>
    </footer>
  );
};

export default Footer;
