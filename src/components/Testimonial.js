import Card from "./Card";
import reviews from "../data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const leftSlideHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightSlideHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div className="bg-white max-w-[600px] flex flex-col justify-center items-center px-10 py-10 rounded-md transition-all duration-700 hover:shadow-xl">
      <Card review={reviews[index]} />

      <div className="flex gap-x-4">
        <button>
          <FiChevronLeft
            className="text-[#8B5CF6] text-3xl"
            onClick={leftSlideHandler}
          />
        </button>
        <button>
          <FiChevronRight
            className="text-[#8B5CF6] text-3xl"
            onClick={rightSlideHandler}
          />
        </button>
      </div>

      <div>
        <button
          className="bg-[#8B5CF6] opacity-80 px-6 py-2 mt-4 rounded font-bold text-yellow-50 hover:opacity-100 duration-300"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
