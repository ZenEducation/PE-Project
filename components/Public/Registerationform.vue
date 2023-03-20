<template>
  <div class="bg p-[100px] flex justify-end">
    <div class="blue w-6/12 py-[60px] px-[56px] rounded-md">
      <h2 class="text-center text-white font-bold text-[34px] mb-[36px]">
        Register to become an instructor
      </h2>

      <div
        class="
          rounded-md
          py-[10px]
          px-[12]
          bg-[#222]
          text-[#ddd]
          flex
          items-center
          mb-5
        "
      >
        <span class="h-full px-4">
          <icon class="icon" name="uil:info-circle" />
        </span>
        <p>
          please <span class="text-[#20AD96]">login</span> to send your request!
        </p>
      </div>

      <form @submit.prevent="submitform" class="w-full">
        <div class="flex justify-between items-center w-12/12 mb-2">
          <input
            class="w-6/12 mr-2"
            type="text"
            placeholder="Your Name"
            id=""
            v-model="registration.name"
          />
          <input
            class="w-6/12 ml-2"
            type="email"
            placeholder="Email"
            id=""
            v-model="registration.email"
          />
        </div>

        <input
          class="w-full my-2"
          type="text"
          placeholder="Your phone number"
          id=""
          v-model.number="registration.number"
        />
        <textarea
          class="w-full text-white my-2 min-h-[220px]"
          placeholder="Your Mesage"
          v-model="registration.message"
        ></textarea>

        <div class="w-full flex justify-center">
          <button
            class="
              text-[14px] text-white
              font-bold
              px-12
              py-4
              bg-[#20ad96]
              rounded-md
              mt-12
            "
          >
            Get the learning program
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
    number: '',
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
p {
}

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