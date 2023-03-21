<template>
  <div>
    <div>
      <headers class="mb-[60px]">
        <template v-slot:headerone>learn at your pace</template>
        <template v-slot:headertwo> Current Signature Courses </template>
      </headers>
    </div>
   <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <gridtwo>
        <template v-slot:tag>$40</template>
        <template v-slot:date>JAN 15, 2020</template>
        <template v-slot:title
          >Learning to Write as a Professional Author</template
        >
      </gridtwo>
      <gridtwo>
        <template v-slot:tag>Free</template>
        <template v-slot:date>JAN 18, 2020</template>
        <template v-slot:title>Customer-Centric Info-Tech-Strategies</template>
      </gridtwo>
      <gridtwo>
        <template v-slot:tag>$19</template>
        <template v-slot:date>MAR 19, 2020</template>
        <template v-slot:title
          >Open Programming Courses for Everyone:Python</template
        >
      </gridtwo>
    </div>
   </div>

    <div class="w-full flex justify-center items-center mt-14">
      <p
        class="
          w-10/12
          md:w-6/12
          text-[18px] text-center
          font-medium
          text-[#8C89A2]
        "
      >
        Get the most dedicated consultation for your life-changing course. Earn
        a certification for your effort and passion
        <span
          class="
            underline
            text-center text-[#20AD96]
            font-bold
            items-center
            leading-4
          "
          >Get a Guide
          <icon name="uil:arrow-right" class="icon" />
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: #20ad96;
}
</style>