<template>
  <div class="py-[100px]">
    <div class="flex flex-col justify-center lg:justify-start">
      <div class="text-left md:text-left text-white font-bold text-[24px]">
        Leave your thought here
      </div>

      <p class="text-[#ddd] mt-[30px] text-left">
        <span id="email-notes">Your email address will not be published.</span>
        Required fields are marked <span class="required">*</span>
      </p>

      <form @submit.prevent="submitform" class="w-full lg:w-12/12 mt-10">
        <div class="flex justify-between items-center w-12/12 mb-4">
          <input class="w-6/12 mr-4" type="text" placeholder="Your Name" id="" v-model="thought.name" />
          <input class="w-6/12 ml-2" type="email" placeholder="Email" id="" v-model="thought.email" />
        </div>

        <textarea class="w-full text-white my-2 min-h-[220px] mb-3" placeholder="Your Mesage"
          v-model="thought.message"></textarea>

        <div class="flex items-center my-5">
          <input type="checkbox" v-model="thought.savemyname" name="" id="savemyname" />
          <label class="ml-2 text-[#ddd] text-[15px] leading-[1.74]" for="savemyname">Save my name, email, and website in
            this browser for the next time
            I comment.</label>
        </div>

        <div class="w-full flex justify-start">
          <button
            class="text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] hover:bg-[#3F3A64] transition-all rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thought: {
        name: '',
        email: '',
        message: '',
        savemyname: false,
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
  background-color: #222;
  border: solid 0.5px #333;
  border-radius: 3px;
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #696969;
}
</style>