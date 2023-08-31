import Button from "../components/Button";
import { motion } from "framer-motion";

const CTA = () => (
  <section id="cta" className="py-10 sm:py-16">
    <div className="flex flex-col justify-center items-center">
      <motion.h2
        initial={{ y: 150 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="heading-2 text-center"
      >
        <span className="font-bold text-gradient">Ready</span> to Supercharge
        Your
        <br className="max-lg:hidden" /> Outreach
      </motion.h2>
      <motion.p
        initial={{ y: 150 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="font-sen mt-6 text-center text-xl sm:text-2xl max-w-sm m-auto sm:max-w-xl"
      >
        Start using our Web app today to{" "}
        <span className="text-gradient">revolutionize</span> your agency&apos;s{" "}
        <span className="text-gradient">email outreach</span>
      </motion.p>
      <motion.p
        initial={{ y: 150 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
      >
        <Button label="Unlock Your 5 Free Searches Now" styles="mt-16" />
      </motion.p>
    </div>
  </section>
);

export default CTA;
