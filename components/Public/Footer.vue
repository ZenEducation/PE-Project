<template>
  <div class="pt-[70px] pb-[50px] bg-[#171621]">
    <div class="flex justify-center items-start">
      <div class="mb-8 w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col">
          <footerheader>
            <template v-slot:header>Address</template>
          </footerheader>
          <div class="my-[17px] flex flex-col justify-start items-start">
            <p>Your address goes here</p>
            <p>0123456789 (9am - 5pm EST, Monday - Friday)</p>
            <p>info@example.com</p>
          </div>
          <div class="flex justify-start items-center">
            <icon name="uil:facebook" class="icon w-6 h-6" />
            <icon name="uil:twitter" class="icon w-6 h-6" />
            <icon name="uil:instagram" class="icon w-6 h-6" />
            <icon name="uil:linkedin" class="icon w-6 h-6" />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-start gap-12">
          <div>
            <footerheader>
              <template v-slot:header>Explore</template>
            </footerheader>

            <div class="my-[17px] flex flex-col justify-start items-start">
              <p>Start here</p>
              <p>Blog</p>
              <p>About us</p>
            </div>
          </div>
          <div>
            <div class="my-[17px] flex flex-col justify-start items-start">
              <p>Success story</p>
              <p>Courses</p>
              <p>Contact us</p>
            </div>
          </div>
          <div>
            <footerheader>
              <template v-slot:header>Information</template>
            </footerheader>

            <div class="my-[17px] flex flex-col justify-start items-start">
              <p>Membership</p>
              <p>Purchase guide</p>
              <p>Privacy policy</p>
              <p>terms of service</p>
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
p {
  color: #ababab;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 11px;
}

.icon {
  margin-right: 24px;
  color: #8c89a2;
}
</style>