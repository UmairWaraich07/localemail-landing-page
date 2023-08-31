import TestimonialsCard from "../components/TestimonialsCard";
import { feedback } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => (
  <section
    id="clients"
    className={`py-6 sm:py-16 flex items-center justify-center flex-col relative`}
  >
    <div
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16
    mb-6"
    >
      <motion.h2
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="heading-2 max-lg:text-center"
      >
        What people are saying about us
      </motion.h2>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="flex flex-wrap lg:justify-start justify-center w-full feedback-container relative z-[1]"
    >
      {feedback.map((client) => (
        <TestimonialsCard key={client.id} {...client} />
      ))}
    </motion.div>
  </section>
);

export default Testimonials;
