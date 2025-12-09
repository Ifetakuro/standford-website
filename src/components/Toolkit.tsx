import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Users,
  MessageCircle,
  Crown,
  Heart,
  Lightbulb,
} from "lucide-react";

export function Toolkit() {
  const ref = useRef(null);

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and accessible web experiences with React and Next.js, merging function with aesthetic clarity.",
      color: "from-[#376E6F] to-[#1C3334]",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Coordinating diverse teams across disciplines, encouraging communication that turns ideas into outcomes.",
      color: "from-[#2F4454] to-[#376E6F]",
    },
    {
      icon: MessageCircle,
      title: "Storytelling & Visual Thinking",
      description:
        "Translating complex ideas into intuitive visuals and narratives that people connect with instantly.",
      color: "from-[#DA7B93] to-[#376E6F]",
    },
    {
      icon: Crown,
      title: "Leadership",
      description:
        "Guiding projects, mentoring interns, and inspiring teams through empathy and shared vision.",
      color: "from-[#1C3334] to-[#376E6F]",
    },
    {
      icon: Heart,
      title: "Empathy & Creativity",
      description:
        "Designing with sensitivity to human needs, turning technology into tools that truly serve people.",
      color: "from-[#DA7B93] to-[#2E151B]",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Balancing analytical depth and creative imagination to approach design challenges with clarity and courage.",
      color: "from-[#376E6F] to-[#2F4454]",
    },
  ];

  return (
    <section
      id="toolkit"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#1C3334] via-[#2F4454] to-[#2E151B] text-white relative overflow-hidden"
    >
      {/* Animated soft background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-25"
            style={{
              background:
                i % 3 === 0 ? "#DA7B93" : i % 3 === 1 ? "#376E6F" : "#2E151B",
              width: `${Math.random() * 300 + 150}px`,
              height: `${Math.random() * 300 + 150}px`,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#DA7B93]">
            What I Bring to Stanford
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA7B93] to-[#376E6F] mx-auto mb-8" />
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            My toolkit blends design, leadership, and technology in order to
            grow through Stanford’s program.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/15 transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 shadow-xl`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl mb-3 text-[#DA7B93] font-semibold">
                  {skill.title}
                </h3>
                <p className="text-gray-200">{skill.description}</p>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#376E6F]/40 to-[#1C3334]/40 backdrop-blur-xl rounded-3xl border border-[#DA7B93]/30">
            <h3 className="text-3xl mb-6 text-center text-[#DA7B93] font-bold">
              Ready to Learn and Lead
            </h3>
            <p className="text-lg text-gray-200 text-center mb-6">
              The MS Design Program at Stanford is the environment I have been
              seeking to refine my approach to complex systems and user centered
              solutions. Its project based structure and interdisciplinary focus
              align with how I learn.
            </p>
            <p className="text-lg text-gray-200 text-center mb-6">
              I look forward to contributing to the Stanford community by
              working with peers on interdisciplinary projects, sharing insights
              on design for social impact, and mentoring others who aim to
              create meaningful technology solutions. These experiences have
              shown the importance of structured design training to expand my
              impact.
            </p>
            <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#DA7B93] to-[#376E6F] font-medium">
              I am convinced that the hands-on learning culture and
              interdisciplinary resources in the MS Design Program at Stanford
              will equip me with the methods and creative leadership needed to
              design solutions that empower communities. From building small
              prototypes as a child to translating complex financial systems
              into clear human centered products, my path has shaped my drive to
              use design to improve society. Learning from Stanford faculty and
              working with peers across disciplines will prepare me to grow as a
              designer and product leader who drives design innovation in
              Nigeria and across the broader African continent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
