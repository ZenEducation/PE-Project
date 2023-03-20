<template>
  <div class="flex items-start mb-[50px]">
    <i class="color fa fa-location" name="uil:map-marker" />
    <div>
      <h4 class="title dark:text-white">Address</h4>
      <span class="info-text dark:text-[#fff]"> Your address goes here</span>
    </div>
  </div>

  <div class="flex items-start mb-[50px]">
    <i class="color fa fa-phone"/>
    <div>
      <h4 class="title dark:text-white">Contact</h4>
      <span class="info-text dark:text-[#fff]">Mobile:<strong>0123456789</strong></span
      ><br />
      <span class="info-text dark:text-[#fff]">Hotline:<strong>0123456789</strong></span
      ><br />
      <span class="info-text dark:text-[#fff]">Mail:<strong>demo@example.com</strong></span>
    </div>
  </div>

  <div class="flex items-start mb-[50px]">
    <i class="color fa fa-clock" />
    <div>
      <h4 class="title dark:text-white">Hour of operation</h4>
      <span class="info-text dark:text-[#fff]">Monday - Friday : 09:00 - 20:00</span><br />
      <span class="info-text dark:text-[#fff]">Sunday & Saturday : 10:30 - 32:00</span>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 15px;
}

.info-text {
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  line-height: 30px;
}

.color {
  font-size: 32px;
  color: #20ad96;
  margin-top: 0;
  margin-right: 20px;
}
</style>