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
          <div className="w-24 h-24 bg-gradient-to-br from-[#1C3334] via-[#2F4454] to-[#2E151B] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Quote className="w-12 h-12 text-white" />
          </div>

          <blockquote className="text-2xl md:text-3xl text-gray-800 mb-8 italic leading-relaxed">
            "I transitioned from accounting into product development because
            finance needs more than perfect models and numbers. It needs
            products that people trust and understand."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-lg text-gray-600 mb-12"
        >
          <p>
            My transition into the technology industry began after I completed
            my BSc in Accounting with Honors at the University of Lagos,
            eventually joining Interswitch and applying my analytical skills to
            product design. This experience shaped how I understand structure,
            clarity, and responsibility. I worked with financial statements,
            balance sheets, invoices, bookkeeping records, bank reconciliation
            statements, and other detailed reports. These tasks trained me to
            notice patterns, follow the flow of money, and explain information
            clearly. Over time, I realized that the analytical rigor I had
            developed complemented the curiosity and problem-solving skills I
            cultivated as a child, giving me a unique lens for approaching
            complex challenges.
          </p>
          <p>
            My work in accounting shaped how I understand value, risk, and the
            movement of money. This perspective became valuable in financial
            technology. Many challenges in our products relate to how people
            understand money or trust a digital system. Because I knew how
            financial records worked behind the scenes, I could give clear input
            on how features should display amounts, explain charges, or guide
            users through risky steps.
          </p>

          <p className="text-xl text-gray-800">
            Stanford is the right place to build my skills. I want to learn from
            research and leaders who are shaping the future of finance, product,
            and ethical design. My goal is to create, products that open access,
            support small groups with big ideas, and build trust one screen at a
            time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
