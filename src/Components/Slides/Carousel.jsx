import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";

function CarouselPeques({ images }) {
  return (
    <Carousel className={styles.mainCarousel} variant="dark">
      {images.map((element) => (
        <Carousel.Item interval={2000} key={element.id}>
          <div className={styles.pictureImgDiv}>
            <img
            //   className="d-block w-100"
              src={element.image}
              alt={element.id}
            />
          </div>
          <Carousel.Caption>
            <h3 className={styles.carouselTitle}>{element.title}</h3>
        
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselPeques;
