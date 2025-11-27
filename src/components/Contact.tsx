import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const year = new Date().getFullYear();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "oluwafisayotakuro@gmail.com",
      href: "mailto:oluwafisayotakuro@gmail.com",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/oluwafisayo-takuro",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/Ifetakuro",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#1C3334] via-[#2F4454] to-[#2E151B] text-white relative overflow-hidden"
    >
      {/* Floating Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-25 blur-3xl "
            style={{
              background:
                i % 3 === 0 ? "#DA7B93" : i % 3 === 1 ? "#376E6F" : "#2E151B",
              width: `${Math.random() * 250 + 100}px`,
              height: `${Math.random() * 250 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle Gradient Motion Layer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(218,123,147,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(55,110,111,0.3) 0%, transparent 60%)",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#DA7B93]">
            Let's Create for People
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA7B93] to-[#376E6F] mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to meaningful collaborations, creative
            conversations, and opportunities to build solutions that make life
            better.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group block"
            >
              <div className="relative p-8 bg-[#1C3334]/70 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-[#DA7B93]/40 transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-6 shadow-xl mx-auto`}
                >
                  <link.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-2 text-center">{link.label}</h3>
                <p className="text-gray-300 text-center break-all">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#376E6F]/40 to-[#2E151B]/40 backdrop-blur-lg rounded-3xl border border-white/10">
            <h3 className="text-3xl mb-6 text-[#DA7B93]">
              Thank You for Taking the Time
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              This website is a window into my journey, creativity and passion
              for human centered design. Every choice I have made has prepared
              me for this next phase of my life. I am excited for the
              opportunity to learn, unlearn, grow, and add my voice to the
              Stanford design community.
            </p>
            <a
              href="mailto:oluwafisayotakuro@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DA7B93] to-[#376E6F] text-white rounded-full hover:shadow-2xl transition-all duration-300"
            >
              Get in Touch
              <Send className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>© {year} Oluwafisayo Ifeoluwa Takuro</p>
          <p className="mt-2 text-[#376E6F]">
            Designed for Stanford MS Design Program
          </p>
        </motion.div>
      </div>
    </section>
  );
}
