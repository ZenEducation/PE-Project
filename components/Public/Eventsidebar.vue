<template>
  <div class="bg-[#111] w-auto lg:w-[340px] rounded-lg">
    <div class="w-12/12 p-[30px] text-[15px] text-white">
      <div class="grid grid-cols-2">
        <span>
          <icon name="uil:pricetag-alt" />
          <h2 class="font-bold">Cost</h2>
        </span>

        <h1
          class="text-[24px] text-[#20AD96] text-right font-extrabold flex justify-end content-end items-end"
        >
          $19.<span class="text-[18px] leading-[32px]">00</span>
        </h1>
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:users-alt" />
            <h2 class="font-bold">Total Slot:</h2>
          </span>

          <p>99</p>
        </div>
        <hr />
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:padlock" />
            <h2 class="font-bold">Booked Slot:</h2>
          </span>

          <p>0</p>
        </div>
        <hr />
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <button
          class="w-full text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-12"
        >
          Book Now
        </button>

        <div class="mt-5">
          <h2 class="mr-3 text-[13px] font-light text-center">
            You must
            <a href="http://" class="font-bold text-[#20ad96]">login</a> before
            register event.
          </h2>
        </div>

        <div class="flex items-center pt-6 pb-4">
          <span class="roundicon"><icon name="uil:facebook-f" /></span>
          <span class="roundicon"><icon name="uil:twitter" /></span>
          <span class="roundicon"><icon name="uil:linkedin" /></span>
          <span class="roundicon"><icon name="uil:parking-circle" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roundicon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin: 0px 4px;
  line-height: 40px;
  border: 1px solid #ededed;
  border-radius: 50%;
  text-align: center;
}

h2 {
  line-height: 1.3;
  margin-left: 8px;
}

p {
  font-weight: 400;
  line-height: 1.74;
  color: #dddddd;
  text-align: right;
}

span {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>