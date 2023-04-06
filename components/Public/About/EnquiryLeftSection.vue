<template>
    <div>
        <div class=" m-5">
            <h1 class="text-2xl text-[#20ad96] font-semibold">We are Ever, Happy to Help!</h1>
            <p class="text-md dark:text-[#ddd] text-[#696969]">Welcome to our Paathshala Education. Glad to have you around.</p>
        </div>
        <div class="flex my-10 p-10 border-y border-gray-300 w-full">
            <div class="flex justify-center w-[50%] flex-col gap-4">
                <div class="dark:text-white text-black">
                    <h3><i class="fa-solid fa-phone"></i> Phone</h3>
                </div>
                <div class="dark:text-white text-black">
                    <p>+91 77962 69677</p>
                </div>
            </div>
            <div class="flex justify-center w-[50%] flex-col gap-4">
                <div class="dark:text-white text-black">
                    <h3><i class="fa-sharp fa-solid fa-envelope"></i> Email</h3>
                </div>
                <div class="flex flex-col dark:text-white text-black">
                    <p>photon@paathshala.world</p>
                    
                </div>
            </div>
        </div>
        <div class="flex justify-center gap-2 mb-2">
            <NuxtLink to="https://www.facebook.com/paathshalafortheworld">
                <i class="fa-brands fa-square-facebook text-blue-900 hover:text-blue-700 hover:cursor-pointer text-xl"></i>
            </NuxtLink>
            <!-- <i class="fa-brands fa-square-instagram text-pink-700 hover:text-[#c13584] hover:cursor-pointer text-xl"></i> -->
            <NuxtLink to="https://www.linkedin.com/company/paathshala-ascension">
                <i class="fa-brands fa-linkedin text-sky-900 hover:text-sky-600 hover:cursor-pointer text-xl"></i>
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com/c/PaathshalaEducation">
                <i class="fa-brands fa-square-youtube text-[#ff0000] hover:text-red-800 hover:cursor-pointer text-xl"></i>
            </NuxtLink>
        </div>
    </div>
</template>

