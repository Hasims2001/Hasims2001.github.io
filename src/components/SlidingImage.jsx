import { Image } from "@chakra-ui/react";
import React from "react";
import "../styles/SlidingImage.css";
export const SlidingImage = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" style={{boxShadow:` rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`}}>
      <div
        className="slideshowSlider"
        
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`,  }}
      >
        {images.map((item, index) => (
          <div className="slide" key={index}>
            <Image
              className="website"
              w={"100%"}
              m={"auto"}
              borderRadius={"10px"}
              src={item}
              alt={"website"}
            />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
