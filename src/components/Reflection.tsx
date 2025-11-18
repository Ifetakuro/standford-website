import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export function Reflection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-[#DA7B93] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Quote className="w-12 h-12 text-white" />
          </div>

          <blockquote className="text-3xl md:text-4xl text-gray-800 mb-8 italic leading-relaxed">
            "My grandmother's actions taught me that creativity begins with
            care. She never called it design, but she always made life easier
            and warmer for others."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-lg text-gray-600 mb-12"
        >
          <p>
            As I watched her growing up, I learned that creativity is not just
            about aesthetics, its about fixing little things around you, making
            people around you comfortable, understanding, and making people feel
            loved.
          </p>
          <p>
            That's the core philosophy behind everything I do. I am always
            working to make technology more human through building digital
            products, leading teams, or mentoring young creators.
          </p>
          <p className="text-xl text-gray-800">
            Stanford feels like the next step in that adventure, a place for
            creativity, leadership and empathy to move design forward.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Human-Centered",
              description: "Designing for real people with real needs",
            },
            {
              title: "Collaborative",
              description: "Building together is stronger than building alone",
            },
            {
              title: "Impact-Driven",
              description: "Creating solutions that make a difference",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
