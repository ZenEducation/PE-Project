<template>
  <div class="bg-[#161821] w-12/12 px-24">
    <div class="py-[100px]">
      <courseheader>
        <template #title>Courses Grid 02</template>
      </courseheader>
    </div>
    <div>
      <div class="flex justify-between items-start">
        <p class="text-[15px] text-[#ddd] font-normal leading-[1.74]">
          We found 12 courses available for you
        </p>

        <div class="select relative">
          <span
            class="absolute top-0 bottom-0 right-0 w-[54px] bg-white flex justify-center items-center"
          >
            <icon class="w-10 h-10 text-gray-400" name="uil:angle-down" />
          </span>
          <select id="cars" name="cars" aria-placeholder="Default">
            <div class="options">
              <option>Default</option>
              <option value="popularity">Popularity</option>
              <option value="latest">Latest</option>
              <option value="low">Price:Low to High</option>
              <option value="high">Price:High to Low</option>
            </div>
          </select>
        </div>
      </div>
    </div>
    <div class="pb-[100px]">
      <coursecardtwo />
      <loadmorebtn />
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'frontend',
  })
</script>

<style scoped>
  .select {
    width: 300px;
    height: 54px;
    margin-bottom: 10px;
    padding: 0px 8px;
  }

  select {
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    outline: none;
    padding: 0px 12px;
    border-radius: 2px;
  }
</style>
