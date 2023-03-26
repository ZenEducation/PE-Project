<template>
  <div
    class="font-body py-[100px] bg-white dark:bg-[#161821] blue px-5 md:px-[100px]"
  >
    <h2 class="title text-black dark:text-white">Login Register</h2>

    <div
      class="flex flex-col lg:flex-row items-start justify-center xl:justify-evenly lg:justify-between gap-3"
    >
      <Login />
      <Register />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.title {
  font-size: 48px;
  margin: 0;
  padding-bottom: 80px;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
}
</style>
