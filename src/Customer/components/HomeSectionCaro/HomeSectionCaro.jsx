import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const ANIMATION_CLASS =
  "transition duration-300 ease-in-out border-2 border-surface hover:scale-105 hover:shadow-2xl hover:border-success hover:-rotate-1";

const HomeSectionCaro = ({ books, heading, description, seeAllLink }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };
  const carouselRef = useRef();

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const items = books.map((book, idx) => (
    <HomeSectionCard
      key={idx}
      cover={book.cover}
      title={book.title}
      author={book.author}
      year={book.year}
      animationClass={ANIMATION_CLASS}
    />
  ));

  return (
    <div className="mb-12">
      {/* <div className="flex items-baseline justify-between px-6">
        <h2 className="text-3xl font-bold text-primary">{heading}</h2>        
      </div> */}
      <p className="text-2xl font-bold text-error">{description}</p>
      <div className="relative px-4 lg:px-8">
        <div className="relative min-h-[300px] p-5">
          <AliceCarousel
            ref={carouselRef}
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls
            infinite
            disableDotsControls
          />
          {/* Left Button */}
          <button
            onClick={slidePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-surface z-50 p-2 rounded-full shadow border border-tertiary"
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon style={{ color: "#374151" }} />
          </button>
          {/* Right Button */}
          <button
            onClick={slideNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-surface z-50 p-2 rounded-full shadow border border-tertiary"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              style={{ transform: "rotate(180deg)", color: "#374151" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCaro;
