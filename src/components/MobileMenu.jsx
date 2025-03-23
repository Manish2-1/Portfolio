import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center 
          backdrop-blur-lg bg-[rgba(10,10,10,0.6)] shadow-lg"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-all duration-300"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col items-center space-y-6">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-3xl font-semibold text-white hover:text-cyan-400 transition-all duration-300 tracking-wide"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
