import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../reuseables";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full  filter opacity-30"
            style={{
              background:
                i % 3 === 0 ? "#DA7BB3" : i % 3 === 1 ? "#376E6F" : "#2E151B",
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-teal-700 mb-4">
                Stanford MS Design Application
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
                From Numbers to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-[#376E6F]">
                  Narratives
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                Designing for People and Possibility
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-lg text-gray-600"
            >
              <p>
                Hello, I'm{" "}
                <span className="text-gray-900">Oluwafisayo Takuro</span>, a
                creative thinker, product builder, and frontend developer based
                in Nigeria.
              </p>
              <p>
                I learned about journals and financial statements in university,
                but creativity has always been my language. It's about empathy
                and innovation to me. Here, small ideas grow into powerful
                connections.
              </p>
              <p>
                I want to apply to Stanford's Master's in Design because of a
                desire to be more creative and learn how to better collaborate
                and lead. I want to learn to make products toward bringing
                people together to make the world more human.
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={scrollToAbout}
              className="group bg-gradient-to-r to-[#376E6F] from-[#DA7BB3] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              Explore My Story
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-600/20 mix-blend-multiply" />
              <ImageWithFallback
                src={"/assets/hero-image.jpeg"}
                alt="Oluwafisayo Takuro - Frontend Developer"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 border-4 border-pink-400 rounded-full opacity-50"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-teal-500 rounded-full opacity-50"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
