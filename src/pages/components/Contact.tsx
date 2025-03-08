import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const contacts = [
  { name: "GitHub", icon: <FaGithub size={24} />, link: "https://github.com/zachgumball" },
  { name: "WhatsApp", icon: <FaWhatsapp size={24} />, link: "https://wa.me/6285882218900" }, 
  { name: "LinkedIn", icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/heri-heri-199931345/" },
  { name: "Instagram", icon: <FaInstagram size={24} />, link: "https://www.instagram.com/herivixinouz/" },
  { name: "Facebook", icon: <FaFacebook size={24} />, link: "https://web.facebook.com/zixionz/" },
];

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Hubungi Saya</h2>
      <p className="text-gray-600 mt-4">Jangan ragu untuk menghubungi saya melalui platform berikut:</p>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        {contacts.map((contact, index) => (
          <a 
            key={index} 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-white shadow-md p-3 rounded-lg transition-all 
            hover:bg-blue-500 hover:text-white hover:shadow-lg transform hover:-translate-y-1"
          >
            {contact.icon}
            <span className="font-medium">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
