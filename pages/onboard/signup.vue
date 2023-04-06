<template>
    <OnboardLayout>
        <template v-slot:left>
            <div class="px-2 flex flex-col justify-center">
                <h2 class="mb-4 text-[28px] lg:text-[48px] text-slate-800 dark:text-white font-[700] leading-[56px]">
                    Online 1-on-1 Live Tution
                </h2>

                <h3 class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]">
                    <span class="rounded-md p-2 font-bold text-slate-800 dark:text-white bg-gray-800 mr-2">Class
                        1-12IB</span>
                    <span class="rounded-md p-2 font-bold text-slate-800 dark:text-white bg-gray-800"> ICSE | CBSE | IGCSE |
                        GCSE</span>
                </h3>

                <p class="text-slate-800 dark:text-white font-bold text-[15px]  mb-5">
                    Find your live 1-on-1 online tution tutor <br /> for school
                    subject's as per you school curriculum
                </p>
            </div>
        </template>

        <template v-slot:right>
            <form @submit.prevent="submitform" class="w-full p-8 rounded-md bg-[#333333]">
                <div class="flex flex-col justify-between w-12/12 mb-2 dark:text-white text-[#696969]">
                    <p class="text-[#ddd] mt-4 text-left">
                        <span>Name<span class="required">*</span></span>
                    </p>
                    <input
                        class="w-full  my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
                        type="text" :placeholder="`Enter ${user.type} name`" id="" v-model="registration.name" />
                    <p class="text-[#ddd] mt-4 text-left">
                        <span>Email ID<span class="required">*</span></span>
                    </p>
                    <input
                        class="w-full  my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
                        type="email" placeholder="Enter Your Email Id*" id="" v-model="registration.email" />

                    <p class="text-[#ddd] mt-4 text-left">
                        <span>Mobile number<span class="required">*</span></span>
                    </p>
                    <input
                        class="w-full my-2 dark:bg-[#222] border-none focus:ring-primary bg-[#f5f5f5] placeholder-[#696969]"
                        type="text" placeholder="Enter Mobile No" id="" v-model="registration.subject" />

                    <p class="text-[#ddd] mt-4 text-left">
                        <span>Type of User<span class="required">*</span></span>
                    </p>
                    <multiselect v-model="user" label="label" :options="users"></multiselect>
                </div>
                <div class="w-full flex justify-center">
                    <button class="text-[14px] text-white font-bold px-12 py-2 bg-[#20ad96] rounded-md mt-8">
                        Book Now
                    </button>
                </div>
            </form>
        </template>
    </OnboardLayout>
</template>

<script setup>
import { reactive } from "vue";
import OnboardLayout from './-component/onboardLayout.vue';
import Multiselect from 'vue-multiselect'

definePageMeta({
    layout: 'frontend',
})
const router = useRouter()
const registration = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
})
const users = [
    { type: 'student', label: 'Student' },
    { type: 'parent', label: 'Parent/Guardian/Relative' },
    { type: 'employee', label: 'Mediator/Company/Other/Misellaneous' },
]
const user = ref(users[0])
function submitform() {
    router.push({ path: '/onboard/verify' })
}
</script>
