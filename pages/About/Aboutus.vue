<template>
    <div class=" dark:bg-black bg-white">
        <div class=" mx-auto bg-white dark:bg-black">
            <courseheader>
                <template v-slot:title>About Us</template>
            </courseheader>
            <div class="text-center py-5">
                <h3 class=" text-2xl font-semibold text-[#3f3a64] dark:text-white">Our Story</h3>
                <p class=" text-gray-400 font-semibold">Every Starts At The Beginning. Our Story Starts Here</p>
            </div>
            <Aboutcount />
            <div class="w-full flex justify-center">

                <iframe width="853" height="480" src="https://www.youtube.com/embed/1_EHjoUFUzQ"
                    title="Empowering the World With Paathshala" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <MissionVission />
            <div class="bg-[#f8f8f8] dark:bg-[#161821] p-3 my-3">
                <PaathshalaAbout />
                
            </div>
            <div class="bg-white dark:bg-black pt-3 mt-3">
                <MessagePaathshala/>
            </div>



        </div>

    </div>
</template>

<script>
definePageMeta({
    layout: "frontend",
});




</script>

<style lang="scss" scoped></style>