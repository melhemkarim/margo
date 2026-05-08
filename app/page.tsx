"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const schedule = [
  {
    time: "10:30 AM",
    title: "PICK U UP FROM HOME",
    emoji: "🚗",
  },
  {
    time: "11:00 AM",
    title: "BREAKFAST",
    
    emoji: "☕",
  },
  {
    time: "11:30 AM — 12:00 PM",
    title: "LE CAMP",
    
    emoji: "🌼",
  },
];


const fallingFlowers = [
  { left: "5%", duration: 12, delay: 0 },
  { left: "12%", duration: 14, delay: 2 },
  { left: "20%", duration: 11, delay: 1 },
  { left: "28%", duration: 16, delay: 3 },
  { left: "36%", duration: 13, delay: 0 },
  { left: "44%", duration: 15, delay: 4 },
  { left: "52%", duration: 12, delay: 2 },
  { left: "60%", duration: 17, delay: 1 },
  { left: "68%", duration: 14, delay: 5 },
  { left: "76%", duration: 13, delay: 2 },
  { left: "84%", duration: 16, delay: 0 },
  { left: "92%", duration: 15, delay: 3 },
];

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const launchConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 2,
        spread: 80,
        startVelocity: 10,
        ticks: 200,
        origin: {
          x: Math.random(),
          y: -0.1,
        },
        colors: ["#f4d35e", "#ffffff", "#ffe8a3"],
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdf6] text-[#3f3a32]">

      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-yellow-200/40 blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-3xl" />

      {/* FALLING FLOWERS */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {fallingFlowers.map((flower, i) => (
    <motion.div
      key={i}
      className="absolute text-2xl opacity-70 md:text-4xl"
      style={{
        left: flower.left,
      }}
      initial={{
        y: -100,
      }}
      animate={{
        y: "120vh",
        rotate: [0, 360],
      }}
      transition={{
        duration: flower.duration,
        repeat: Infinity,
        delay: flower.delay,
        ease: "linear",
      }}
    >
      <img
  src="/daisy.png"
  alt="daisy"
  className="h-10 w-10 object-contain"
/>
    </motion.div>
  ))}
</div>

      {/* ENVELOPE INTRO */}
      <AnimatePresence>
        {!opened && (
          <motion.section
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-[#fffdf6]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer"
              onClick={() => setOpened(true)}
            >
              <div className="flex h-[220px] w-[320px] items-center justify-center rounded-2xl border border-[#eadca8] bg-white shadow-2xl">
                <div className="text-center">
                  <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#9b8e73]">
                    Open Invitation
                  </p>

                  <h1 className="font-serif text-4xl">
                    Margo’s Day <img
  src="/daisy.png"
  alt="daisy"
  className="h-10 w-10 object-contain"
/>
                  </h1>

                  <p className="mt-4 text-sm text-[#6f6758]">
                    Click to open
                  </p>
                </div>
              </div>

              
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        {opened && !showSchedule && (
          <motion.section
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
          >

            {/* HAPPY BIRTHDAY */}
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#9b8e73] sm:text-sm">
              HAPPY BIRTHDAY MARGO <img
  src="/daisy.png"
  alt="daisy"
  className="h-10 w-10 object-contain"
/>
            </p>

            {/* TITLE */}
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="font-serif text-5xl font-bold leading-none sm:text-6xl md:text-[9rem]"
            >
              MARGO’S DAY
            </motion.h1>

            {/* SUBTITLE */}
            <p className="mx-auto mt-8 max-w-2xl px-2 text-base leading-relaxed text-[#6f6758] sm:text-lg md:text-2xl">
              A dreamy birthday escape
            </p>

            

            {/* CAKE */}
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-12 text-7xl md:text-8xl"
            >
              🎂
            </motion.div>

            {/* BUTTON */}
            <button
              onClick={() => setShowSchedule(true)}
              className="mt-12 rounded-full bg-[#f4d35e] px-8 py-5 text-xs font-black tracking-[0.25em] text-[#3d372b] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#f1c93b] sm:text-sm"
            >
              CHECK THE SCHEDULE
            </button>
          </motion.section>
        )}
      </AnimatePresence>

      {/* SCHEDULE PAGE */}
      <AnimatePresence>
        {opened && showSchedule && (
          <motion.section
            key="schedule"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen px-5 py-20 md:px-10"
          >
            {/* BACK BUTTON */}
            <button
              onClick={() => setShowSchedule(false)}
              className="mb-10 rounded-full border border-[#eadca8] bg-white/60 px-5 py-3 text-sm shadow-lg backdrop-blur-xl transition hover:scale-105"
            >
              ← Back
            </button>

            {/* HEADER */}
            <div className="mx-auto mb-20 max-w-5xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#9b8e73] sm:text-sm">
                HAPPY BIRTHDAY MARGO <img
  src="/daisy.png"
  alt="daisy"
  className="h-10 w-10 object-contain"
/>
              </p>

              <h2 className="font-serif text-5xl font-bold md:text-7xl">
                The Schedule
              </h2>
            </div>

            {/* SCHEDULE CARDS */}
            <div className="mx-auto max-w-5xl space-y-8">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-[35px] border border-white/50 bg-white/60 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-10"
                >
                  {/* FLOWERS */}
                  <div className="absolute left-4 top-4 text-4xl opacity-20">
                    <img
  src="/daisy.png"
  alt="daisy"
  className="h-10 w-10 object-contain"
/>
                  </div>

                  <div className="absolute bottom-4 right-4 text-5xl opacity-20">
                    <img
  src="/daisy.png"
  alt="daisy"
  className="h-10 w-10 object-contain"
/>
                  </div>

                  <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="w-full">

                      {/* TIME */}
                      <p className="mb-4 text-xl font-extrabold uppercase tracking-[0.25em] text-[#7c6f56] md:text-2xl">
                        {item.time}
                      </p>

                      {/* TITLE */}
                      <h3 className="text-3xl font-black leading-tight md:text-5xl">
                        {item.title}
                      </h3>

                     
                    </div>

                    {/* EMOJI */}
                    <div className="self-end text-6xl md:self-auto md:text-7xl">
                      {item.emoji}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
{/* DRESS CODE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[35px] border border-white/50 bg-white/60 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-12"
>
  {/* FLOWERS */}
  <div className="absolute left-5 top-5 opacity-20">
    <img
      src="/daisy.png"
      alt="daisy"
      className="h-12 w-12 object-contain"
    />
  </div>

  <div className="absolute bottom-5 right-5 opacity-20">
    <img
      src="/daisy.png"
      alt="daisy"
      className="h-14 w-14 object-contain"
    />
  </div>

  <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#9b8e73] sm:text-sm">
    Dress Code
  </p>

  <h3 className="font-serif text-4xl font-bold md:text-6xl">
    JEANS & A TOP
  </h3>

  
</motion.div>
            {/* CONFETTI BUTTON */}
            <div className="mt-20 flex justify-center">
              <button
                onClick={launchConfetti}
                className="rounded-full bg-[#f4d35e] px-10 py-5 text-sm font-black uppercase tracking-[0.3em] text-[#3d372b] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#f1c93b]"
              >
                Celebrate Margo 🎉
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}