import downloadMail from "../assets/finishedrun.svg";
import { motion } from "framer-motion";

const HowToDownload = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:py-16">
      <motion.h2
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="heading-2 text-center"
      >
        Once a{" "}
        <span className="text-gradient sm:text-[50px] text-[42px]">search</span>{" "}
        is done, you get a CSV <br className="lg:block hidden" />{" "}
        <span className="text-gradient">Download</span>
      </motion.h2>

      <motion.img
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        src={downloadMail}
        alt="download-mail"
        className="w-full mt-8 sm:mt-12 overflow-hidden"
      />
    </section>
  );
};

export default HowToDownload;
