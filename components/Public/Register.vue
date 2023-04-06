<template>
  <div
    class="dark:bg-[#111] shadow border dark:border-none rounded-md flex justify-end w-full md:max-w-full lg:max-w-[576px]"
  >
    <div class="w-full py-[30px] px-5 md:px-[56px] rounded-md">
      <h2 class="text-left dark:text-white font-bold text-[34px] mb-[36px]">
        Register
      </h2>

      <form @submit.prevent="submitform" class="font-light dark:text-white w-full">
        <div>
          <label for="name">Username</label>
          <input
            class="w-full my-2 bg-[#f5f5f5] dark:bg-[#222] placeholder-gray-700"
            type="text"
            placeholder="Username"
            id="name"
            v-model="registration.name"
          />
        </div>

        <div class="mt-4">
          <label for="email">Email</label>
          <input
            class="w-full my-2 bg-[#f5f5f5] dark:bg-[#222] placeholder-gray-700"
            type="email"
            placeholder="Email"
            id="email"
            v-model="registration.email"
          />
        </div>

        <div class="mt-4">
          <label for="password">Password</label>
          <input
            class="w-full my-2 bg-[#f5f5f5] dark:bg-[#222] placeholder-gray-700"
            type="password"
            placeholder="Password"
            id="password"
            v-model="registration.number"
          />
        </div>

        <div class="flex justify-between items-center">
          <p class="description">
            The password must be at least twelve characters long, contain upper
            and lower case letters, contain numbers, contain symbols like ! " ?
            $ % ^ &amp;
          </p>
        </div>

        <div class="w-full">
          <button
            class="w-full text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-12"
          >
            Register
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
    password: '',
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
.description {
  font-style: italic;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 0;
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
  border: solid 0.5px #333;
  border-radius: 3px;
  outline: none;
}
</style>