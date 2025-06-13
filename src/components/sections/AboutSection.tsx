"use client"
import { motion } from "framer-motion"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-700 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-700 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            I'm a passionate Software Engineer specializing in frontend and mobile development. With expertise in React,
            React Native, TypeScript, and modern JavaScript frameworks, I build responsive, performant, and visually appealing applications
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden border border-white/10">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    My Journey
                  </h3>
                  <p className="text-gray-300 mb-4">
                    With over 5 years of experience in software development, I've worked on a diverse range of projects
                    from mobile apps to web platforms.
                  </p>
                  <p className="text-gray-300 mb-4">
                    I'm passionate about creating intuitive user interfaces and seamless experiences that solve
                    real-world problems.
                  </p>
                  <p className="text-gray-300">
                    My expertise spans across frontend and mobile development, with a strong focus on React, React
                    Native, and modern JavaScript frameworks.
                  </p>
                </div>
              </div>
            \
