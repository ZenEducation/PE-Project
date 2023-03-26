<template>
    <OnboardLayout>
        <template v-slot:right>
            <div class="py-[100px]">
                <div class="flex flex-col justify-center lg:justify-start">
                    <div class="text-left md:text-left text-white font-bold text-[24px]">
                        Let's understand your requirements.
                    </div>

                    <form @submit.prevent="submitform" class="w-full lg:w-12/12 mt-10">
                        <div class="flex justify-between items-center w-12/12 mb-4">
                            <div clas="w-6/12 mr-4">
                                <p class="text-[#ddd] mt-[30px] text-left">
                                    <span>Your name<span class="required">*</span></span>
                                </p>
                                <input class="w-full" type="text" placeholder="Name" v-model="thought.name" />
                            </div>
                            <div class="w-6/12 mr-4">
                                <p class="text-[#ddd] mt-[30px] text-left">
                                    <span>Your Email<span class="required">*</span></span>
                                </p>
                                <input class="w-full" type="email" placeholder="Email" v-model="thought.email" />
                            </div>
                        </div>

                        <p class="text-[#ddd] mt-[30px] text-left">
                            <span>Requirement details<span class="required">*</span></span>
                        </p>
                        <textarea class="w-full text-white my-2 min-h-[220px] mb-3"
                            placeholder="A brief description of the requirements" v-model="thought.message">
                        </textarea>

                        <div class="flex items-center my-5">
                            <input type="checkbox" v-model="thought.savemyname" name="" id="savemyname" />
                            <label class="ml-2 text-[#ddd] text-[15px] leading-[1.74]" for="savemyname">Save my name, email,
                                and website in
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
    </OnboardLayout>
</template>

<script setup>
import { reactive } from 'vue';
import OnboardLayout from './-component/onboardLayout.vue';
definePageMeta({
    layout: 'frontend',
})
const thought = reactive({
    name: '',
    email: '',
    message: '',
    savemyname: false,
})
function submitform() { }
</script>
