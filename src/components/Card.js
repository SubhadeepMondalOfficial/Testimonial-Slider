import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div>
        <img
          src={review.image}
          alt="dp"
          className="w-[100px] h-[100px] rounded-full absolute -top-20 left-1 z-20"
        />
        <div className="bg-[#8B5CF6] w-[100px] h-[100px] rounded-full absolute top-[-85px] left-[11px] z-10"></div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold tracking-widest mb-1">
          {review.name}
        </h3>
        <p className="uppercase text-xs text-[#8B5CF6] opacity-80">
          {review.job}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-3 my-6">
        <div>
          <FaQuoteLeft className="text-[#8B5CF6] opacity-70" />
        </div>
        <div>
          <p className="text-center text-sm opacity-65">{review.text}</p>
        </div>
        <div>
          <FaQuoteRight className="text-[#8B5CF6] opacity-70" />
        </div>
      </div>

    </div>
  );
};

export default Card;
