<template>
  <div class="py-[100px] bg-[#f5f5f5] dark:bg-[#111]">
    <headers data-aos="fade-up" data-aos-duration="2000">
      <template v-slot:headerone>Study with your favorite tutors</template>
      <template v-slot:headertwo>Secrete of learning revealed in blogs</template>
    </headers>

    <div class="public-container" data-aos="fade-up" data-aos-duration="2000">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <indexfivecard class="hoverItem">
          <template v-slot:img>
            <img src="/images/blog/blog-images-grid/blog-2.jpg" class="w-full lg:w-full h-[229px]" />
          </template>
          <template v-slot:date> <div class="tracking-widest	 uppercase"> Aug 7, 2022</div></template>
          <template v-slot:title><NuxtLink to="/blog/the-top-three-types-of-exam-mistakes-students-make-and-how-to-avoid-them" class=" text-[#3E3B64] hover:text-[#20ad96] mt-2">
            The Top Three Types of Exam Mistakes Students Make and How to Avoid Them
          </NuxtLink></template>
        </indexfivecard>
        <indexfivecard class="hoverItem">
          <template v-slot:img>
            <img src="/images/blog/blog-images-grid/blog-1.jpg" class="w-full lg:w-full h-[229px] relative" />
          </template>

          <template v-slot:date><div class="tracking-widest	 uppercase"> Jun 21, 2022</div></template>
          <template v-slot:title> <NuxtLink to="/blog/maximizing-exam-success-with-personalized-learning" class=" text-[#3E3B64] hover:text-[#20ad96] mt-2">
            Maximizing Exam Success with Personalized Learning: A Guide
          <br/>
          <br/>
          </NuxtLink> </template>
        </indexfivecard>
        <indexfivecard class="hoverItem">
          <template v-slot:img>
            <img src="/images/blog/blog-images-grid/blog-3.jpg" class="w-full lg:w-full h-[229px]" />
          </template>
          <template v-slot:date><div class="tracking-widest	 uppercase">Sep 15, 2022</div></template>
          <template v-slot:title> <NuxtLink to="/blog/ace-your-exams-how-to-memorize-different-formula-like-a-pro" class=" text-[#3E3B64] hover:text-[#20ad96] mt-2">
            Ace Your Exams: How to Memorize Different Formulae Like a Pro
            <br/>
          <br/>
          </NuxtLink> </template>
        </indexfivecard>
      </div>
    </div>

    <div class="w-full flex justify-center items-center mt-14" data-aos="fade-up" data-aos-duration="2000">
      <p class="
                w-10/12
                md:w-6/12
                text-[18px] text-center
                font-medium
                text-[#8C89A2]
              ">
        Get into details now?
        <NuxtLink to="/blog/bloggrid" class=" hover:cursor-pointer">
          <span class="
                  font-bold leading-none relative text-[#20ad96] bg-[rgba(0,0,0,0)] px-0 py-[3px] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(.165,0.84,0.44,1)] before:delay-[0.3s] before:origin-right before:bg-[#e0e0e0] before:scale-x-[100%] before:translate-y-0 before:absolute before:w-full before:h-px before:content-[''] before:left-0 before:bottom-0 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(.165,0.84,0.44,1)] after:origin-left after:bg-[#20ad96] after:scale-x-0 after:translate-y-0 after:absolute after:w-full after:h-px after:content-[''] after:left-0 after:bottom-0 hover:after:scale-x-[100%] hover:after:translate-y-0 hover:before:scale-x-0 hover:before:translate-y-0
                  ">View All Posts
            <!-- <icon name="uil:arrow-right" class="icon" /> -->
            <i class="fas fa-arrow-right text-[#20ad96]"></i>

          </span>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>


<style scoped>

.hoverItem{
transition-delay: 0.2s;

}
.hoverItem:hover {
  -webkit-box-shadow: -1px 2px 27px 0px rgba(224, 224, 224, 0.767);
-moz-box-shadow: -1px 2px 27px 0px rgba(224,224,224,0.767);
box-shadow: -1px 2px 27px 0px rgba(224,224,224,0.767);
transition-delay: 0.2s;
}
</style>