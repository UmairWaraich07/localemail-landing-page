import { quotes } from "../assets";

const TestimonialsCard = ({ content, name, title, img }) => {
  return (
    <div
      className="flex justify-between flex-col px-10 py-12 rounded-[20px]
      max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 testimonial-card"
    >
      <img
        src={quotes}
        alt="double-quotes"
        width={42}
        height={27}
        className="object-contain"
      />

      <p className="font-sen font-normal text-[18px] leading-[32px] text-light opacity-[.75] my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img
          src={img}
          alt={name}
          width={48}
          height={48}
          className="object-contain"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-chakra font-semibold text-[20px] leading-[32px] text-light">
            {name}
          </h4>
          <p className="font-sen font-normal text-[16px] leading-[24px] opacity-70 text-light">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
