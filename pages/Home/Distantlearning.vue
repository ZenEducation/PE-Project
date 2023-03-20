<template>
  <div>
    <div
      class="back py-[200px] bg-cover bg-center flex flex-col justify-center items-center"
    >
      <span class="sub-title">Commence Business</span>
      <h1 class="title">Distant Mentoring Program</h1>
      <button
        class="h-[52px] px-5 text-[#333333] text-[14px] leading-[50px] bg-[#F8F9FA] font-bold flex items-center justify-center rounded-md hover:text-white hover:green"
      >
        Download free guidebook
        <icon name="uil:arrow-right" />
      </button>
    </div>

    <div class="bg-[#111] pt-[100px]">
      <mentoringone />

      <div class="p-[100px]">
        <mentoringcardone />
      </div>

      <div class="w-12/12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          height="100"
          class="w-full"
          fill="#161821"
        >
          <path
            class="elementor-shape-fill"
            d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
          ></path>
        </svg>
      </div>
    </div>

    <div class="blue">
      <mentoringtwo />
    </div>

    <div class="bg-[#111] py-[50px] px-[100px]">
      <trendingblogs />
    </div>

    <div class="blue">
      <aboutmail />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>s

<style scoped>
.sub-title {
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
}

.title {
  font-size: 64px;
  line-height: 1;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 28px;
}

.back {
  background-image: url("/images/intro/intro3/bg-1.jpg");
}
</style>



