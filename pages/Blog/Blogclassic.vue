<template>
  <div class="font-body dark:bg-[#161821] w-12/12 px-24">
    <div class="container">
      <div class="py-[100px]">
        <courseheader>
          <template v-slot:title>Blog Classic</template>
        </courseheader>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="min-w-[376px] pr-[30px] col-span-1">
          <blogclassicsidebar />
        </div>
        <div class="col-span-2">
          <blogclassiccontent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>
