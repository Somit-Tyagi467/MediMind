import React from "react";
import { motion } from "framer-motion";
import HomePageConfig from "../../Config/HomePageConfig.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features({ features }) {
  return (
    <section id="features" className="mt-16">
      {/* <motion.h2
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Features
      </motion.h2> */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {HomePageConfig.features.map((f) => (
          <motion.article
            whileHover={{ scale: 1.05 }}
            key={f.id}
            variants={fadeUp}
            className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-md transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-white/40 flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{f.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
