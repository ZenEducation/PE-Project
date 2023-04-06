<template>
  <div class="bg-[#111]">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center justify-center blue padding-responsive"
    >
      <div
        class="flex flex-col justify-center items-center sm:block text-center sm:text-left"
      >
        <h2 class="title large-title">
          Distant learning for further expansion
        </h2>
        <p>
          Learning is a life-long journey that in fact we never find<br />
          the terminate stop. Stop searching, enjoy the process.
        </p>

        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px] flex items-center"
        >
          <icon class="mr-2" name="uil:download-alt" />
          Download free guide
        </button>
        <div
          class="mt-[25px] flex flex-row items-center justify-center md:justify-start text-[#8C89A2]"
        >
          Have a question?
          <div
            class="flex flex-row items-center text-[#20AD96] font-bold border-b-[1px] ml-2 border-b-[#20AD96]"
          >
            Get free form <Icon class="text-[#20AD96]" name="uil:arrow-right" />
          </div>
        </div>
      </div>

      <div class="mt-10 md:mt-0 w-12/12 flex justify-center">
        <img
          class="rounded-[50%] md:ml-10"
          src="/images/others/contact.jpg"
          alt="image"
        />
      </div>
    </div>

    <div>
      <portalone />
    </div>

    <div>
      <portaltwo />
    </div>

    <div>
      <portalthree />
    </div>

    <div>
      <portalrates />
    </div>

    <div>
      <portalfour />
    </div>

    <div class="mt-0 pt-0 blue">
      <aboutmail />
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'frontend',
  })
</script>

<style scoped>
  .title {
    line-height: 1.17;
    font-weight: 700;
    letter-spacing: 2px;
    /* color: #3F3A64; */
    color: white;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67;
    color: #8c89a2;
    margin-top: 20px;
  }
</style>
