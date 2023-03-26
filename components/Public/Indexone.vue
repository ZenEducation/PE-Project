<template>
  <div>
    <div
      class="
        bg-[#EAE1D6]
        h-auto
        w-12/12
        flex
        justify-center
        content-center
        items-center
        p-2
        md:p-10
        xl:p-20
        background
      "
    >
      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <gridone />
        </div>
        <div class="w-12/12 flex items-center justify-center lg:justify-end">
          <img src="/images/intro/intro1/intro-popular-course.png" alt="image" class="z-[9] self-end flex-[0_0_auto] ml-auto mr-5 mb-[100px]">
          <gridtwo>
            <template v-slot:tag>Free</template>
            <template v-slot:date>SEP 23, 2023</template>
            <template v-slot:title
              >Customer-centric Info-Tech Strategies</template
            >
            <template v-slot:content
              >Now more than ever, corporations are investing heavily in IT. The
              quality of these investments affects the daily…</template
            >
          </gridtwo>
        </div>
      </div>
    </div>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height="100"
        class="rot text-[#161821] w-full bg-[#EAE1D6] dark:fill-[#161821] fill-white"
      >
        <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
      </svg>
    </span>
  </div>
</template>
<script setup>
</script>
<style scoped>
.background {
  background-image: url("@/images/intro/intro1/bg-1.jpg");
  background-position: center;
  background-size:cover;
  background-repeat: no-repeat;
}

.rot {
  transform: rotate(180deg);
}

svg {
  color: #161821;
}
</style>