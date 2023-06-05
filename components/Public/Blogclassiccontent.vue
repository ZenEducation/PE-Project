<template>
  <div v-for="blog in blogs" :key="blog.id" :id="blog.id">
    <div class="w-12/12 py-10 border-b border-b-1 border-[#555] overflow-hidden">
      <img class="w-full rounded-md hover:scale-[1.05] transition-all ease-in-out duration-500" :src="blog.image"
        alt="Connection Between Self-Portraits and Identity" />

      <div>
        <div class="p-8 pl-0 pb-10 dark:blue rounded-b-md">
          <span class="text-[15px] dark:text-[#8C89A2] text-[#696969] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ blog.bio }}</span>
          <h3 class="text-[24px] dark:text-white text-[#333] hover: font-extrabold leading-[1.5] mb-1">
            {{ blog.title }}
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light dark:text-[#ddd] text-[#696969]">
            <span class="flex justify-center items-center mr-4">
              <img src="/images/logo/photon-logo-earth.png" alt="image" class="rounded-[50%] mr-2 w-[32px] h-[32px]" />
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
            <NuxtLink :to="`/blog/${blog.link}`">
              <button class="w-auto text-[14px] text-white font-bold px-10 py-4 bg-[#20ad96] hover:bg-[#3F3A64] rounded-md">
              Read more
            </button>
            </NuxtLink>
            <div class="flex items-center dark:text-[#ddd] text-[#696969]">
              Share this post

              <div class="group">
                <span
                  class="shadow border border-[#ddd] group-hover:bg-[#20ad96] rounded-[50%] w-12 h-12 flex justify-center items-center ml-4">
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
  data() {
    return {
      blogs: [
        {
          id: 1,
          image: "/images/blog/blog_images/blog-1.jpg",
          name: '',
          bio: '',
          date: 'June 21, 2022',
          title: 'Maximizing Exam Success with Personalized Learning: A Guide',
          views: '156 views',
          summary: "Personalized classes provide a tailor-made approach to learning that can greatly improve a student's chances of success in competitive exams. They offer a more flexible schedule, a more focused learning experience, and more interaction with the instructor. Personalized classes can greatly increase a student's chances of success in competitive exams by providing a customized approach to learning.",
          link: "maximizing-exam-success-with-personalized-learning"
        },

        {
          id: 2,
          image: "/images/blog/blog_images/blog-2.jpg",
          name: '',
          bio: '',
          date: 'August 7, 2022',
          title: 'The Top Three Types of Exam Mistakes Students Make and How to Avoid Them',
          views: '154 views',
          summary: 'Exams are important, but mistakes happen. There are three common types of exam mistakes: conceptual errors from not understanding concepts, execution errors from not applying knowledge effectively, and silly mistakes from being careless. To avoid these mistakes, students should practice problem-solving, understand concepts deeply, and stay focused.',
          link: "the-top-three-types-of-exam-mistakes-students-make-and-how-to-avoid-them"
        },

        {
          id: 3,
          image: "/images/blog/blog_images/blog-3.jpg",
          name: '',
          bio: '',
          date: 'September 15, 2022',
          title: 'Ace Your Exams: How to Memorize Different Formula Like a Pro',
          views: '297 views',
          summary: 'Memorizing formulas can be tough for students. To make it easier, break down the formula into parts and understand how they work together. Create flashcards, practice regularly, use mnemonic devices like rhymes or phrases, and visualize the formula to remember it. Look for connections between different formulas and concepts. With practice and the right approach, memorizing formulas can become easier, leading to better exam performance.',
          link: "ace-your-exams-how-to-memorize-different-formula-like-a-pro"
        },
        {
          id: 4,
          image: "/images/blog/blog_images/blog-4.jpg",
          name: '',
          bio: '',
          date: 'October 24, 2022',
          title: 'Unlocking Success: The Power of Personalized Attention in Competitive Exams',
          views: '170 views',
          summary: 'This article highlights the importance of personalized attention for success in competitive exams like JEE, NEET, and CAT. Personalized attention allows for individualized learning, targeted instruction, better time management, improved confidence, and greater success. With personalized attention, students can receive instruction that meets their specific needs, improve their weaknesses, build on their strengths, and gain the skills and knowledge needed to succeed in their chosen field.',
          link: "unlocking-success-the-power-of-personalized-attention-in-competitive-exams"
        },
        {
          id: 5,
          image: "/images/blog/blog_images/blog-5.jpg",
          name: '',
          bio: '',
          date: 'December 1, 2022',
          title: 'Maximize Your Study Time with the Pomodoro Timer Technique: A Step-by-Step Guide',
          views: '265 views',
          summary: 'The Pomodoro Timer Technique is a time management method developed in the late 1980s that involves breaking down work into 25-minute intervals called Pomodoros with five-minute breaks in between. The technique can help you stay focused and be more productive while studying or working on a computer. By setting a timer and taking breaks, you can manage your time more effectively, reduce stress and burnout, and improve your overall well-being.',
          link: "maximize-your-study-time-with-the-pomodoro-timer-technique"
        },
        {
          id: 6,
          image: "/images/blog/blog_images/blog-6.jpg",
          name: '',
          bio: '',
          date: 'January 9, 2023',
          title: 'Learn Smarter, Not Harder: How the Feynman Technique Can Revolutionize Your Study Habits',
          views: '189 views',
          summary: 'Do you struggle to retain complex concepts? The Feynman Technique, named after Nobel Prize-winning physicist Richard Feynman, is a powerful learning method that can help. By breaking down complex ideas into simple explanations, you can identify gaps in your knowledge and improve your understanding. This article explains how the Feynman Technique works and provides step-by-step instructions to implement it in your studying routine. Give it a try and watch your understanding and retention of complex concepts improve.',
          link: "learn-smarter-not-harder-how-the-feynman-technique-can revolutionize-your-study-habits"
        },
        {
          id: 7,
          image: "/images/blog/blog_images/blog-7.jpg",
          name: '',
          bio: '',
          date: 'February 14, 2023',
          title: 'From Perfectionists to Crisis Makers: A Comprehensive Guide to Procrastination Types While Studying',
          views: '221 views',
          summary: 'Procrastination is a common problem among students, and understanding the different types of procrastinators can help identify effective strategies to overcome it. The article identifies and provides solutions for five types of procrastinators: The Perfectionist, The Busy Bee, The Dreamer, The Avoider, and The Crisis Maker. By recognizing and addressing these habits, students can improve their productivity and achieve their academic goals.',
          link: "from-perfectionists-to-crisis-makers-a-comprehensive-guide-to-procrastination-types-while-studying"
        },
        {
          id: 8,
          image: "/images/blog/blog_images/blog-8.jpg",
          name: '',
          bio: '',
          date: 'March 1, 2023',
          title: "Cultivating a Winner's Mindset: A Guide to Academic Success",
          views: '174 views',
          summary: "This article explores the characteristics of a winner's mindset and how it can improve study habits. A belief in oneself, a focus on the process, self-discipline, perseverance, and continuous learning are all essential components of a winning mindset. By cultivating these qualities, students can improve their academic performance and achieve their goals. The article emphasizes that developing a winning mindset takes time and practice, but the results are worth the effort.",
          link: "cultivating-a-winners-mindset-a-guide-to-adacemic-success"
        },
        {
          id: 9,
          image: "/images/blog/blog_images/blog-9.jpg",
          name: '',
          bio: '',
          date: 'March 8, 2023',
          title: 'Mastering the Art of Time Management: How to Beat Procrastination and Stay on Task',
          views: '277 views',
          summary: 'This article provides five actionable steps to help individuals overcome procrastination and increase productivity. It suggests setting specific goals and deadlines, creating a distraction-free environment, breaking tasks into smaller steps, using the Pomodoro Technique, and prioritizing self-care as effective strategies. Consistency and motivation are emphasized as keys to developing successful habits and achieving academic goals.',
          link: "mastering-the-art-of-time-management-how-to-beat-procrastination-and-stay-on-task"
        },
        {
          id: 10,
          image: "/images/blog/blog_images/blog-10.jpg",
          name: '',
          bio: '',
          date: 'March 15, 2023',
          title: 'One-on-One in the Online World: How Personalized Attention from Tutors Can Benefit Remote Learners',
          views: '236 views',
          summary: 'This blog post explores how online tutoring can provide personalized attention to students in remote learning environments. By offering one-on-one interaction, customized learning experiences, real-time feedback, and flexible scheduling options, online tutoring helps students overcome challenges and achieve academic success. The post highlights the benefits of online tutoring, including its ability to provide students with access to subject-specific tutors, regardless of their location or schedule.',
          link: "one-on-one-in-the-online-world-how-personalized-attention-from-tutors-can-benefit-remote-learners"
        },
        {
          id: 11,
          image: "/images/blog/blog_images/blog-11.jpg",
          name: '',
          bio: '',
          date: 'March 22, 2023',
          title: 'Beyond Tutoring: How Educare Mentors Provide Holistic Support to Students',
          views: '159 views',
          summary: 'The traditional approach to education often neglects the emotional and practical needs of students, but Educare Mentors offer personalized mentorship and support beyond the classroom. Educare mentors provide holistic support, micromanage schedules, help students set and achieve goals, act as a bridge between students and teachers, and provide support for both academic and non-academic challenges. With Educare Mentors, students can achieve their full potential both inside and outside of the classroom.',
          link: "beyond-tutoring-how-educare-mentors-provide-holistic-support-to-students"
        },
        {
          id: 12,
          image: "/images/blog/blog_images/blog-12.jpg",
          name: '',
          bio: '',
          date: 'March 29, 2023',
          title: 'Beyond the Classroom: How Remote Learning is Revolutionizing Educations',
          views: '227 views',
          link: "beyond-the-classroom-how-remote-learning-is-revolutionizing-educations"
          
        },

      ]

    }
  }
}
</script>

<style></style>