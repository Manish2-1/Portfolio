import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white pt-16 px-4"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          {/* Name & Heading with Gradient Effect */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            Hello, I'm <span className="text-white">Manish K.C</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            I’m a full-stack developer passionate about building sleek,
            high-performance web applications that deliver exceptional user
            experiences.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300
              hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] hover:-translate-y-1"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="relative inline-block border border-blue-500 text-blue-500 py-3 px-8 rounded-lg font-semibold transition-all duration-300
              hover:bg-blue-500 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
