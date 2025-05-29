"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-sky-100/20 dark:from-sky-900/20 via-transparent to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative group">              
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-white">
                <Image
                  src="/Images/me.png"
                  alt="Nazril Acil"
                  width={600}
                  height={700}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I&apos;m Nazril Acil, a passionate full-stack web developer skilled in both frontend and backend technologies. I specialize in building responsive, clean, and high-performance websites and applications that provide real value to users and businesses.
              </p>
              
              <p>
              On the frontend, I enjoy crafting seamless user interfaces with HTML, CSS, JavaScript, and modern frameworks like React. On the backend, I work with Node.js, Express, and MongoDB to create robust APIs and server-side solutions.
              </p>

              <p>
                I thrive in collaborative environments and love solving problems with code. Whether it&apos;s developing a school information system, an admin dashboard, or a personalized web experience — I always aim for clarity, scalability, and impact.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Next.js', 'TypeScript', 'Node.js', 
                  'TailwindCSS', 'MongoDB', 'AWS', 'Docker'
                ].map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-sky-500/20 
                    text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:ring-sky-500/40 
                    shadow-sm hover:shadow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {[
                { number: '3+', label: 'Years', color: 'from-sky-600 to-indigo-600' },
                { number: '50+', label: 'Projects', color: 'from-blue-600 to-cyan-600' },
                { number: '30+', label: 'Clients', color: 'from-emerald-600 to-teal-600' },
                { number: '99%', label: 'Success', color: 'from-orange-600 to-amber-600' }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 ring-1 ring-gray-200/50 
                  dark:ring-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
