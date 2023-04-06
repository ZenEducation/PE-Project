<template>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
        <div v-for="rate in learningrates" :key="rate.number"
            class="flex flex-col justify-center items-center rounded-md mb-[30px] px-3 py-0 hover:cursor-pointer hover:shadow-sm mx-2">
            <h2 class="text-[48px] text-[#20AD96] font-extrabold">
                {{ rate.number }}
            </h2>
            <h4
                class="dark:text-white text-[#3f3a64] text-[15px] font-bold uppercase tracking-[2px] leading-[1.34] mt-3.5">
                {{ rate.title }}</h4>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            learningrates: [

                {
                    number: 1260000,
                    title: 'MINUTES TAUGHT'
                },

                {
                    number: 712,
                    title: 'AMAZING EDUCATORS'
                },
                {
                    number: 9,
                    title: 'YEARS SPENT EDUCATING AND EMPOWERING'
                },
                {
                    number: 1157,
                    title: 'COURSE MODULES'
                }
            ]
        }
    }
}
</script>
  
<style scoped></style>