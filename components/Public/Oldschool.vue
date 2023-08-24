<template>
  <div class="flex justify-end lg:py-24   mx-auto ">
    <div class="relative dark:bg-black w-full lg:w-full flex flex-col lg:flex-row  mx-auto ">
      <div class=" lg:left-[-134px] lg:top-[60px] pt-[70px]">
        <img src="@/assets/images/teracher-quote-1.png" alt="image" class="w-[35rem]" />
      </div>

      <div id="space">
        <div class=" w-12/12 mt-10">
          <h2
            class="
              text-[24px]
              md:text-[34px]
              dark:text-white
              text-secondary
              font-[700]
              leading-[1.3]
              mb-[25px]
            "
          >
          The New Way of <span class="font-[400]">Learning in The 21st Centaury</span>
          </h2>
          <div class="flex flex-col md:flex-row ">
            <p
              class="
                text-[24px] dark:text-[#dddddd] text-body
                font-[600]
                leading-[1.5]
                lg:mr-10
                w-9/12 
            
              "
            >
            We assist students from all walks of life with our learning methodologies and kickstart the process of achieving your goals and upgrading to be a better you.
            </p>

            <div class="h-full w-3/12 mt-10 md:mt-0  ">
              <h2 class="text-[24px] text-[#20ad96] font-[800] leading-[1.3]">
                <span class="text-[48px] mr-[5px]">15</span>years
              </h2>

              <p
                class="
                  my-3
                  uppercase
                  text-[15px] 
                 
                  dark:text-[#fff]
                  font-[700]
                  tracking-[2px]
                "
              >
              tutoring experience
              </p>

              <button
                class="
                  flex
                  justify-center
                  items-center
                  text-[14px] dark:text-[#fff] text-body
                  font-[700]
                  cursor-pointer
                "
              >
                Get Free Guide
                <i class="fa-solid fa-arrow-right text-[#000] dark:text-[#fff] text-[17px] ml-3 text-gray-700"  style="line-height: 1;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
span {
  color: #20ad96;
}

@media only screen and (min-width: 400px) {
  #space {
    /* padding: 70px 0px 70px 0px; */
  }
}

#space {
  padding: 40px 0px 40px 40px;
}
</style>