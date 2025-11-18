import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Ear,
  Sparkles,
  Hammer,
  TestTube,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

export function DesignProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const processSteps = [
    {
      icon: Ear,
      title: "Listen",
      description: "Understanding emotions, challenges, and hopes",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "Imagine",
      description: "Exploring possibilities and creative solutions",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Crafting experiences with code and design",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Validating with real users and feedback",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: RefreshCw,
      title: "Reflect",
      description: "Learning from outcomes and insights",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Improve",
      description: "Iterating until the idea feels right",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Designing with Empathy, Clarity, and Purpose
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA7B93] to-[#376E6F] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe design begins with empathy. Every project starts with
            listening, understanding people's emotions, challenges, and hopes.
            Then I imagine, build, test, and refine until the idea feels right.
          </p>
        </motion.div>

        {/* Process Loop */}
        <div className="relative">
          {/* Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <motion.path
              d="M 200 150 Q 400 100, 600 150 T 1000 150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                    <span className="text-purple-600">{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 rounded-3xl">
            <p className="text-xl text-gray-700 mb-6">
              My accounting background taught me structure, and my experience in
              technology taught me to experiment. Together, they help me design
              with both logic and emotion.
            </p>
            <p className="text-2xl text-gray-900">
              I'd say design is a bridge to connecting with people, technology,
              and purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
