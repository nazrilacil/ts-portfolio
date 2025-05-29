"use client";

import { log } from "console";
import { motion } from "framer-motion";

export default function Hero() {

  const logos = [
    '/kreate.jpeg',
    '/icx.png',
    '/finfolk.png'
  ]

  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/4 w-10 h-10 md:w-96 md:h-96 bg-sky-600/5 dark:bg-sky-600/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-80 md:h-80 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full filter blur-3xl animate-pulse delay-700" />

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center lg:items-start">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-center lg:text-left"
          >
            {/* Pre-title */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-sky-500/5 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full text-sm font-medium mb-6"
            >
              Full Stack Developer
            </motion.span>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                  Nazril Acil
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl mt-8 mb-10 leading-relaxed max-w-2xl">
              Educator, Software Engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.a
              href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-sky-500/25"
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  View Projects
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6285175414118"
                className="group px-8 py-4 bg-transparent border border-sky-500/20 dark:border-sky-500/30 hover:border-sky-500 text-sky-600 dark:text-sky-400 rounded-xl transition-all duration-300 hover:bg-sky-500/5 dark:hover:bg-sky-500/10"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </span>
              </motion.a>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {logos.map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-sky-500/20 dark:border-sky-500/30 bg-sky-500/40 dark:bg-sky-900/30"
                  >
                  <img src={src} alt={`Logo ${i + 1}`} className="h-9 cover rounded-full"/>
                  </div>
                ))}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <span className="text-sky-600 dark:text-sky-400 font-semibold">
                  50+
                </span>{" "}
                Projects Completed
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
