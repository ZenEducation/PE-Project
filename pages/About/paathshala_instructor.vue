<template>
    <div class=" dark:bg-black bg-white">
        <div class="mx-auto bg-white dark:bg-black">
            <courseheader>
                <template v-slot:title>Become a Paathshala Instructor</template>
            </courseheader>
            <p class="text-gray-400 text-center">We Persue Excellence. Do You?</p>
            <div class="mt-28">
                <h2 class="text-3xl font-bold text-center">How to become a Paathshala Instructor</h2>
                <p class="text-gray-400 text-center">Join the Revolution!</p>
                <div class=" grid grid-cols-2 container mt-4">
                    <h1 class="h-10 bg-gray-500 mx-10 flex justify-center items-center border-t-4 border-green-800">Please
                        <NuxtLink to="#">&nbsp;Login&nbsp;</NuxtLink> to Send Your Request
                    </h1>
                    <div class="grid grid-cols-1">
                        <ul class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row" role="tablist"
                            data-te-nav-ref>
                            <li role="presentation" class="flex-auto text-center">
                                <a href="#tabs-home01"
                                    class="mb-2 block border-x-0 border-t-4 border-b-0 border-transparent px-7 pt-4 pb-3.5 text-xs font-semibold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-[#ffb606] data-[te-nav-active]:text-[#ffb606] hover:text-[#ffb606] hover:border-[#ffb606] dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                    data-te-toggle="pill" data-te-target="#tabs-home01" data-te-nav-active role="tab"
                                    aria-controls="tabs-home01" aria-selected="true"><i class="fa-solid fa-user-plus"></i> &nbsp; &nbsp;Become an Instructor</a>
                            </li>
                            <li role="presentation" class="flex-auto text-center">
                                <a href="#tabs-profile01"
                                    class="focus:border-transparen mb-2 block border-x-0 border-t-4 border-b-0 border-transparent px-7 pt-4 pb-3.5 text-xs font-semibold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-[#ffb606] data-[te-nav-active]:text-[#ffb606] hover:text-[#ffb606] hover:border-[#ffb606] dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                    data-te-toggle="pill" data-te-target="#tabs-profile01" role="tab"
                                    aria-controls="tabs-profile01" aria-selected="false">Why Paathshala</a>
                            </li>
                            <li role="presentation" class="flex-auto text-center">
                                <a href="#tabs-messages01"
                                    class=" font-semibold mb-2 block border-x-0 border-t-4 border-b-0 border-transparent px-7 pt-4 pb-3.5 text-xs uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-[#ffb606] data-[te-nav-active]:text-[#ffb606] hover:text-[#ffb606] hover:border-[#ffb606] dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                    data-te-toggle="pill" data-te-target="#tabs-messages01" role="tab"
                                    aria-controls="tabs-messages01" aria-selected="false">Join The Mission</a>
                            </li>
                           
                        </ul>
                        <div class="mb-6">
                            <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-home01" role="tabpanel" aria-labelledby="tabs-home-tab01" data-te-tab-active>
                                <BecomeInstructor/>


                            </div>
                            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-profile01" role="tabpanel" aria-labelledby="tabs-profile-tab01">
                                <WhyPaathshala/>
                            </div>
                            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                                id="tabs-messages01" role="tabpanel" aria-labelledby="tabs-profile-tab01">
                                <JoinMission/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#f8f8f8] dark:bg-[#161821] p-3 my-3">
                <BecomeTutor/>
            </div>

    </div>
</template>

<script>
definePageMeta({
    layout: "frontend",
});
export default {
    head() {
        return {
            script: [
                {
                    src: "~/tw-elements/dist/js/index.min.js"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>