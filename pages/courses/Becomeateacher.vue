<template>
  <div class="">
    <div class="bg-[#111]">
      <div>
        <batone />
        <battwo />
        <registerationform />
        <Footerheader />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
import Footerheader from "@/components/AfterAuth/FrontEndTemplate/Footerheader.vue";
import Footer from "@/components/AfterAuth/FrontEndTemplate/Footer.vue";

definePageMeta({
  layout: "frontend",
});
</script>
