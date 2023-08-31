import Button from "../components/Button";
import { features } from "../constants";
import { motion } from "framer-motion";

const FeaturesCard = ({ icon, title, content, index }) => (
  <motion.div
    initial={{ y: 150 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    viewport={{ once: true }}
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-light`}
    >
      <img src={icon} alt="icon" className=" w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 font-chakra ">
      <h4
        className="font-semibold
    text-white text-[20px] leading-[24px] mb-1"
      >
        {title}
      </h4>
      <p
        className="font-normal font-sen
    text-light text-base sm:text-lg max-w-[470px]  opacity-[0.75] mb-1"
      >
        {content}
      </p>
    </div>
  </motion.div>
);
const Features = () => {
  return (
    <section
      id="features"
      className="py-6 sm:py-16 flex lg:flex-row items-center justify-start max-lg:justify-center flex-col"
    >
      <div className="flex-1 flex justify-center max-lg:items-center items-start flex-col max-lg:text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-chakra font-semibold sm:text-[48px] text-[40px] text-white sm:leading-[76.8px] leading-[66.8px] w-full"
        >
          Why choose our <br className="sm:block hidden" /> Web App?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-normal opacity-[0.75] text-light text-lg sm:text-xl  max-w-[470px] font-sen mt-5"
        >
          Effortlessly gather targeted email addresses from local businesses,
          streamlining your agency&apos;s prospecting efforts and enhancing
          client engagement.
        </motion.p>

        <Button label="Get Started" styles="mt-10" />
      </div>

      <div
        className={`flex-1 flex justify-center items-center lg:ml-10 ml-0 lg:mt-0 mt-10 relative flex-col`}
      >
        {features.map((feature, index) => (
          <FeaturesCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
