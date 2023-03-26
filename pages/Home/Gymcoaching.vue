<template>
  <div class="w-12/12">
    <div
      class="p-[100px] bg-[url('/images/intro/intro8/hero-slider-slide-bg-02.jpg')]"
    >
      <span class="sub-title">Bestseller</span>
      <h2 class="title">
        Maxhome: Body<br />
        Confidence in 4 Weeks<br />
        - Week One Trial
      </h2>
      <p>
        The best method for fat loss! This is Week One of our online HIIT
        training fitness<br />
        course designed for the busy person!
      </p>

      <button
        class="green hover:bg-[#3F3A64] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px]"
      >
        Get started for today
      </button>
    </div>

    <div>
      <gymrates />
    </div>

    <div>
      <gymone />
    </div>

    <div>
      <gymthree />
    </div>

    <div>
      <gymfour />
    </div>

    <div>
      <gridfive />
    </div>

    <div>
      <gymsix />
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
    display: inline-block;
    line-height: 1.27;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
    color: #201c3f;
    background: #eab75f;
    padding: 6px 15px 3px;
    margin-bottom: 24px;
  }

  .title {
    font-size: 60px;
    line-height: 1.27;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: white;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.67;
    color: white;
    margin-top: 20px;
  }
</style>
