import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./style.module.css";
import photoOne from "../../../../assets/images/photo-1.jpg";
import photoTwo from "../../../../assets/images/photo-2.jpg";
import photoThree from "../../../../assets/images/photo-3.jpg";
import photoFour from "../../../../assets/images/photo-4.jpg";
import photoFive from "../../../../assets/images/photo-5.jpg";
import photoSix from "../../../../assets/images/photo-6.jpg";

export const ReviewsSlider = () => (
  <div className={style.reviewsContainer}>
    <h1 className={style.title}>Voices of Success with Sales Fortuna</h1>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className={style.swiper}
    >
      <SwiperSlide className={style.slide}>
        <div className={style.card}>
          <div className={style.logoContainer}>
            <img
              src={photoFour}
              alt="Serene Living Products"
              className={style.logo}
            />
          </div>
          <p className={style.testimonial}>
            Sales Fortuna made managing sales easier and helped us focus on
            customers. Its tools have been crucial for our growth and client
            satisfaction.
          </p>
          <div className={style.author}>
            <img
              src={photoTwo}
              alt="Ethan Morgan"
              className={style.authorPhoto}
            />
            <div className={style.authorInfo}>
              <p className={style.authorName}>Ethan Morgan</p>
              <p className={style.authorTitle}>
                Founder and CEO, Serene Living Products
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
        <div className={style.card}>
          <div className={style.logoContainer}>
            <img
              src={photoThree}
              alt="Starlight Creations"
              className={style.logo}
            />
          </div>
          <p className={style.testimonial}>
            Sales Fortuna has made sales so much easier for us. It saves time,
            simplifies the whole process, and helps us land more deals without
            extra hassle.
          </p>
          <div className={style.author}>
            <img
              src={photoSix}
              alt="Olivia Hayes"
              className={style.authorPhoto}
            />
            <div className={style.authorInfo}>
              <p className={style.authorName}>Olivia Hayes</p>
              <p className={style.authorTitle}>Owner, Starlight Creations</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
        <div className={style.card}>
          <div className={style.logoContainer}>
            <img
              src={photoFive}
              alt="Opulent Living Group"
              className={style.logo}
            />
          </div>
          <p className={style.testimonial}>
            Sales Fortuna has simplified our lead generation, helping us attract
            qualified prospects effortlessly and drive consistent growth.
          </p>
          <div className={style.author}>
            <img
              src={photoOne}
              alt="Alexander Reed"
              className={style.authorPhoto}
            />
            <div className={style.authorInfo}>
              <p className={style.authorName}>Alexander Reed</p>
              <p className={style.authorTitle}>
                Co-Founder, Opulent Living Group
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
        <div className={style.card}>
          <div className={style.logoContainer}>
            <img
              src={photoFive}
              alt="Opulent Living Group"
              className={style.logo}
            />
          </div>
          <p className={style.testimonial}>
            Sales Fortuna has simplified our lead generation, helping us attract
            qualified prospects effortlessly and drive consistent growth.
          </p>
          <div className={style.author}>
            <img
              src={photoOne}
              alt="Alexander Reed"
              className={style.authorPhoto}
            />
            <div className={style.authorInfo}>
              <p className={style.authorName}>Alexander Reed</p>
              <p className={style.authorTitle}>
                Co-Founder, Opulent Living Group
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
        <div className={style.card}>
          <div className={style.logoContainer}>
            <img
              src={photoThree}
              alt="Starlight Creations"
              className={style.logo}
            />
          </div>
          <p className={style.testimonial}>
            Sales Fortuna has made sales so much easier for us. It saves time,
            simplifies the whole process, and helps us land more deals without
            extra hassle.
          </p>
          <div className={style.author}>
            <img
              src={photoSix}
              alt="Olivia Hayes"
              className={style.authorPhoto}
            />
            <div className={style.authorInfo}>
              <p className={style.authorName}>Olivia Hayes</p>
              <p className={style.authorTitle}>Owner, Starlight Creations</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
        <div className={style.card}>
          <div className={style.logoContainer}>
            <img
              src={photoFour}
              alt="Serene Living Products"
              className={style.logo}
            />
          </div>
          <p className={style.testimonial}>
            Sales Fortuna made managing sales easier and helped us focus on
            customers. Its tools have been crucial for our growth and client
            satisfaction.
          </p>
          <div className={style.author}>
            <img
              src={photoTwo}
              alt="Ethan Morgan"
              className={style.authorPhoto}
            />
            <div className={style.authorInfo}>
              <p className={style.authorName}>Ethan Morgan</p>
              <p className={style.authorTitle}>
                Founder and CEO, Serene Living Products
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);
