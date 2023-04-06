<template>
  <div class="pt-[70px] pb-[50px] dark:bg-black bg-[#f8f8f8]">
    <div class="flex justify-center items-start">
      <div class="mb-8 w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col">
          <img src="/images/logo/light-logo-footer.png" width="200" alt="">
          <div class="mb-[10px] flex flex-col justify-start items-start">
            <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <i class="fa-solid fa-phone"></i> &nbsp; +91 77962 69677 </p>
            <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <i class="fa-solid fa-envelope"></i> &nbsp; photon@paathshala.world </p>
            
          </div>
          
          <div class="flex justify-start items-center">
            
            <NuxtLink to="https://www.facebook.com/paathshalafortheworld" target="_blank">
              <i class="fa-brands fa-facebook mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
            </NuxtLink>
            
            <NuxtLink to="https://www.youtube.com/c/PaathshalaEducation" target="_blank">
              <i class="fa-brands fa-youtube mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
            </NuxtLink>
            
            
            <!-- <i class="fa-brands fa-instagram mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i> -->
            
            <NuxtLink to="https://www.linkedin.com/company/paathshala-ascension" target="_blank">
              <i class="fa-brands fa-linkedin mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-start gap-12">
          <div>
            <footerheader>
              <template v-slot:header>Explore</template>
            </footerheader>

            <div class="my-[17px] flex flex-col justify-start items-start">
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/#home">Start here</NuxtLink> </p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/blog/bloggrid">Blog</NuxtLink> </p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/about/Aboutus">About us</NuxtLink> </p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/about/why_choose_us">Why Choose Us</NuxtLink> </p>
            </div>
          </div>
          <div>
            <div class="mt-[49px] flex flex-col justify-start items-start">
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/about/faq">FAQs</NuxtLink> </p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/about/testimonials">Testimonials</NuxtLink> </p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]"> <NuxtLink to="/about/enquire_with_us">Contact us</NuxtLink> </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <div class="w-full">
      <copyright />
    </div>
  </div>
</template>

<style scoped>


.icon {
  margin-right: 24px;
  color: #8c89a2;
}
</style>