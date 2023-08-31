import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" py-16 min-h-screen grid place-content-center">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-[44px] leading-[60px] sm:text-[72px] sm:leading-[100px] font-chakra text-center"
        >
          <span className=" text-gradient">Stop</span> Searching For Emails{" "}
          <br className="max-lg:hidden" /> Manually
        </motion.h1>

        <p className="font-sen mt-6 text-center text-xl sm:text-2xl max-w-[470px] m-auto sm:max-w-xl">
          Get <span className="text-gradient ">Verified</span> Local Business
          Emails Automatically within 10 Minutes or less
        </p>

        <Button label="Unlock Your 5 Free Searches Now" styles="mt-16" />
      </div>
    </section>
  );
};

export default Hero;
