<template>
    <div class="dark:blue py-[100px] font-body px-5 ">
        <div>
            <contactusform />
        </div>

        <div class="container">
            <div class="flex flex-col">
                <div class="mb-[40px]">
                    <h2 class="title text-center dark:text-white">
                        For more information about our courses, get in <br />
                        touch with MaxCoach via contacts
                    </h2>
                </div>

                <div class="flex flex-wrap md:flex-row items-start justify-between mt-10">
                    <contactdetails />
                </div>
            </div>

            <div class="sm:p-2 mt-10">
                <div class="w-full h-[50vh] pb-10 md:pb-0">
                    <iframe class="w-full h-full z-10 inline-block"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
definePageMeta({
    layout: "frontend",
});
</script>
  
<style scoped>
.sub-title {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    font-weight: 500;
    color: #ddd;
    margin-bottom: 10px;
}

.title {
    font-size: 34px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 0;
}
</style>