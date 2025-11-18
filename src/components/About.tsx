import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Heart,
  Lightbulb,
  Users,
  Church,
  Award,
  Building2,
} from "lucide-react";
import { ImageWithFallback } from "../reuseables";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    {
      icon: BookOpen,
      title: "Accounting Foundation",
      description:
        "Learned discipline, precision, and structure through numbers.",
    },
    {
      icon: Church,
      title: "Family & Faith",
      description:
        "Growing up in a family and church that valued service and community.",
    },
    {
      icon: Heart,
      title: "Teaching During Lockdown",
      description:
        "Taught preschool children, discovering empathy's role in creativity.",
    },
    {
      icon: Award,
      title: "NYSC Competition",
      description: "Showcased innovation during national service year.",
    },
    {
      icon: Building2,
      title: "Interswitch Intern",
      description:
        "Competed in Technovation, learning structure and collaboration.",
    },

    {
      icon: Users,
      title: "Tech Communities",
      description:
        "Joined bootcamps and hackathons, teaching myself frontend development.",
    },
    {
      icon: Lightbulb,
      title: "Design Leadership",
      description:
        "Leading projects that merge design, technology, and purpose.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            From Accounting to UI/UX Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r to-[#376E6F] from-[#DA7BB3] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600"
          >
            <p>
              My journey began in accounting, where I learned discipline,
              precision, and structure. But as I worked through numbers, I
              became more curious about individuals, about how creativity and
              technology could make their lives better.
            </p>
            <p>
              <span className="text-gray-900">
                Growing up, my family and church taught me the value of service.
              </span>{" "}
              Watching my grandmother fix the head dressers, torn pillows and
              dresses in the house with care, seeing my family support our
              community, and participating in church activities showed me that
              the best creations are those that bring people together and make
              life warmer for others.
            </p>
            <p>
              During the lockdown, the preschool near my home lost its teachers.
              I volunteered to teach. The children's curiosity reminded me why
              creativity matters. I learned patience, empathy, and how to turn
              confusion into understanding. Those lessons still shape how I
              design today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-lg text-gray-600"
          >
            <p>
              <span className="text-gray-900">During my NYSC year,</span> I
              participated in competitions that challenged me to apply my skills
              to real-world problems. Each competition taught me how to think
              quickly, collaborate under pressure, and create solutions that
              matter to communities.
            </p>
            <p>
              <span className="text-gray-900">
                During my internship at Interswitch,
              </span>{" "}
              I discovered the power of structure and innovation working
              hand-in-hand. When the Technovation competition was announced, my
              team and I built a prototype that we presented to the entire
              organization. Standing in front of those experienced
              professionals, I learned that design isn't just about making
              things, it's about telling stories that inspire action. Trust me,
              I didnt have the best idea but I was able to own it and lets say i
              also was able to make the audience nad judges laugh.
            </p>

            <p>
              Today, I lead and collaborate on projects that merge design,
              leadership, and purpose. Each project is an opportunity to make
              technology more human, to bridge the gap between what's possible
              and what people need.
            </p>
            <blockquote className="border-l-4 border-[#DA7B93] pl-6 italic text-gray-700">
              "My grandmother's actions taught me that creativity begins with
              care. She never called it design, but she always made life easier
              and warmer for others."
            </blockquote>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                <milestone.icon className="w-6 h-6 text-[#2F4454]" />
              </div>
              <h3 className="text-gray-900 mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={"/assets/volunteer.jpeg"}
              alt="Community gathering"
              //   className="w-full h-80 object-cover object-top! grayscale"
              className="w-full object-top h-80 object-cover object-center"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl text-gray-900">Rooted in Community</h3>
            <p className="text-lg text-gray-600">
              From church gatherings to tech bootcamps, from family celebrations
              to hackathons, I've learned that the best design comes from
              understanding people in their context. My background has taught me
              to listen deeply, collaborate genuinely, and create with purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
