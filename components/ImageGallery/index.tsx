import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './ImageGallery.module.scss';
import 'swiper/css';

const ImageGallery = () => {

    let swiper: any;

    return (
        <div className={styles.mainGalleryContainer} id='galeria'>
            <div className={styles.swiperWrapper}>
                <Swiper
                modules={[Autoplay]}
                slidesPerView={1}   
                loop
                autoplay
                onSwiper={((s) => {swiper = s})}
                >
                    <SwiperSlide>
                        <img src='assets/images/gallery-1.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-2.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-3.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-4.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-5.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-6.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-7.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-8.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-9.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-10.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-11.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-12.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-13.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-14.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-15.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='assets/images/gallery-16.jpg' alt='Salón Mundo Risas'/>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.leftArrow} onClick={(() => {swiper.slidePrev()})}>
                    <img src='assets/icons/arrow-icon.png' alt='Anterior'/>
                </div>
                <div className={styles.rightArrow} onClick={(() => {swiper.slideNext()})}>
                    <img src='assets/icons/arrow-icon.png' alt='Siguiente'/>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery