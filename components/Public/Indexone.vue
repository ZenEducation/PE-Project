<template>
  <div>
    <div class="
            bg-[#EAE1D6]
            h-auto
            w-12/12
            flex
            justify-center
            content-center
            items-center
            p-2
            md:p-10
            xl:p-20
            background
          ">
      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <gridone />
        </div>
        <div class="w-12/12 flex items-center justify-center lg:justify-end">
          <img src="/images/intro/intro1/intro-popular-course.png" alt="image"
            class="z-[9] self-end flex-[0_0_auto] ml-auto mr-5 mb-[100px]">
          <div class="flex flex-col">
            <img src="/images/courses/370/course-2.jpg" class="w-full lg:w-full h-[229px]" />
          <form @submit.prevent="submitform" class="w-full p-8 dark:bg-[#333333] bg-white">
            <h1 class="text-center text-3xl text-[#20ad96] font-bold">Contact Us</h1>
            <div class="flex flex-col justify-between items-center w-12/12 mb-2 dark:text-white text-[#696969]">
              <input class="w-full  my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
                type="text" placeholder="Enter Student Name" id="" v-model="registration.name" />

              <input class="w-full  my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
                type="email" placeholder="Enter Your Email Id*" id="" v-model="registration.email" />

              <input class="w-full my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
                type="text" placeholder="Enter Mobile No" id="" v-model="registration.subject" />
            </div>
            <div class="w-full flex justify-center">
              <button class="text-[14px] text-white font-bold px-12 py-2 bg-[#20ad96] rounded-md mt-8">
                Book Now
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100"
        class="rot text-[#161821] w-full bg-[#EAE1D6] dark:fill-[#161821] fill-white">
        <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
      </svg>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registration: {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },

  methods: {
    submitform() {
      console.log('Registration', this.registration);
    }
  }
}

</script>
<style scoped>
.background {
  background-image: url("@/images/intro/intro1/bg-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.rot {
  transform: rotate(180deg);
}

svg {
  color: #161821;
}
</style>