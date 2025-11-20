import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Music,
  Wrench,
  Eye,
  Lightbulb,
  Wallet,
  GraduationCap,
  ShoppingBag,
  Coins,
} from "lucide-react";
import { ImageWithFallback } from "../reuseables";

export function Projects() {
  const ref = useRef(null);

  const mainProjects = [
    {
      title: "The Clout",
      role: "Co-Founder & Frontend Developer",
      description:
        "A music rating platform that helps artists grow through community-driven feedback. As co-founder, I helped design the product's concept, layout, and user flow. The app is in development, bringing creativity, analytics, and emotion together.",
      focus: "User engagement, Product design, Community-driven development",
      icon: Music,
      image: "/assets/the-clout.png",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "WorkaFix",
      role: "Founder & Frontend Developer",
      description:
        "WorkaFix connects users with trusted artisans and service providers across Nigeria. I founded the project to make it easier for people to find skilled workers they can trust. I lead a team of backend engineers, QA testers, and designers.",
      focus: "Design thinking, Leadership, Product development, Teamwork",
      icon: Wrench,
      image: "/assets/worka-fix.png",
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "EyeCare",
      role: "Frontend Developer",
      description:
        "An app designed to help users care for their eyesight through reminders and daily wellness tips. I worked on user flow and interface design, learning how to simplify health information so it feels personal and approachable.",
      focus: "Empathy-driven design, Health accessibility",
      icon: Eye,
      image: "/assets/eye-care.png",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Technovation @ Interswitch",
      role: "Team Co-Lead and Product Designer",
      description:
        "Co-led a team at a Technovation competition hosted by Interswitch Group, where we built a working prototype for a digital product and presented it to the entire organization. That experience helped me discover how design, storytelling, and collaboration can inspire confidence.",
      focus: "Rapid prototyping, Presentation design, Teamwork",
      icon: Lightbulb,
      image: "/assets/q-foods.png",
      color: "from-orange-500 to-red-600",
    },
  ];

  const sideProjects = [
    {
      name: "Learnbeta",
      icon: GraduationCap,
      description: "Educational platform",
      story:
        "Learnbeta was where I rediscovered the power of thoughtful design in learning. I rebuilt the entire user interface and redesigned the experience for flexibility and clarity. My aim was to create a platform where learners could grow at their own rhythm without anxiety or pressure. I learned that empathy in design is not just about appearance, but about understanding how people process information. Each layout, button, and interaction was a step toward making learning feel less like an obligation and more like self-discovery.",
      link: "https://learnbeta.ng",
    },
    {
      name: "Finopay",
      icon: Coins,
      description: "Payment processing platform",
      story:
        "At Finopay, I was part of a team building systems that make digital payments easier for small businesses. I designed and developed the landing page and collaborated on the merchant and admin dashboards. Beyond visuals, I focused on reducing friction in how users understood financial data and built trust through simplicity. Working closely with designers and backend engineers, I saw how small interface decisions could influence real-world confidence. This project deepened my respect for the relationship between trust, clarity, and design.",
      link: "https://finopay.com",
    },
    {
      name: "Asapuu",
      icon: ShoppingBag,
      description: "Quick commerce service",
      story:
        "Asapuu was an experiment in speed and connection. I helped design and build both the web and mobile applications, ensuring the experience was fast without feeling mechanical. I also mentored the backend developer, sharing basic frontend principles to strengthen our collaboration. Through this, I learned that leadership in design often comes from openness; helping others grow makes the final product stronger. Asapuu taught me that behind every ‘fast’ experience, there must be a thoughtful structure that keeps users grounded.",
      link: "https://asapuu.com",
    },
    {
      name: "Cashtella",
      icon: Wallet,
      description: "Financial management solution",
      story:
        "Cashtella was built from the ground up, shaping it into a stable and scalable product. Along the way, I supervised an intern, delegating development tasks, reviewing his code, and guiding him through design and logic decisions. Mentoring him reminded me that leadership is not about control, but about trust and clarity. I also led biweekly feedback sessions with stakeholders and designers, where I learned to balance technical precision with emotional understanding. When I eventually handed the product over to a Canadian team, I realized how design maturity often means building scalable systems and people that can thrive independently.",
      link: "https://cashtella.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Building Products That Connect and Empower People
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto" />
        </motion.div>

        {/* Main Projects */}
        <div className="space-y-16 mb-20">
          {mainProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  />
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full md:h-96 h-80  object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10`}
                    />
                  </div>
                </div>
              </div>

              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full`}
                  >
                    <project.icon className="w-5 h-5" />
                    <span>{project.role}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600">{project.description}</p>
                  <div className="pt-4">
                    <p className="text-purple-700">
                      <span className="opacity-70">Focus:</span> {project.focus}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl text-gray-900 mb-4 text-center">
            Side Projects & Explorations
          </h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Each side project represents a different challenge I wanted to
            solve, a skill I wanted to learn, or a community I wanted to serve.
            They're experiments in empathy and innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {sideProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <project.icon className="w-7 h-7 text-[#DA7B93]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 mb-1 flex items-center gap-2">
                      {project.name}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#DA7B93] hover:text-pink-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 inline-block" />
                        </a>
                      )}
                    </h4>
                    <p className="text-[#DA7B93]">{project.description}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.story}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community & Mentorship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl text-gray-900 mb-6">
              Community & Mentorship
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              I participate in local tech bootcamps, mentoring young developers
              and designers. Helping others discover design and technology has
              strengthened my communication, leadership, and creative thinking
              skills.
            </p>
            <p className="text-gray-600">
              These experiences remind me that design is not just about creating
              products, it's about building communities and empowering people to
              realize their potential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
