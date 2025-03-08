import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "Website Yayasan Tunas Insan Mulia", 
    description: "Website resmi yayasan untuk memberikan informasi dan donasi secara online.", 
    link: "https://github.com/zachgumball/kape" // Ganti dengan link GitHub proyek asli
  },
  { 
    title: "Flutter AR Learning App", 
    description: "Aplikasi pembelajaran berbasis Flutter yang dilengkapi teknologi Augmented Reality (AR) untuk pengalaman belajar yang lebih interaktif.", 
    link: "https://github.com/zachgumball/my_notes" // Ganti dengan link GitHub proyek asli
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Proyek Saya</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-r from-blue-50 to-blue-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 font-medium hover:underline mt-4 inline-block"
            >
              Cek Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
