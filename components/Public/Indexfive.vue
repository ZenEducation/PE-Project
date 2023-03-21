<template>
  <div class="py-[100px] bg-[#f5f5f5] dark:bg-[#111]">
    <headers>
      <template v-slot:headerone>Study with your favorite tutors</template>
      <template v-slot:headertwo
        >Secrete of learning revealed in blogs</template
      >
    </headers>

    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <indexfivecard>
          <template v-slot:date>Online Education</template>
          <template v-slot:title
            >Learning to Write as a Professional Author</template
          >
        </indexfivecard>
        <indexfivecard>
          <template v-slot:date>Learning Strategies</template>
          <template v-slot:title
            >Five Essential Online Learning Strategies</template
          >
        </indexfivecard>
        <indexfivecard>
          <template v-slot:tag class="hidden"></template>
          <template v-slot:date>Learning Strategies</template>
          <template v-slot:title
            >Five Essential Online Learning Strategies</template
          >
        </indexfivecard>
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
        Get into details now?
        <span
          class="
            underline
            text-center text-[#20AD96]
            font-bold
            items-center
            leading-4
          "
          >View all posts
          <icon name="uil:arrow-right" class="icon" />
        </span>
      </p>
    </div>
  </div>
</template>