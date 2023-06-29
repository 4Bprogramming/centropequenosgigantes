import React from "react";
// import Slides from "./Slides";
import CarouselPeques from "./Carousel";
import foto1 from "../../assets/home/slice1.webp";
import foto2 from "../../assets/home/slice2.webp";
import foto3 from "../../assets/home/slice3.webp";


function SliderBar() {
  const images = [
    {
      id: "1",
      title: "Centro de Terapias Pequeños Gigantes.",
      image:foto1
        
    },
    {
      id: "2",
      title:
        "Con profesionales enfocados en el crecimiento Integral de tu pequeño.",
      image:
        foto2,
    },
    {
      id: "3",
      title: "Comprometidos al 100% con cada paciente.",
      image:
        foto3,
    },
  ];

  return (
    <div>
      <CarouselPeques images={images} />
    </div>
  );
}

export default SliderBar;
