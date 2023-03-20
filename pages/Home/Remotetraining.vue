<template>
  <div class="">
    <div class="relative h-[753px] w-full bg-[#1f1f52] text-center">
      <div class="pt-[179px] z-40">
        <h2 class="title title-responsive">Learn At Your Own Pace!</h2>
        <span class="sub-title"
          >Get teamed up with people of the same will.</span
        >

        <div class="flex items-center justify-center">
          <button
            class="hover:bg-white flex items-center green rounded-md text-[14px] font-bold hover:text-[#20ad96] text-white py-4 px-10 mx-2"
          >
            Download free guidebook
            <icon class="icon ml-2 text-white" name="uil:download-alt" />
          </button>
        </div>
      </div>

      <div class="z-30 flex justify-center translate-y-40 mx-5">
        <div
          class="flex justify-center items-center w-auto h-auto p-5 rounded-xl bg-white"
        >
          <div class="about-me-video-wrapper">
            <a
              href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"
              target="_blank"
            >
              <div class="relative flex justify-center items-center">
                <img
                  class="image"
                  src="/images/video/home-6-hero-poster-final.jpg"
                  alt="image"
                />
                <img
                  class="absolute"
                  src="/images/icons/icon-youtube-play.png"
                  alt="icon"
                /></div
            ></a>
          </div>
        </div>
      </div>

      <!-- <div class="z-0 relative top-[-200px]">
        <div class="w-full rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            class="w-full h-[600px]"
          >
            <path
              class="elementor-shape-fill"
              fill="#ffffff0a"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              fill="#ffffff0a"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              fill="#ffffff0a"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>
        </div>

        <div class="hidden lg:block relative bottom-[20px] px-[100px]">
          <div class="flex justify-between items-end">
            <div class="">
              <div
                class="intro-left-image rellax"
                data-rellax-speed="2"
                data-rellax-xs-speed="1"
                data-rellax-mobile-speed="2"
                data-rellax-tablet-speed="2"
                style="transform: translate3d(0px, -66px, 0px)"
              >
                <img
                  src="/images/intro/intro6/home-6-hero-left-person.png"
                  alt="image"
                />
              </div>
            </div>

            <div class="col-md-2 d-none d-md-block">
              <div
                class="intro-right-image rellax"
                data-rellax-speed="2"
                data-rellax-xs-speed="1"
                data-rellax-mobile-speed="2"
                data-rellax-tablet-speed="2"
                style="transform: translate3d(0px, -77px, 0px)"
              >
                <img
                  src="/images/intro/intro6/home-6-hero-right-person.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div>
      <remoteone />
    </div>

    <div>
      <remotetwo />
    </div>

    <div>
      <remotethree />
    </div>

    <div class="bg-[#111] padding-responsive">
      <trendingblogs />
    </div>

    <div>
      <remotefour />
    </div>

    <div class="blue">
      <onlinecertification />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>


<style scoped>
.sub-title {
  display: block;
  font-size: 18px;
  line-height: 1.78;
  font-weight: 500;
  color: #ddd;
  margin-bottom: 24px;
}

.title {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 2px;
  /* color: #3F3A64; */
  line-height: 1.17;
  color: white;
  width: 100%;
  margin-bottom: 0.5rem;
}

button:hover .icon {
  color: #20ad96;
}
</style>