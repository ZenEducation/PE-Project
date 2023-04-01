<template>
    <div class="dark:bg-black bg-white">
        <div class=" mx-auto bg-white dark:bg-black flex justify-center items-start">
            <div class=" w-2/4  flex justify-center items-center mt-10">
                <EnquiryLeftSection/>
            </div>
            <div class=" w-2/4  flex justify-center items-center mt-10">
                <EnquiryRightSection/>
            </div>
        </div>
        <div class="bg-[#f8f8f8] dark:bg-[#161821] p-3 my-3">
            <BecomeTutor />
        </div>

    </div>
</template>
<script>
definePageMeta({
    layout: "frontend",
});
</script>

