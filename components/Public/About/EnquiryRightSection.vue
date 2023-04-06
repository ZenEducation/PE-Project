<template>
    <div class="w-full px-10 ">
        <div class=" m-5">
            <h1 class="text-2xl  font-semibold text-black dark:text-white ">Enquire with us</h1>
            <p class="text-md dark:text-[#f8f8f8]">Register for a callback</p>
        </div>
        <div class="flex my-10 p-5  flex-col gap-4 ">
            <input type="text" name="name" class=" dark:bg-[#161821] dark:border-none bg-[#f8f8f8] w-full placeholder:text-gray-300 text-gray-300" placeholder="Enter Your Name *">
            <input type="email" name="email" class=" dark:bg-[#161821] dark:border-none bg-[#f8f8f8] w-full placeholder:text-gray-300 text-gray-300" placeholder="Enter Your Email ID">
            <input type="email" name="phone" class="dark:bg-[#161821] dark:border-none bg-[#f8f8f8] w-full placeholder:text-gray-300 text-gray-300" placeholder="Enter Your Phone Number *">
            <select name="course" id="course" class=" dark:bg-[#161821] dark:border-none bg-[#f8f8f8] w-full text-gray-300">
                <option value="iitjee / pre-engineering">IITJEE / Pre-Engineering</option>
                <option value="neet / pre-medical">NEET / Pre-Medical</option>
                <option value="foundation">Foundation</option>
                <option value="olympiads">Olympiads</option>
                <option value="others">Others</option>
            </select>
            <textarea name="message" id="message" cols="30" rows="5" class=" dark:bg-[#161821] dark:border-none bg-[#f8f8f8] w-full placeholder:text-gray-300 text-gray-300" placeholder="Send us a Message"></textarea>
            <input type="button" value="Enquire Now" class="bg-[#20ad96] py-2 text-white w-1/3 hover:bg-[#3f3a64] transition-all ease-in-out duration-300 hover:cursor-pointer">
        </div>
    </div>
</template>
