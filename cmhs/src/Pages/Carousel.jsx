import React, { useEffect, useState } from "react";

const Carousel1 = ({ picture }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  //Next image button
  const nextImage = () => {
    setcurrentIndex(() => (currentIndex + 1) % picture.length);
  };
  //Prev image button
  const prevImage = () => {
    setcurrentIndex(() => (currentIndex - 1 + picture.length) % picture.length);
  };

  //Set Timer for image autochange
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000); //image will change after every 5 sec.
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);
  return (
    <div className="relative">
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <img
        src={picture[currentIndex]}
        alt=""
        className="h-full w-full object-cover"
      />
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Carousel1;
