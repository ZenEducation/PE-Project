<template>
  <div>
    <h2 class="pb-[26px]">Reviews</h2>

    <div class="flex flex-col sm:flex-row mb-10">
      <div class="sm:mr-6 lg:min-w-[243px] lg:min-h-[243px]">
        <p class="pb-4">Average Rating</p>

        <div
          class="
            lg:max-w-[189px]
            py-8
            px-7
            rounded-sm
            bg-[#111]
            flex flex-col
            justify-center
          "
        >
          <h1 class="text-[56px] text-center text-[#20ad96] font-bold mb-2">
            4.50
          </h1>

          <div class="w-full flex flex-row justify-center">
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
          </div>

          <p class="mt-1 text-center">(2 ratings)</p>
        </div>
      </div>

      <div class="w-full mt-10 lg:mt-0">
        <p class="pb-4 lg:pb-10">Detailed Rating</p>

        <div class="flex flex-col">
          <ratingbars />
          <ratingbars />
          <ratingbars />
          <ratingbars />
          <ratingbars />
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row pt-5 pr-5 pb-8">
      <div class="mb-5 md:mb-0 md:mr-5 w-full md:w-auto">
        <img
          class="rounded-full min-w-[96px] h-[96px]"
          src="/images/review-author/author1.jpeg"
          alt="author"
        />
      </div>

      <div>
        <div class="w-full flex justify-between items-center">
          <p class="head uppercase">ednawatson</p>
          <div class="w-full flex flex-row justify-end">
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
            <icon class="w-4 h-4" name="uil:star" />
          </div>
        </div>
        <p class="head">Cover all my needs</p>

        <p>
          The course identify things we want to change and then figure out the
          things that need to be done to create the desired outcome. The course
          helped me in clearly define problems and generate a wider variety of
          quality solutions. Support more structures analysis of options leading
          to better decisions.
        </p>
      </div>

      <hr />
    </div>
  </div>
</template>

<style scoped>
span {
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
  font-size: 30px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 18px;
  color: #ffffff;
}

p {
  font-size: 15px;
  line-height: 1.74;
  font-weight: 400;
  color: #ddd;
}

.head {
  font-weight: bold;
  font-size: 15px;
  line-height: 1.74;
  font-weight: 400;
  color: white;
}
</style>