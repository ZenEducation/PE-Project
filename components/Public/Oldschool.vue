<template>
  <div class="flex justify-end lg:py-24">
    <div class="relative dark:bg-black w-full lg:w-10/12 flex flex-col lg:flex-row">
      <div class="hidden lg:block lg:absolute lg:left-[-134px] lg:top-[60px]">
        <img src="/images/others/teracher-quote-1.jpeg" alt="image" />
      </div>

      <div id="space">
        <div class="lg:ml-36 w-12/12 mt-10">
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
          <div class="flex flex-col md:flex-row w-12/12">
            <p
              class="
                text-[24px] dark:text-[#dddddd] text-body
                font-[600]
                leading-[1.5]
                lg:mr-10
              "
            >
            We assist students from all walks of life with our learning methodologies and kickstart the process of achieving your goals and upgrading to be a better you.
            </p>

            <div class="h-full w-full mt-10 md:mt-0 md:ml-4">
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
    padding: 70px 30px 70px 50px;
  }
}

#space {
  padding: 40px;
}
</style>