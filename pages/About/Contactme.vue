<template>
  <div class="blue py-[100px] px-5 md:px-[100px]">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="flex flex-col">
        <div class="mb-[40px]">
          <span class="sub-title">Get excited already?</span>
          <h2 class="title">Reach me!</h2>
        </div>

        <div>
          <contactdetails />
        </div>
      </div>

      <div class="md:ml-20">
        <img
          class="rounded-[50%]"
          src="/images/others/contact.jpg"
          alt="image"
        />
      </div>
    </div>

    <div>
      <contactmeform />
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
    font-size: 18px;
    line-height: 1;
    font-weight: 500;
    color: #ddd;
    margin-bottom: 10px;
  }

  .title {
    font-size: 34px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 0;
    color: white;
  }
</style>
