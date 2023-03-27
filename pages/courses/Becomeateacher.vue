<template>
  <div class="">
    <div class="bg-[#111]">
      <div>
        <Batone />
        <Battwo />
        <registerationform />
        <Footerheader />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
  import Footerheader from '@/components/Public/Footerheader.vue'
  import Footer from '@/components/Public/Footer.vue'
  import Batone from '@/components/Public/Batone.vue'
  import Battwo from '@/components/Public/Battwo.vue'
  import Registerationform from '@/components/Public/Registerationform.vue'

  definePageMeta({
    layout: 'frontend',
  })
</script>
