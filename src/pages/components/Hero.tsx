import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Fungsi untuk membuat animasi panah lebih acak dan tidak terlihat berulang
const generateArrowAnimation = () => ({
  x: [Math.random() * 600 - 300, Math.random() * 600 - 300], // Lebih luas & acak
  y: [Math.random() * 600 - 300, Math.random() * 600 - 300], // Bisa naik, turun, dan diagonal
  rotate: [Math.random() * 360, Math.random() * 360], // Rotasi lebih random
  scale: [Math.random() * 0.8 + 0.6, Math.random() * 1.4], // Skala acak antara 0.6 - 1.4
  opacity: [0.1, 0.8, 0.1], // Muncul & menghilang lebih smooth
  transition: {
    repeat: Infinity,
    duration: Math.random() * 4 + 3, // Durasi 3 - 7 detik agar lebih natural
    ease: "linear",
  },
});

const Hero = () => {
  return (
    <section className="relative bg-primary h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      {/* Animasi Panah yang Lebih Random */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400 opacity-30"
          style={{
            fontSize: `${Math.random() * 35 + 15}px`, // Ukuran panah lebih beragam
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={generateArrowAnimation()}
        >
          {["➤", "➥", "➔", "➜", "➝"][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Foto Profil */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Image
          src="/profile.jpg"
          alt="Foto Profil Heri"
          width={150}
          height={150}
          className="rounded-full border-4 border-accent shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-50 animate-pulse"></div>
      </motion.div>

      {/* Nama & Deskripsi */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl font-bold text-gray-800 mt-4"
      >
        Halo, Saya{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
          Heri
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg text-gray-600 mt-2"
      >
        Web & Mobile Developer 🚀
      </motion.p>

      {/* Tombol CTA */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all 
        duration-300 hover:scale-105"
      >
        Lihat Proyek
      </motion.a>
    </section>
  );
};

export default Hero;
