import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Presentation, Users, Zap } from "lucide-react";
import { Slideshow } from "../reuseables";

export function Competitions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const competitionsLessons = [
    {
      icon: Presentation,
      title: "Storytelling Matters",
      description:
        "The best solution means nothing if you can’t communicate its value clearly and convincingly.",
    },
    {
      icon: Users,
      title: "Collaboration Wins",
      description:
        "The most creative outcomes emerge when different perspectives work together toward one vision.",
    },
    {
      icon: Zap,
      title: "Think Fast, Build Smart",
      description:
        "Time constraints sharpen focus and bring out what truly matters in problem solving.",
    },
  ];

  const milestones = [
    {
      title: "NYSC, Business Proposal",
      icon: Zap,
      subtitle: "Finding My Voice on Stage",
      story: [
        "My first major stage experience came during my National Youth Service Corps in Ogun State, where I presented a business idea before Access Bank officials and fellow corps members.",
        "At first, I froze. But when I looked at my friends cheering, I was able to summon courage to start speaking. Speaking from the heart became my strength.",
        "When my name was called among the top five finalists, I realized that courage isn’t the absence of fear; it’s believing in your idea even when your voice shakes.",
        "That day taught me that creativity grows where there’s community support and self-belief.",
      ],
      slideshow: [
        { src: "/assets/nysc-1.jpeg", alt: "Preparing to pitch" },
        { src: "/assets/nysc-2.jpeg", alt: "On stage presentation" },
        { src: "/assets/nysc-3.jpeg", alt: "Audience engagement" },
        { src: "/assets/nysc-4.jpeg", alt: "Award ceremony" },
      ],
    },
    {
      title: "Technovation, Game of Codes",
      icon: Trophy,
      subtitle: "Designing for Impact",
      story: [
        "Winning the Technovation Award deepened my belief that technology must serve people, not the other way around.",
        "The project I designed focused on accessibility and inclusiveness; using simple, thoughtful design to solve real community challenges.",
        "I learned that design is not decoration, it is a language that connects people to possibilities and connections.",
      ],
      slideshow: [
        { src: "/assets/isw-1.jpeg", alt: "Team collaboration" },
        { src: "/assets/isw-2.jpeg", alt: "Product demo" },
        { src: "/assets/isw-3.jpeg", alt: "Presentation day" },
        { src: "/assets/isw-4.jpeg", alt: "Award ceremony" },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 text-white bg-gradient-to-br from-[#1C3334] via-[#2F4454] to-[#2E151B]"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#DA7B93]">
            Competitions That Shaped My Journey
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-[#DA7B93] to-[#376E6F]" />
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From pitching at NYSC camp to designing for Technovation, every
            challenge sharpened my empathy, creativity, and leadership through
            design.
          </p>
        </motion.div>

        {/* Milestones */}
        <div className="space-y-24 mb-24">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Story Card */}
              <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                <div className="inline-flex items-center gap-3 px-5 py-2 mb-5 rounded-full bg-gradient-to-r from-[#DA7B93] to-[#376E6F] text-black font-semibold">
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#DA7B93]">
                  {item.subtitle}
                </h3>
                <div className="space-y-4 text-gray-100 text-lg leading-relaxed">
                  {item.story.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              {/* Slideshow */}
              <Slideshow images={item.slideshow} />
            </motion.div>
          ))}
        </div>

        {/* Lessons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl text-center mb-12 font-bold text-[#DA7B93]">
            What Competitions Taught Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {competitionsLessons.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#376E6F]/40 to-[#1C3334]/40 border border-[#DA7B93]/30 hover:bg-[#DA7B93]/20 hover:scale-105 transition-all duration-300"
              >
                <learning.icon className="w-12 h-12 text-[#DA7B93] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {learning.title}
                </h4>
                <p className="text-gray-300">{learning.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
