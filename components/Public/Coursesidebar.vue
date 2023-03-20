<template>
  <div class="bg-[#111] w-[340px] rounded-lg">
    <div class="w-12/12 p-[30px] text-[15px] text-white">
      <div class="grid grid-cols-2">
        <span>
          <icon name="uil:pricetag-alt" />
          <h2>Price</h2>
        </span>

        <h1 class="text-[24px] text-[#20AD96] text-right font-extrabold">
          Free
        </h1>
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:pricetag-alt" />
            <h2>Instructor</h2>
          </span>

          <p>Maggie Strickland</p>
        </div>
        <hr />
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:clock" />
            <h2>Duration</h2>
          </span>

          <p>15 weeks</p>
        </div>
        <hr />
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:book-open" />
            <h2>Lectures</h2>
          </span>

          <p>24</p>
        </div>
        <hr />
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:user-circle" />
            <h2>Enrolled</h2>
          </span>

          <p>629 Students</p>
        </div>
        <hr />
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:english-to-chinese" />
            <h2>Language</h2>
          </span>

          <p>English</p>
        </div>
        <hr />
      </div>

      <div>
        <div class="grid grid-cols-2 py-[15px]">
          <span>
            <icon name="uil:calender" />
            <h2>Deadline</h2>
          </span>

          <p>05 Jan 2019</p>
        </div>
        <hr />
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <button
          class="w-full text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-12"
        >
          Enroll
        </button>

        <span class="mt-5">
          <h2 class="mr-3 text-[13px]">Share this course</h2>
          <icon name="uil:share-alt" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  line-height: 1.3;
}

p {
  font-weight: 400;
  line-height: 1.74;
  color: #dddddd;
  text-align: right;
}

icon {
  width: 24px;
  height: 24px;
}

span {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
