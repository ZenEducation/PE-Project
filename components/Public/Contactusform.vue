<template>
  <div class="flex justify-center mb-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 text-left max-w-[75rem] py-10">
      <div class="px-2 flex flex-col justify-center">
        <h2 class="mb-4 text-[28px] lg:text-[48px] text-slate-800 dark:text-white font-[700] leading-[56px]">
          Online 1-on-1 Live Tution
        </h2>

        <h3 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
          <span class="rounded-md p-2 font-bold text-slate-800 dark:text-white bg-gray-800">Class 1-12IB</span> <span
            class="rounded-md p-2 font-bold text-slate-800 dark:text-white bg-gray-800"> ICSE | CBSE | IGCSE | GCSE</span>
        </h3>

        <p class="text-slate-800 dark:text-white font-bold text-[15px]  mb-5">
          Find your live 1-on-1 online tution tutor <br /> for school
          subject's as per you school curriculum
        </p>
      </div>
      <div>
        <form @submit.prevent="submitform" class="w-full p-8 rounded-md bg-[#333333]">
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
  <div class="py-5 ">
    <headers class="flex flex-col items-center justify-center text-center">
      <template v-slot:headertwo>
        Whatsapp us
        <span class="border-2 border-[#20AD96] rounded-md px-2 py-3 text-[#20AD96] font-[400]">Send Message</span>
      </template>
    </headers>

    <div class="text-[18px] text-center mb-14 bg:text-[#ddd] text-[#696969]">
      <span>Interested in getting 1-on-1 classes with a personal Tutor? </span><br />
      For Students Studying in CBSE, ICSE, IGCSE, IB & State Boards<br>
      <span class="border-2 border-[#20AD96] rounded-md mt-8 px-2 py-3 bg-[#20AD96] text-white font-[400]">Book a Free
        Demo</span>
    </div>

    
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
.icon {
  color: rgb(0, 173, 255);
}

.bg {
  background-image: url(/images/bg/become-a-teache-bg.jpg);
}

input,
textarea {
  padding: 10px 20px;
  border-radius: 3px;
  outline: none;
}
</style>