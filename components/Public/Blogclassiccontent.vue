<template>
  <div v-for="blog in blogs" :key="blog.id">
    <div class="w-12/12 py-10 border-b border-b-1 border-[#555] overflow-hidden">
      <img class="w-full rounded-md hover:scale-[1.05] transition-all ease-in-out duration-500" :src="blog.image" alt="Connection Between Self-Portraits and Identity" />

      <div>
        <div class="p-8 pl-0 pb-10 dark:blue rounded-b-md">
          <span class="text-[15px] dark:text-[#8C89A2] text-[#696969] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ blog.bio }}</span>
          <h3 class="text-[24px] dark:text-white text-[#333] hover: font-extrabold leading-[1.5] mb-1">
            {{ blog.title }}
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light dark:text-[#ddd] text-[#696969]">
            <span class="flex justify-center items-center mr-4">
              <img src="/images/blog/blog-avatar.jpg" alt="image" class="rounded-[50%] mr-2 w-[32px] h-[32px]" />
              <span
                class="dark:text-[#ddd] text-[#696969] hover:text-[#20ad96] dark:hover:text-[#20ad96] hover:cursor-pointer">{{
                  blog.name }}</span>
            </span>

            <span class="flex justify-center items-center dark:text-[#ddd] text-[#696969]">

              <i class="fa-solid fa-calendar-days w-4 h-4 mr-2"></i>
              <span class="dark:text-[#ddd] text-[#696969]">{{ blog.date }}</span>
            </span>

            <span class="ml-4 flex justify-center items-center dark:text-[#ddd] text-[#696969]">

              <i class="fa-regular fa-eye w-4 h-4 mr-2"></i>
              <span class="dark:text-[#ddd] text-[#696969]">{{ blog.views }}</span>
            </span>
          </div>

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] my-4">
            {{ blog.summary }}
          </div>

          <div class="flex items-center justify-between pt-4">
            <button class="w-auto text-[14px] text-white font-bold px-10 py-4 bg-[#20ad96] hover:bg-[#3F3A64] rounded-md">
              Reead more
            </button>
            <div class="flex items-center dark:text-[#ddd] text-[#696969]">
              Share this post

             <div class="group">
              <span class="shadow border border-[#ddd] group-hover:bg-[#20ad96] rounded-[50%] w-12 h-12 flex justify-center items-center ml-4">
                <i class="w-5 h-5 text-[#20ad96] group-hover:text-white fa fa-share" name="uil:share-alt" />
              </span>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
blogs: [
    {
        id: 1,
        image: "/images/blog/blog_images/blog-1.jpg",
        name: '',
        bio: '',
        date: 'June 21, 2022',
        title: 'Maximizing Exam Success with Personalized Learning: A Guide',
        views: '156 views',
        summary: "Personalized classes provide a tailor-made approach to learning that can greatly improve a student's chances of success in competitive exams. They offer a more flexible schedule, a more focused learning experience, and more interaction with the instructor. Personalized classes can greatly increase a student's chances of success in competitive exams by providing a customized approach to learning."
    },

        {
        id: 2,
        image: "/images/blog/blog_images/blog-2.jpg",
        name: '',
        bio: '',
        date: 'August 7, 2022',
        title: 'The Top Three Types of Exam Mistakes Students Make and How to Avoid Them',
        views: '154 views',
        summary: 'Exams are important, but mistakes happen. There are three common types of exam mistakes: conceptual errors from not understanding concepts, execution errors from not applying knowledge effectively, and silly mistakes from being careless. To avoid these mistakes, students should practice problem-solving, understand concepts deeply, and stay focused.'
    },

        {
        id: 3,
        image: "/images/blog/blog_images/blog-3.jpg",
        name: '',
        bio: '',
        date: 'September 15, 2022',
        title: 'Ace Your Exams: How to Memorize Different Formulae Like a Pro',
        views: '297 views',
        summary: 'Memorizing formulas can be tough for students. To make it easier, break down the formula into parts and understand how they work together. Create flashcards, practice regularly, use mnemonic devices like rhymes or phrases, and visualize the formula to remember it. Look for connections between different formulas and concepts. With practice and the right approach, memorizing formulas can become easier, leading to better exam performance.'
    }

]
            
        }
    }
}
</script>

<style>
</style>