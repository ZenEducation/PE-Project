<template>
    <div class="dark:bg-black bg-white">
        <div class=" mx-auto bg-white dark:bg-black flex flex-col justify-center  items-center">
            <courseheader>
                <template v-slot:title>Donations</template>
            </courseheader>
            <div class="flex flex-col justify-center items-center">
                <p class="dark:text-[#ddd] ">Help the Paathshala EduCare team serve better Education each moment!</p>
                <button class="rounded-3xl bg-blue-900 w-1/3 text-white hover:bg-[#20ad96] m-10 p-2">Donate to Paathshala <br> <span class="text-sm text-[#ddd]">Secured by Razorpay</span></button>
            </div>
    </div>
    <div class="bg-[#f8f8f8] dark:bg-[#161821] p-3 my-3">
        <BecomeTutor />
    </div>

</div></template>
<script>
definePageMeta({
    layout: "frontend",
});
</script>

