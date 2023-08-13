<template>
  <div class="relative font-body">
    <indexone />
    <indextwo />
    <indexthree />
    <!-- <indexfour /> -->
    <indexfive />
    <brandsession />
    <testimonials data-aos="fade-up" data-aos-duration="2000" />
  </div>
</template>

<script setup lang="ts">
  import AOS from 'aos'
  definePageMeta({
    layout: 'frontend',
  })
  onMounted(() => AOS.init())
</script>
