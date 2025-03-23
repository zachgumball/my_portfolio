import React from "react";
import { Code, Smartphone, Codepen, Globe, Layers, Atom } from "lucide-react";

const skills = [
  { name: "Mobile Developer", icon: <Smartphone size={28} stroke="#4CAF50" /> }, // Hijau
  { name: "Flutter", icon: <Codepen size={28} stroke="#02569B" /> }, // Biru Flutter
  { name: "HTML", icon: <Globe size={28} stroke="#E34F26" /> }, // Orange HTML
  { name: "Next.js", icon: <Layers size={28} stroke="#000000" /> }, // Hitam Next.js
  { name: "JavaScript", icon: <Code size={28} stroke="#F7DF1E" /> }, // Kuning JS
  { name: "React.js", icon: <Atom size={28} stroke="#61DAFB" /> }, // Biru React
];

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Skills</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md 
            transition-transform duration-300 transform hover:scale-110 hover:bg-blue-100 hover:shadow-lg"
          >
            {skill.icon}
            <p className="text-gray-700 mt-2 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
