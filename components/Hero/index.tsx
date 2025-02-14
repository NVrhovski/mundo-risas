import styles from './Hero.module.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
    return (
        <Swiper
        modules={[Autoplay]}
        slidesPerView={1}   
        loop
        autoplay
        style={{backgroundColor: '#f8ccba'}}
        id='inicio'
        >
            <SwiperSlide>
                    <img className={styles.sliderImage} src='/assets/images/gallery-1.jpg' alt='Salón Mundo Risas'/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={styles.sliderImage} src='/assets/images/gallery-12.jpg' alt='Salón Mundo Risas'/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={styles.sliderImage} src='/assets/images/gallery-8.jpg' alt='Salón Mundo Risas'/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero