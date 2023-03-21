<template>
  <div class="pt-[100px]">
    <div class="flex flex-col justify-center items-center">
      <div
        class="text-center md:text-left dark:text-white font-bold text-[34px] px-3"
      >
        Fill out this form for booking a<br />
        consultant advising session.
      </div>

      <form @submit.prevent="submitform" class="w-full lg:w-7/12 mt-20">
        <div class="flex justify-between items-center w-12/12 mb-2 dark:text-white text-[#696969] ">
          <input
            class="w-6/12 mr-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
            type="text"
            placeholder="Your Name"
            id=""
            v-model="registration.name"
          />
          <input
            class="w-6/12 ml-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
            type="email"
            placeholder="Email"
            id=""
            v-model="registration.email"
          />
        </div>

        <input
          class="w-full my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
          type="text"
          placeholder="Subject"
          id=""
          v-model="registration.subject"
        />
        <textarea
          class="w-full dark:text-white my-2 min-h-[220px] dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
          placeholder="Your Mesage"
          v-model="registration.message"
        ></textarea>

        <div class="w-full flex justify-center">
          <button
            class="text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-8"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
data(){
return{
    registration: {
    name: '',
    email: '',
    subject: '',
    message: '',
}
}
},

methods: {
    submitform(){
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