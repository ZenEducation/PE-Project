<template>
  <div class="pt-[70px] pb-[50px] dark:bg-black bg-[#f8f8f8]">
    <div class="flex justify-center items-start">
      <div class="mb-8 w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col">
          <footerheader>
            <template v-slot:header>Address</template>
          </footerheader>
          <div class="my-[17px] flex flex-col justify-start items-start">
            <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Your address goes here</p>
            <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">0123456789 (9am - 5pm EST, Monday - Friday)</p>
            <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">info@example.com</p>
          </div>
          <div class="flex justify-start items-center">
            
            <i class="fa-brands fa-facebook mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
            
            <i class="fa-brands fa-twitter mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
            
            <i class="fa-brands fa-instagram mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
            
            <i class="fa-brands fa-linkedin mr-[24px] text-[#8c89a2] w-6 h-6 text-[25px]"></i>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-start gap-12">
          <div>
            <footerheader>
              <template v-slot:header>Explore</template>
            </footerheader>

            <div class="my-[17px] flex flex-col justify-start items-start">
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Start here</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Blog</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">About us</p>
            </div>
          </div>
          <div>
            <div class="my-[17px] flex flex-col justify-start items-start">
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Success story</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Courses</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Contact us</p>
            </div>
          </div>
          <div>
            <footerheader>
              <template v-slot:header>Information</template>
            </footerheader>

            <div class="my-[17px] flex flex-col justify-start items-start">
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Membership</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Purchase guide</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">Privacy policy</p>
              <p class="dark:text-[#ddddd] text-[#696969] text-[14px] hover:text-[#20ad96] font-medium mb-[11px]">terms of service</p>
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