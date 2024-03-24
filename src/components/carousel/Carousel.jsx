import React, { useEffect, useState } from 'react';
import './Carousel.css';


function Carousel({slider1,slider2,slider3}) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    slider1,
    slider2,
    slider3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const spn = document.querySelector('.spn');
    const spans = spn.querySelectorAll('span');

    if (spans[currentImage]) {
      spans.forEach((span, index) => {
        span.style.backgroundColor = index === currentImage ? 'red' : 'gray';
      });
    }
  }, [currentImage]);

  return (
    <div className='w-full h-[40vh] md:h-[70vh] relative bg-[#C52E02]'>
      {/* <img className="absolute left-0 top-0 w-full h-full z-[-1]" src="src/assets/images/row-bot-bg.jpg" alt="" /> */}
      <div className='containerr bg-white p-[10px] el-center relative  h-[50vh] md:h-[80vh] mx-auto'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index}`}
            className={`img bg-cover w-[98%] h-[98%] absolute left-[1%] top-[1%] ${index === currentImage ? 'active' : ''}`}
          />
        ))}
        <div className='spn absolute bottom-10  mx-auto el-center gap-2 z-20 w-[200px]'>
          <span className='w-[30px] rounded-full border-solid border-4 border-white text-transparent'>1</span>
          <span className='w-[30px] rounded-full border-solid border-4 border-white text-transparent'>1</span>
          <span className='w-[30px] rounded-full border-solid border-4 border-white text-transparent'>1</span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;