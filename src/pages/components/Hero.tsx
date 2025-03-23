import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Tipe data untuk animasi panah
type ArrowAnimation = {
  x: number[];
  y: number[];
  rotate: number[];
  scale: number[];
  opacity: number[];
  transition: {
    repeat: number;
    duration: number;
    ease: string;
  };
};

// Tipe data untuk objek panah
type Arrow = {
  fontSize: number;
  left: number;
  top: number;
  type: string;
  animation: ArrowAnimation;
};

// Fungsi untuk membuat array dengan angka acak yang tetap di client
const generateArrows = (count: number): Arrow[] =>
  Array.from({ length: count }, () => ({
    fontSize: Math.random() * 35 + 15, // Ukuran panah acak antara 15px - 50px
    left: Math.random() * 100, // Posisi X dalam %
    top: Math.random() * 100, // Posisi Y dalam %
    type: ["➤", "➥", "➔", "➜", "➝"][Math.floor(Math.random() * 5)], // Bentuk panah
    animation: {
      x: [Math.random() * 600 - 300, Math.random() * 600 - 300], // Gerakan horizontal
      y: [Math.random() * 600 - 300, Math.random() * 600 - 300], // Gerakan vertikal
      rotate: [Math.random() * 360, Math.random() * 360], // Rotasi acak
      scale: [Math.random() * 0.8 + 0.6, Math.random() * 1.4], // Skala acak antara 0.6 - 1.4
      opacity: [0.1, 0.8, 0.1], // Muncul & menghilang
      transition: {
        repeat: Infinity,
        duration: Math.random() * 4 + 3, // Durasi 3 - 7 detik
        ease: "linear",
      },
    },
  }));

const Hero = () => {
  const [arrows, setArrows] = useState<Arrow[]>([]);

  useEffect(() => {
    setArrows(generateArrows(15)); // Hanya dijalankan di client
  }, []);

  return (
    <section className="relative bg-primary h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      {/* Animasi Panah */}
      {arrows.map((arrow, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400 opacity-30"
          style={{
            fontSize: `${arrow.fontSize}px`,
            left: `${arrow.left}%`,
            top: `${arrow.top}%`,
          }}
          animate={arrow.animation}
        >
          {arrow.type}
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
          priority
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
        href="/HERI_CV.pdf"
        download="CV_Heri.pdf"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
      >
        Unduh CV
      </motion.a>
    </section>
  );
};

export default Hero;
