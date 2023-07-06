<template>
  <div class="wrapper overflow-hidden py-[100px] bg-spring" :style="{
    'background-color': '#f5f1ed',
    backgroundImage: `url('/images/bg/background-pattern-grid-line.png')`,
  }">
    <section class="funfact-area mb-[70px]">
      <div class="public-container">
        <!-- Section Title Start -->
        <div class="section-title relative z-20 text-center mb-7.5 md:mb-15" data-aos="fade-up">
          <span class="
                font-medium
                text-base
                leading-none
                -tracking-tightest
                block
                mb-2.5
                uppercase
                text-secondary-light
              ">maximize your potentials and possibilities</span>
          <h2 class="
                title
                m-0
                child:text-primary child:font-normal
                text-secondary
              ">
            Learn the secrets to <span>Life Success</span>, <br />these people
            have got the key.​
          </h2>
        </div>
        <!-- Section Title End -->

        <!-- Fun fact Wrapper Start -->
        <div class="grid md:grid-cols-3 lg:w-3/4 mx-auto gap-[30px]">
          <!-- Fun fact Start -->
          <div class="funfact text-center" style="opacity: 1; transform: none">
            <div class="
                  text-4xl
                  md:text-5xl
                  font-extrabold leading-none text-primary
                ">
              <span>3.092</span>+
            </div>
            <h3 class="
                  text-md
                  md:text-base
                  font-bold mt-2.5
                  md:mt-[14px]
                  mb-0 uppercase text-secondary
                  -tracking-tightest
                ">
              Registered Enrolls
            </h3>
          </div>
          <!-- Fun fact End -->
          <!-- Fun fact Start -->
          <div class="funfact text-center" style="opacity: 1; transform: none">
            <div class="
                  text-4xl
                  md:text-5xl
                  font-extrabold leading-none text-primary
                ">
              <span>1.926</span>
            </div>
            <h3 class="
                  text-md
                  md:text-base
                  font-bold mt-2.5
                  md:mt-[14px]
                  mb-0 uppercase text-secondary
                  -tracking-tightest
                ">
              Finished sessions
            </h3>
          </div>
          <!-- Fun fact End -->
          <!-- Fun fact Start -->
          <div class="funfact text-center" style="opacity: 1; transform: none">
            <div class="
                  text-4xl
                  md:text-5xl
                  font-extrabold leading-none text-primary
                ">
              <span>100</span>%
            </div>
            <h3 class="
                  text-md
                  md:text-base
                  font-bold mt-2.5
                  md:mt-[14px]
                  mb-0 uppercase text-secondary
                  -tracking-tightest
                ">
              Satisfaction rate
            </h3>
          </div>
          <!-- Fun fact End -->
        </div>
        <!-- Fun fact Wrapper End -->

        <!--Testimonial Slider Start -->
        <div class="testimonial-slider" data-aos="fade-up">
          <swiper :slides-per-view="2" :space-between="50" :speed="1000" :loop="false"
            :breakpoints="swiperOptions.breakpoints">
            <swiper-slide v-for="testimonial in testimonialItems" :key="testimonial.id">
              <div class="testimonial">
                <div class="image">
                  <img :src="testimonial.image" :alt="testimonial.alt" />
                </div>
                <div class="content">
                  <p>{{ testimonial.text }}</p>
                  <h6 class="name">{{ testimonial.name }}</h6>
                  <span class="position">{{ testimonial.position }}</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!--Testimonial Slider End -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const { swiperOptions, testimonialItems } = reactive({
  swiperOptions: {
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
  },

  testimonialItems: [
    {
      id: 1,
      image: "/images/testimonial/70/aadya-deshpande.jpg",
      alt: "image",
      text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.",
      name: "Luvic Dubble",
      position: "Private Tutor",
    },
    {
      id: 2,
      image: "/images/testimonial/70/aadya-deshpande.jpg",
      alt: "image",
      text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
      name: "Mina Hollace",
      position: "IT Specialist",
    },
    {
      id: 3,
      image: "/images/testimonial/70/aadya-deshpande.jpg",
      alt: "image",
      text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
      name: "Florence Themes",
      position: "Multimedia Admin",
    },
  ],
});
</script>