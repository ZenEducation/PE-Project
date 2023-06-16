<template>
  <div class="">
    <div
      class="relative w-full py-[250px] bg-[url('@/public/imgOldFolder/intro/intro4/bg-1.jpg')] text-center"
    >
      <h2 class="title title-responsive lg:text-[56px]">
        Expand Your Possibilities
        <span class="text-[#20ad96]">Positively</span>
      </h2>
      <span class="sub-title"
        >Reach out to the most competent &amp; passionate mentors</span
      >

      <div
        class="flex flex-col sm:flex-row items-center justify-center mt-[35px]"
      >
        <button
          class="bg-white hover:green rounded-md text-[14px] font-bold text-[#111] hover:text-white py-4 px-10 mx-2"
        >
          Free Consultation
        </button>
        <button
          class="bg-transparent hover:green rounded-md text-[14px] font-bold text-white border-[0.2px] border-white hover:border-[#20ad96] py-4 px-10 mt-4 sm:mt-0 flex items-center mx-2"
        >
          <icon class="mr-3" name="uil:play" />
          How we work
        </button>
      </div>

      <div>
        <div class="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            height="100"
            width="100%"
            fill="#111"
          >
            <path
              class="elementor-shape-fill"
              d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div>
      <multimediaone />
    </div>

    <div>
      <multimediatwo />
    </div>

    <div>
      <multimediathree />
    </div>

    <div>
      <multimediafour />
    </div>

    <div class="bg-[#111] padding-responsive">
      <trendingblogs />
    </div>

    <div class="bg-[url('/images/bg/subscribe-bg.jpg')]">
      <aboutmail />
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'frontend',
  })
</script>

<style scoped>
  .sub-title {
    display: block;
    font-size: 18px;
    line-height: 1.78;
    font-weight: 500;
    color: white;
    margin-bottom: 45px;
  }

  .title {
    font-weight: 500;
    letter-spacing: 2px;
    /* color: #3F3A64; */
    line-height: 1.29;
    color: white;
    width: 100%;
    margin-bottom: 0.5rem;
  }
</style>
