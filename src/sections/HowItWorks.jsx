import startSearch from "../assets/Start a search.svg";
import { downloadSteps } from "../constants";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section
      id="works"
      className="flex lg:flex-row  gap-10 flex-col-reverse sm:py-16 py-10 w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center lg:mr-10 mr-0 lg:mt-0 mt-2 relative rounded-[5px] overflow-hidden"
      >
        <img
          src={startSearch}
          alt="how-app-works"
          className="w-[100%] h-[100%] relative z-[5] rounded-[5px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-start max-lg:items-center flex-col"
      >
        <h2 className="font-chakra font-semibold sm:text-[48px] text-[40px] max-lg:text-center text-white sm:leading-[76.8px] leading-[66.8px] w-full">
          Just 3 Simple Steps <br className="sm:block hidden" />
        </h2>
        <div className="flex flex-col gap-2">
          {downloadSteps.map(({ id, number, content }) => (
            <p
              key={id}
              className="flex items-start justify-start gap-2 font-sen font-normal text-light text-xl sm:text-2xl  max-w-[470px] mt-5 opacity-[0.75]"
            >
              <span className="font-chakra text-gradient text-[36px] font-bold mr-2">
                {number}.
              </span>
              {content}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
