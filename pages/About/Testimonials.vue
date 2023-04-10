<template>
  <div class="dark:bg-black bg-white pt-12">
    <!-- Container for demo purpose -->
    <div class="container px-6 mt-5 mx-auto bg-white dark:bg-black">
      <!-- <h1 class="text-[#161821] dark:text-[#fff] text-3xl text-center py-6 relative ">TESTIMONIAL</h1> -->
      <courseheader>
        <template v-slot:title>Testimonial</template>
      </courseheader>


      <!-- Section: Design Block -->
      <section
        class="text-center md:text-left my-3"
        v-for="item in testimonials"
      >
        <div class="block rounded-lg bg-gray-200 dark:bg-gray-900">
          <div
            class="flex flex-wrap items-start dark:bg-gray-900 bg-gray-200 p-5"
          >
            <div
              class="grow-0 shrink-0 basis-auto block lg:flex justify-center w-full lg:w-6/12 xl:w-4/12"
            >
              <img
                :src="item.profile"
                alt="aadya deshpande"
                class="pt-10"
                width="200"
                style="border-radius: 800%"
              />
            </div>
            <div
              class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 dark:bg-gray-900 bg-gray-200"
            >
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-3xl font-bold mb-2 text-[#20ad96]">
                  {{ item.name }}
                </h2>
                <p class="mb-2 font-semibold text-gray-300 dark:text-[#dddddd]">
                  {{ item.college }}
                </p>
                <p
                  class="mb-4 font-bold text-[#696969] dark:text-[#dddddd]"
                  v-html="item.ranks"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph1"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph2"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph3"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph4"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph5"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph6"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph7"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph8"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph9"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph10"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph11"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph12"
                ></p>
                <p
                  class="font-bold text-[#696969] dark:text-[#dddddd] mb-6"
                  v-html="item.admission"
                ></p>
                <iframe
                  v-if="item.video"
                  width="640"
                  height="360"
                  :src="item.video"
                  title="Aadya Deshpande | MBBS | A Paathshala Ascension Exclusive"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  v-if="item.video2"
                  width="640"
                  height="360"
                  :src="item.video2"
                  class="mt-2"
                  title="Aadya Deshpande | MBBS | A Paathshala Ascension Exclusive"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <figure v-if="item.image">
                  <img :src="item.image" alt="" />
                  <figcaption class="text-center mt-2">{{ item.caption }}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "frontend",
});

export default {
  data() {
    return {
      testimonials: [
        {
          name: "Aadya Deshpande",
          college:
            "M.B.B.S | GRANT MEDICAL COLLEGE AND SIR J. J. GROUP OF HOSPITALS, MUMBAI",
          ranks: `NEET | 692 / 720 <br> NEET All India Rank | 355 <br> XII Boards | 99.33 %`,
          profile: "/images/testimonial/70/aadya-deshpande.jpg",
          paragraph1:
            "A huge thank you to Paathshala and Photon Ecademy. My NEET performance would not have been possible without them! Their Early Completion of Syllabus Strategy enabled me to revise the entire syllabus more than 5 to 6 times, which was not possible for other students that I know from other institutes, as their syllabus was completed just 3 to 4 months before the NEET exam, in which case revision would not at all be possible for any student",
          paragraph2:
            "Also, their one to one, extensively personalized teaching played an important role not only in effective teaching but also in completing the syllabus early, since it is not possible to complete the syllabus fast in a batch or a group teaching mode. I could get my doubts solved swiftly because of the personalized mode. However, that would not have been possible for me, if I was studying elsewhere in a batch or a group. I have given around 200 to 250 Full Syllabus Tests",
          paragraph3:
            "What I realized is, in the beginning, the Full Syllabus Tests seem challenging and the scores are usually low, lower than the Part Syllabus Tests. As we keep at them and keep going, analyze our mistakes thoroughly and work on our weak topics and chapters, our scores in FSTs start improving. It is also important to not compare your performance with anyone else’s but with your own previous performance. It is important to balance or eliminate hyper normal stimuli like video gaming, excessive eating, watching videos online, which, if not moderated might be a huge obstacle to the path of preparation",
          paragraph4:
            "All along, love the process of learning science and gathering knowledge and try to learn from the mistakes rather than feel bad about the mistakes made in the tests or any low scores. As many problems as possible should be solved and it is also a great idea to solve the same problem set multiple times to become more confident in a chapter or topic",
          admission:
            "Secured Admission At Grant Medical College and Sir J. J. Group of Hospitals, Mumbai for M.B.B.S",
          video: "https://www.youtube.com/embed/8GmVNb_6Ckk",
        },
        {
          name: "Ojas Deshpande",
          college:
            "M.B.B.S | KING EDWARD MEMORIAL HOSPITAL AND SETH GORDHANDAS SUNDERDAS MEDICAL COLLEGE, MUMBAI",
          ranks: `NEET | 680 / 720 <br> NEET All India Rank 892 <br> JEE Main | 98.62 Percentile <br> KVPY SX All India Rank 198 <br> XII Boards 98.83% <br> Qualified for AIIMS, Rishikesh`,
          profile: "/images/testimonial/70/ojas-deshpande.jpg",
          paragraph1:
            "I would like to extend my thanks to Paathshala and Photon Ecademy for my NEET score. Their one to one teaching and mentoring methodology helped me in a great way. It allowed the professors to monitor my progress at each step. I received feedback pertaining to my areas of improvement and not just some general feedback that is applicable to everyone. That helped me immensely to focus on my weak areas and strengthen them with time",
          paragraph2:
            "Their strategy of early completion of syllabus has provided one of the biggest advantages by giving me 2 years of time only for practice, revision and test series enabling me to constantly improve my scores. The Full Syllabus Tests helped me understand the concepts that I had forgotten with time and also the topics and chapters in which I need to practice more. The professors clarified all my NEET doubts from time to time, making my revision and practice process effective and efficient. Paathshala and Photon Ecademy’s Mistakes Analysis’ Report has been an amazing tool in helping me find out topics and chapters, where I needed more practice and revision. I have given 200 to 250 NEET Full Syllabus Tests. Solving these many FSTs greatly improved my time management skills and also my ability to stay calm and confident in an exam environment",
          paragraph3:
            "I would recommend Paathshala and Photon Ecademy’s Educational services to all future aspirants. The personal attention they deliver is the key to success in competitive entrance exams",

          admission:
            "Secured Admission At King Edward Memorial Hospital and Seth Gordhandas Sunderdas Medical College, Mumbai for M.B.B.S | NEET(UG)",
          video: "https://www.youtube.com/embed/zPMn_QZb7jE",
        },
        {
          name: "Saurabh Parekh",
          college: "B-TECH | IIT BOMBAY",
          ranks: `JEE Advanced All India Rank 674 <br> JEE Advanced 273/366 <br> JEE Main Score 276 <br> JEE Main All India  Rank 2067 <br> BITSAT 390 <br> MHTCET 179 <br> Boards 89% Eligible for Admission at – All the Top 7 IITs, Top 3 NITs, BITS Pilani <br> Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering`,
          profile: "/images/testimonial/70/saurabh-parekh.jpg",
          paragraph1:
            "My experience at Paathshala and Photon Ecademy was very wonderful. I have learnt a lot here. The professors here are very helpful. Due to their personalized teaching mode, I was able to clear all my doubts effectively. Getting my doubts clarified on time improved my practice test scores. I would strongly recommend JEE Advanced and JEE Main aspirants to enroll with Paathshala and Photon Ecademy Before joining Paathshala and Photon Ecademy, my JEE Advanced test scores were not good. After I have enrolled here, my scores have increased consistently",
          paragraph2:
            "The professors here have great expertise in the subject. They have provided amazing tips and techniques, that helped me with fast solving. I would give the Paathshala and Photon Ecademy professors a perfect 10/10 rating",
          paragraph3:
            "<b>Saurabh’s Study Routine</b> – I have been serious about academics since the very beginning. I study everyday since my school days (X Standard, mainly). During my JEE preparation, I used to study and practice questions for at least 5 to 6 hours each and everyday (this is apart from the classes duration). I used to give equal importance to all the three subjects – Physics, Chemistry and Mathematics. I was good at Mathematics. Physics was challenging for me, so I used to study Physics for more duration. Whatever used to be taught in the class, I developed the habit of going home and revising it on the same day",
          paragraph4:
            "<b>Saurabh’s Tips For JEE Aspirants</b> – When you give your practice tests, make sure to avoid silly mistakes. If this habit is not consciously developed, there is likeliness of losing marks to silly mistakes in the final exam. Every mark is precious. Learn to manage time well. This is a very important skill to be developed and nurtured when you give your Full Syllabus Tests. The professors at Paathshala and Photon Ecademy helped me a lot with gaining the skillset needed to crack the JEE Advanced exam",
          paragraph5:
            "<b>Saurabh’s Career Plans</b>  – I want to pursue Mechanical Engineering from IIT Bombay",
          paragraph6:
            "<b>Paathshala and Photon’s Post Exam Counselling</b> - In this one-to-one post exam session by Paathshala and Photon Ecademy, I have come to know a lot about the career opportunities available to me, about IITs, IIT Bombay, from where I am planning to pursue Mechanical Engineering, it was very insightful and I learnt a lot from the session",
          paragraph7:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Saurabh is pursuing his MS in Computer Science at Stony Brook University, New York, United States</li> <li> &rarr; He has also interned at IIM Bengaluru as a Blockchain Developer Intern, OYO as a Project Associate Intern, Amazon Web Services (AWS) as a Software Development Engineering Intern, and worked at Zomato Full time as a Software Development Engineer before pursuing his Masters at Stony Brook</li><li> &rarr; Saurabh has done his Dual Minors in Computer Science and Data Science at IIT Bombay</li></ul>",

          admission:
            "Eligible for Admission at – All the Top 7 IITs, Top 3 NITs, BITS Pilani <br> Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering",
          video: "https://www.youtube.com/embed/hGLVnI7766c",
        },
        {
          name: "Mr. Jayesh Parekh | Father of Saurabh Parekh",
          college: "B-TECH | IIT BOMBAY",

          profile: "/images/testimonial/70/saurabh-parekh.jpg",
          paragraph1:
            "When we took admission at Paathshala and Photon Ecademy, we had the aim of JEE Advanced exam and were aware of Saurabh’s ability to crack the exam. But, what we were looking for was someone who could push forward Saurabh’s JEE Advanced rank as best as possible. We were confident that only Paathshala and Photon Ecademy could do that",
          paragraph2:
            "We have achieved that today because of Paathshala and Photon Ecademy!",
          paragraph3:
            "Every doubt of Saurabh has been cleared very effectively via the Paathshala and Photon’s doubts system and all his weak areas have been identified and strengthened with time. This has benefitted Saurabh a lot and improved his confidence",
          paragraph4:
            "<b>Mr Parekh’s Tips to JEE Aspirants’ Parents</b> – When you enroll your ward in a coaching institute setup, wherein students are taught in batches, he/she is not going to get any personalized attention from that system. Even if your ward has good grasping and understanding abilities, he/she will not be able to ask doubts and will eventually keep those doubts to themselves which will keep piling with time affecting their confidence and morale",
          paragraph5:
            "At Paathshala and Photon Ecademy, because of the personalized attention mode and the amazing doubts-solving system in place, all of Saurabh’s doubts were clarified on time",
          paragraph6:
            "I would give 100% credit to Paathshala and Photon Ecademy for the invaluable contribution to Saurabh’s journey to IIT Bombay",
          paragraph7:
            "We are proud to have been associated with Paathshala and Photon Ecademy!",

          admission:
            "His ward Saurabh Parekh Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering",
          video: "https://www.youtube.com/embed/hGLVnI7766c",
        },

        {
          name: "Nihar Mhapankar",
          college: "M.B.B.S | LOKMANYA TILAK GENERAL MEDICAL COLLEGE",

          profile: "/images/testimonial/70/nihar-mhapankar.jpg",
          paragraph1:
            "<b>To merely explain my experience and emotions with Paathshala and Photon Ecademy with a few words? Oh Boy! It’s going to be a task between the Devil and the Deep Blue Sea. My 2-year experience here was an adventure.</b> Professors here helped me a lot in teaching, doubts, and concept clarification. I would say that they are true experts in their subjects. <b>The professors here are the best! The environment and ambiance of the classrooms were far beyond my expectation. Good infrastructure, comfortable benches, quality teaching facilities, you name it! Learning here was fun and the environment maintained by the teachers was the cherry on the cake</b> Our senior students also gave us the information about the mighty class in our 11 Standard. I was also given the right guidance about the books to be referred to, in addition to the study materials provided. I would rest my case on a final note that, if Paathshala and Photon Ecademy is given the opportunity to compete at the higher level, it would gain all the honors and respect it truly deserves!!",

          admission:
            "Secured Admission At Lokmanya Tilak General Medical College for M.B.B.S",
          video: "https://www.youtube.com/embed/qIJripnZVig",
        },
        {
          name: "Dr. Tushar Mhapankar | ENT Surgeon | Father of Nihar Mhapankar",
          college: "M.B.B.S | LOKMANYA TILAK GENERAL MEDICAL COLLEGE",

          profile: "/images/testimonial/70/dr-tushar-mhapankar.png",
          paragraph1:
            "My experience with Paathshala and Photon Ecademy has been absolutely fantastic. At the beginning itself, (Professor) Sagar Sir had given Nihar a view of the goal and how to reach that goal, and how to start. Taking admission here did wonders for Nihar. The way of teaching by the professors here was very good. Nihar was very enthusiastic about attending Paathshala and Photon Ecademy and loved going to classes without missing even a single class. All the credit for Nihar’s success in the exams goes to the staff and professors of Paathshala and Photon Ecademy",

          admission:
            "Secured Admission At Lokmanya Tilak General Medical College for M.B.B.S",
          video: "https://www.youtube.com/embed/qIJripnZVig",
        },
        {
          name: "Sachit Shanbhag",
          college: "B-TECH | IIT BOMBAY",

          profile: "/images/testimonial/70/sachit-shanbhag.jpg",
          paragraph1:
            "My experience at Paathshala and Photon Ecademy was very good. The most powerful thing about Paathshala and Photon Ecademy is that we students got one-to-one teaching and mentoring here, that helped me excel in all the three subjects",
          paragraph2:
            "Paathshala and Photon Ecademy’s Professors are highly experienced. They could deliver us in-depth knowledge of the concepts needed for the preparation of JEE",
          paragraph3:
            "<b>Before joining Paathshala and Photon Ecademy</b>, I was weak at Physics and Chemistry. I have also faced difficulty in time management. I did not how much had to be spent for concepts I was weak at, time to be dedicated for practising problems from ongoing topics",
          paragraph4:
            "<b>After enrolling at Paathshala and Photon Ecademy</b>, the professors helped me overcome my weaknesses in these subjects and I could see my practice tests scores improve. I have been taught many tricks and tips for faster problem solving which has been a great help. I was guided about how to utilize my time on a daily basis and manage it efficiently without being confused or overwhelmed",
          paragraph5:
            "<b>Sachit’s Tips to JEE Aspirants</b>, Cover all the topics of the syllabus without leaving out anything. Paathshala and Photon’s learning resources are very well curated for problem practice. While solving the questions, start at the basic level and go the advanced level of problems. Make sure you clarify your doubts on time",
          paragraph6:
            "During class sessions, stay fully focused and pay complete attention to what the professsors are teaching",
          paragraph7:
            "For questions practice, Paathshala and Photon Ecademy’s class notes and learning resources have been great for my preparation",
          paragraph8:
            "Paathshala and Photon Ecademy’s efficient doubt-solving system helped me a lot in gaining confidence in the concepts",
          paragraph9:
            "The professors at Paathshala and Photon Ecademy have been very supportive",
          paragraph10:
            "They have given their 200% and helped me excel in my subjects",
          paragraph11:
            "<b>Paathshala and Photon Ecademy played a great role in this achievement of mine. I would give 100% credit to Paathshala and Photon Ecademy for my success in JEE Advanced</b>",
          paragraph12:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Sachit works as a Data Science Engineer at Inito</li> <li> &rarr; Inito is the world’s first comprehensive at-home diagnostics device that allows diagnostic tests for fertility, diabetes, vitamins, thyroid, and dozens more on a single device connected to a smartphone</li><li> &rarr; Inito is backed by the best investors in the world – Y Combinator and many others in US, Singapore, and India</li><li> &rarr; Sachit has also interned at Ernst & Young and Daticore</li></ul>",

          admission:
            "Secured Admission At IIT Bombay for B-Tech in Chemical Engineering",
          video: "https://www.youtube.com/embed/qBxlFrOsGQo",
        },
        {
          name: "Mr. Subhash Shanbhag | IIT BHU Alumnus | Father of Sachit Shanbhag",
          college: "B-TECH | IIT BOMBAY",

          profile: "/images/testimonial/70/mr-subhash-shanbhag.png",
          paragraph1:
            "When I have enrolled Sachit at Paathshala and Photon Ecademy,<b> it was comforting to know that this is the place where what Sachit needs will be provided – personalized attention, clarifying his doubts and getting the best JEE Advanced rank possible and yes, that proved out to be case with Sachit securing a rank in JEE Advanced</b>",
          paragraph2:
            "<b>Mr Shanbhag’s tips to parents of JEE Aspirants</b> – JEE is not just about knowledge, its also about managing temper, time, ability to focus in a seemingly stressful situation. Before the difficult questions are attempted, the concepts have to be mastered. Increase the difficulty level of the practice questions gradually, starting from the basic/easy level of questions",

          admission:
            "His ward Sachit Shanbhag Secured Admission At IIT Bombay for B-Tech in Chemical Engineering",
          video: "https://www.youtube.com/embed/qBxlFrOsGQo",
        },
        {
          name: "Rijushree Saha",
          college: "M.B.B.S | KASTURBA MEDICAL COLLEGE, MANIPAL UNIVERSITY",

          profile: "/images/testimonial/70/rijushree-saha.jpg",
          paragraph1:
            "To begin with, I would like to say – <b>Paathshala and Photon Ecademy is a highly unique place.</b> It is different from coaching classes that we students attend. It has been a unique experience. <b>We were taught in a different environment, with a different approach. Also, it is a personalized one-to-one teaching that is provided at Paathshala and Photon Ecademy.</b> It really helped me understand the core concepts of the subjects and that helped me crack the questions in the NEET exam with greater ease",
          paragraph2:
            "When we think about a competitive exam like NEET, we students mostly tend to be Biology-oriented. Paathshala and Photon Ecademy has guided me about how Physics is a rank-differentiator in NEET, although all the three subjects are important. This is generally not told to the students. Most students are unaware of this",
          paragraph3:
            "<b>The professors at Paathshala and Photon Ecademy helped me gain acumen in the subjects.</b> I have been encouraged to and made to practice a lot of questions. I have been given access to the Paathshala and Photon Ecademy’s learning resources",
          paragraph4:
            "<b>Additionally, I would like to appreciate the administration of the company</b>, which was very serious about students’ academics. They have also given me a personal space, where I could comfortably sit and practice questions everyday. This really helped me gain confidence and expertise in the subject and positively contributed to my score",
          paragraph5:
            "Paathshala and Photon Ecademy’s professors also helped me a lot with Organic Chemistry, which is another challenging subject like Physics. The books I have been suggested for Organic Chemistry practice and the material given to me by Paathshala and Photon Ecademy helped me gain exposure to different types of questions. There were also previous years’ competitive exams’ questions present in the Paathshala and Photon Ecademy practice set. That along with the solved examples helped me a lot. <b>There were some questions, which I can tell you, that were asked in my NEET exam which are, as if directly taken from the Paathshala and Photon Ecademy material. I would like to give credit to the material for it</b>",
          paragraph6:
            "<b>Rijushree’s Tips to NEET Aspirants</b> – NEET is a time-oriented exam, so you need to be very well-prepared for the exam. You should know how to crack the questions in a proper order. Read NCERT of every subject very thoroughly to become perfect with the theory aspect of the subjects, including Physics, because sometimes theory questions are also asked in Physics. Solve previous years’ NEET/AIPMT question papers. This is very important. The more you solve, the better will be the exposure you gain to the type of questions asked in the NEET exam. There are many questions that are repeated from previous years’ NEET exams as well. Try not to stick with just one material. Solve as many models of questions as possible. Paathshala and Photon Ecademy gives you access to a variety of amazing and well-curated learning resources, across varying difficulty levels. Make sure your concepts are strong. This will enable you to crack NEET with flying colours. I would like to wish the best to all the NEET aspirants out there and would want them to do very well in the exam and get into their dream medical college in the first attempt itself",
          paragraph7:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Kasturba Medical College has been named in the Top 10 Medical Colleges in India as per the prestigious NIRF 2021 Rankings by the Ministry of Education, Government of India</li> <li> &rarr; Riju has accomplished a Special Mention at the Idea Exposition Hackathon 2019 hosted by NIT Suratkal</li></ul>",

          admission:
            "Rijushree has also been offered admission at Indian Institute of Science Education and Research (IISER), Bhopal <br><br> Secured Admission At Kasturba Medical College, Manipal University for M.B.B.S in NEET-UG",
          video: "https://www.youtube.com/embed/erfVT0l2AjE",
        },
        {
          name: "Owais Chunawala",
          college: "B-TECH | IIT BOMBAY",
          ranks: `JEE Advanced AIR 2636* <br> BITSAT 330 <br> MHTCET 177 <br> Eligible for Admission at – All the Top 7 IITs, Top 10 NITs, BITS Pilani`,

          profile: "/images/testimonial/70/owais-chunawala.jpg",
          paragraph1:
            "I have always wanted to study at an IIT and <b>Paathshala and Photon Ecademy has played a significant role in my achievement. I was guided every step of the way by Paathshala and Photon Ecademy’s professors and mentors.</b> All my doubts were cleared very effectively and on-time",
          paragraph2:
            "I was given numerous tips, tricks and techniques for efficient preparation, fast problem-solving and was made to solve 100s of questions from the Paathshala and Photon Ecademy learning sources, in a structured and systematic manner, and that greatly impacted my test scores and helped me gain confidence",
          paragraph3:
            "I was allocated a comfortable space where I could sit and solve questions all day, right from morning till late night",
          paragraph4:
            "<b>Company’s administration has been extremely supportive</b>",
          paragraph5:
            "The post exam counselling session at Paathshala and Photon Ecademy after JEE gave me in-depth knowledge about career opportunities available to me. <b>I was grateful to have received such phenomenal guidance, support, help from Paathshala and Photon Ecademy – the professors, admin executives, mentors without whom this milestone would not have been possible</b>",
          paragraph6:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Owais is the CEO and Co-founder of Augle AI</li> <li> &rarr; Augle AI provides Computer Vision-based Automation Solutions. Their product portfolio consists of Face Recognition (Attendance, Access Control, Customer Recognition, APIs), Crowd Analysis (through Drones, UAVs, CCTV Cameras), OCR, and Object Detection and Automation</li><li> &rarr; Owais has been the Convener of Electronics and Robotics Club at IIT Bombay. It is the largest Robotics Club in India</li><li> &rarr; Owais has also done his Minor in Entrepreneurship at IIT Bombay</li></ul>",

          admission:
            "Secured Admission At IIT Bombay for B-Tech in Metallurgical Engineering and Material Science",
        },
        {
          name: "Dhwani Kakkad",
          profile: "/images/testimonial/70/dhwani-kakkad.png",
          college:
            "M.B.B.S | HBT MEDICAL COLLEGE AND DR. R N COOPER MUNICIPAL GENERAL HOSPITAL, MUMBAI",
          paragraph1:
            "I have given approximately 100 Full Syllabus Tests and have assessed my tests using the <b>Paathshala and Photon Ecademy Mistakes Analysis Model.</b> The reports help us understand what we do not know and hence where we need to focus our efforts",
          paragraph2:
            "<b>Completing the syllabus early at Paathshala and Photon Ecademy has been greatly helpful</b>",
          paragraph3:
            "For Inorganic Chemistry, I have studied from NCERT, hand-made short notes, revised the concepts multiple times, practiced many questions",
          paragraph4:
            "For Biology, I used to revise concepts from NCERT everyday. Almost all Biology questions asked in NEET were from NCERT, except for 1 or 2 maybe. Biology NCERT is pretty straight-forward to prepare from and revise. We completed Biology also very early, around June-July. The earlier the syllabus completion, the better. <b>I have revised the entire NCERT Biology almost 6 times</b>",
          paragraph5:
            "<b>Teaching is very effective and efficient in Paathshala and Photon Ecademy’s personalized one-to-one teaching mode and add to that highly experienced and amazing professors, we get the maximum possible academic value</b>",
          ranks:
            "NEET 625 / 720 <br> NEET Physics 99.12 Percentile <br> NEET Chemistry 99.37 Percentile <br> NEET Biology (Botany and Zoology) 99.24 Percentile",
          admission:
            "Secured Admission at HBT Medical College And Dr. R N Cooper Municipal General Hospital, Juhu, Mumbai for M.B.B.S",
        },
        {
          name: "Devansh B",
          profile: "/images/testimonial/70/devansh-b.jpg",
          college: "B-TECH | IIT BOMBAY",
          paragraph1:
            "Irrespective of the exam I was preparing for, be it JEE Main, JEE Advanced, BITSAT, I was mentored and guided by the Paathshala and Photon Ecademy’s professors about how I can crack the exam with ease. They taught me how to manage time effectively while solving questions. The professors cleared all my conceptual doubts in such a way that I could apply the concepts effectively while solving numericals",
          paragraph2:
            "Devansh’s Tips to JEE Aspirants – study all the concepts that are part of your syllabus without leaving anything. Revise whatever you have learnt thoroughly and solve as many numericals as possible",
          paragraph3:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Devansh completed his Research Internship at Stockholm University, Swedan</li> <li> &rarr; He has also done his Research Internship with Purdue University, United States</li><li> &rarr; Devansh served as an Editor of Insight, IIT Bombay’s Official Student Media Body</li></ul>",
          admission:
            "Secured Admission At IIT Bombay for B-Tech in Energy Sciences",
          video: "https://www.youtube.com/embed/SWDIbwlqZoU",
        },
        {
          name: "Mr Prashant B | Father of Devansh B",
          profile: "/images/testimonial/70/devansh-b.jpg",
          college: "B-TECH | IIT BOMBAY",
          paragraph1:
            "We had a wonderful and happy experience at Paathshala and Photon Ecademy. (Professor) SPP Sir taught and guided Devansh and us, parents with utmost dedication. Because of his and Paathshala and Photon Ecademy’s efforts, Devansh could achieve the desired result in JEE Advanced. JEE Main and Advanced being exams with negative markings, it is important for the student to know what questions to solve and what questions to leave, and when to leave. Devansh was extensively guided about such exam strategies by professionals at Paathshala and Photon Ecademy. The executives at Paathshala and Photon Ecademy had many sessions with us, where we were explained in-depth and in detail about what topics to study, how to study, how to practice problems, how to give the Paathshala and Photon Ecademy Test Series and how to analyze the mistakes in the Exams. Because of such expert guidance from Paathshala and Photon Ecademy, Devansh was able to score minimum negative marks in his JEE Main and JEE Advanced Exams. We express our deepest gratitude to Paathshala and Photon Ecademy for being an incredible part of Devansh’s JEE journey and for him getting into IIT Bombay",

          admission:
            "His ward Devansh Has Secured Admission At IIT Bombay for B-Tech in Energy Sciences",
          video: "https://www.youtube.com/embed/SWDIbwlqZoU",
        },
        {
          name: "Mrs Padmapriya B | Mother of Devansh B",
          profile: "/images/testimonial/70/devansh-b.jpg",
          college: "B-TECH | IIT BOMBAY",
          paragraph1:
            "At every step, all the professors of Paathshala and Photon Ecademy especially (Professor) SPP Sir and PDC Ma’am have helped and guided us throughout the course. This played a crucial role in Devansh achieving his success in JEE Advanced. After gauging Devansh’s potential, (Professor) SPP Sir guided us strategically about how to study and practice more in less time. It is very important for any student to be thorough with concepts, definitions, and formulae and Paathshala and Photon Ecademy ensured that. We would like to thank Paathshala and Photon Ecademy for being a part of Devansh’s journey and the academic milestone of getting into IIT Bombay, that he has accomplished",

          admission:
            "Her ward Devansh Has Secured Admission At IIT Bombay for B-Tech in Energy Sciences",
          video: "https://www.youtube.com/embed/SWDIbwlqZoU",
        },
        {
          name: "Soumil Kelkar",
          profile: "/images/testimonial/70/soumil-kelkar.jpg",
          college:
            "BSMS | IISER (INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH), PUNE",
          paragraph1:
            "The professors at Paathshala and Photon Ecademy were very good; they helped me in learning the concepts really well. The classrooms and infrastructure radiate the concept of education and that kept us focused on our studies all the time. The Academics and the Test modules were very helpful. I had no idea of what type of questions would be asked. These modules helped me focus not only on how to solve the paper but also on time management. The Academics modules helped me understand the concepts well for my college exams as well",
          paragraph2:
            "<b>Soumil’s Tips to JEE Aspirants</b> – Do not panic or be stressed out. One has to only study hard, understand the concepts well and solve the maximum number of previous years’ questions. I motivated myself to prepare well for the exams without getting stressed out; listening to music in my spare time was a booster. Some of my school friends used to ask me questions from other institutes’ modules which I could easily answer. So, by being a student of Paathshala and Photon Ecademy, I had a competitive advantage over students from other institutes",
          ranks:
            "JEE Main 98.96 Percentile <br> JEE Advanced Score 159 <br> JEE Advanced Rank 4721 <br> IISER 134/180 <br> BITSAT 340 <br> MHCET 178/200 <br> XII Boards CBSE 95.6% <br> Eligible For BITS Pilani <br> Selected for IIT Kharagpur | B-Tech",

          admission:
            "Secured Admission At IISER, Pune (Indian Institute of Science Education and Research) for BSMS Dual Degree in Physics",
          video: "https://www.youtube.com/embed/Nl_h7ACy6As",
        },
        {
          name: "Aditi Goyal",
          profile: "/images/testimonial/70/aditi-goyal.jpg",
          college: "B-TECH | INSTITUTE OF CHEMICAL TECHNOLOGY (ICT) MATUNGA",
          paragraph1:
            "At college, I was not able to understand the concepts clearly and I used to have a lot of doubts, which went uncleared. After joining Paathshala and Photon Ecademy, I got personalized attention from the Professors here and I got all the concepts cleared. The professors had great command over the subject and were able to make me understand all the topics. I found myself in a stronger position academically. I wish I had joined Paathshala and Photon Ecademy earlier",
          paragraph3:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Aditi is a batch of 2023 MBA Student at XLRI, Jamshedpur</li><li> &rarr; Aditi worked at Pidilite Industries Limited as a Technical Services Executive</li><li> &rarr; She has also interned at 3M as a Research Intern and PolyOne as a Research Intern</li><li> &rarr; Aditi is a 2022 Summer Associate Intern at Boston Consulting Group (BCG)</li><li> &rarr; Aditi has been awarded with the M.V Joshi Platinum Jubilee Endowment Award by the Institute of Chemical Technology</li><li> &rarr; She has also been honoured with the Dr. Balwant Joshi Award for Top Rank in B.Tech (for the First Year) by the Institute of Chemical Technology</li></ul>",

          ranks: "JEE Advanced AIR 13124 <br> JEE Main Score 180",

          admission:
            "Secured Admission At Institute of Chemical Technology (ICT) Matunga for B-Tech in Polymer/Plastics Engineering",
          video: "https://www.youtube.com/embed/CxZb3K7u3Yo",
        },
        {
          name: "Mr and Mrs Koparkar | Chartered Accountants | Parents of Advait Koparkar",
          profile: "/images/testimonial/70/mr-and-mrs-koparkar.jpg",
          college: "BE | BITS PILANI GOA",
          paragraph1:
            "The most striking thing you experience with the professors of Paathshala and Photon Ecademy is their passion for teaching and the mastery over the subject that makes a huge difference from the perspective of a student. They are very interactive with the students. The professors could clear the conceptual doubts of each student. They connect well with the students in solving their doubts. The Professors are also very frank in their feedback without mincing words – Mr. and Mrs. Koparkar",
          paragraph2:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Advait graduated with an overall CGPA of 9.73/10.0 from BITS Pilani Goa and is also the Top Ranker of the Electronics and Electrical Department</li><li> &rarr; He has done his Masters in Electrical and Computer Science Engineering from Georgia Institute of Technology, United States securing an overall CGPA of 4.0/4.0</li><li> &rarr; Advait has Interned at Nanyang Technological University (Summer Research Intern), Indian Institute of Science (IISc) (Research Intern)</li><li> &rarr; Advait is working as a Machine Learning Software Engineer at Qualcomm in the San Francisco Bay Area</li></ul>",

          admission:
            "Their ward Advait has Secured Admission At BITS Pilani Goa for BE in Electrical Engineering",
          video: "https://www.youtube.com/embed/Q0D8P6tW4ps",
        },
        {
          name: "Medha Sri",
          profile: "/images/testimonial/70/medha-sri.jpg",
          college: "M.B.B.S | DY PATIL UNIVERSITY, MUMBAI",
          paragraph1:
            "<b>Before joining Paathshala and Photon Ecademy</b>, I was preparing for my NEET exam from a coaching class. Towards the end of my XI standard, I realized that my concepts were weak, a lot of doubts were piled up across all three subjects and I did not have any method or process at my coaching to clear my conceptual or questions-related doubts. I was losing confidence in my preparation",
          paragraph2:
            "That is when I decided to get academic help and enrolled at Paathshala and Photon Ecademy",
          paragraph3:
            "<b>My experience at Paathshala and Photon Ecademy was great</b>",
          paragraph4:
            "The professors are excellent and taught me in a one-to-one mode. I was able to clear all my doubts on time. My concepts became stronger with time",
          paragraph5:
            "The Paathshala and Photon Ecademy mistakes analysis reports helped me understand what my weak areas were. <b>The professors guided me on everything – right from syllabus, time management, how to stay calm in the exam hall to eating healthy food and meditation</b>",
          paragraph6:
            "I would like to thank Paathshala and Photon Ecademy for everything!",

          admission:
            "Secured Admission at DY Patil University, Mumbai for M.B.B.S",
        },

        {
          name: "Khyati M",
          profile: "/images/testimonial/70/khyati-m.png",
          college: "B-TECH | IIT BOMBAY",
          paragraph1:
            "<b>Paathshala and Photon Ecademy’s class sessions were the most fun and amazing part of my day. I used to look forward to the classes and Paathshala and Photon Ecademy made learning seem fun and enjoyable too</b>",
          paragraph2:
            "Professors are top-notch and have great expertise in their subject. Paathshala and Photon Ecademy aims at not just teaching concepts but making sure that there is holistic learning",
          paragraph3:
            "<b>Thanks to Paathshala and Photon Ecademy for a wonderful experience, for the guidance and support</b>",

          paragraph4:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Khyati worked at Procter & Gamble as a Product Supply Intern</li><li> &rarr; She was associated with Unilever as a Supply Planning Intern</li><li> &rarr; She also interned at HDFC Bank</li><li> &rarr; Khyati holds a Madhyama Pratham Degree in Bharatnatyam from Akhil Bharatiya Gandharva Mahavidyalaya</li><li> &rarr; She is the winner of Samsung EDGE Season 5 held at IIT Bombay in October 2020</li></ul>",

          admission:
            "Secured Admission at IIT Bombay for B-Tech in Metallurgical Engineering and Materials Science",
        },

        {
          name: "Ashay K",
          profile: "/images/testimonial/70/ashay-k.jpg",
          college: "B-TECH | NIT NAGPUR",
          paragraph1:
            "I had a really great experience at Paathshala and Photon Ecademy. Since we were taught in a personalized teaching mode, it was very effective as we could understand the concepts clearly. Our syllabus was completed twice. That gave us an edge over our competitors. Our professors were friendly and understanding. Attending classes at Paathshala and Photon Ecademy was fun. All in all, my experience at Paathshala and Photon Ecademy was thrilling",

          paragraph2:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Ashay has Interned at Accenture, India (Data Engineering Intern)</li><li> &rarr; Ashay is an Incoming Technology Analyst at Citi</li></ul>",

          admission:
            "Secured Admission At NIT Nagpur for B-Tech in Electronics and Communications Engineering",
          video: "https://www.youtube.com/embed/kIwc-Sxjzn4",
        },
        {
          name: "Aryan P",
          profile: "/images/testimonial/70/aryan-p.png",
          ranks:
            "JEE Main 156 <br> MHTCET Score 99.34 Percentile <br> MHTCET Rank 868",
          college:
            "B-TECH | VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE (VJTI), MUMBAI",
          paragraph1:
            "I had spent 3 years with Paathshala and Photon Ecademy. My X Standard and XI XII JEE Preparation years. <b>I love the fact that the teaching is personalized one-to-one and the professors are friendly.</b> They are always willing to help and very flexible in meeting students’ requirements. The Professors explain the concepts in such detail that you easily understand the very first time something is taught",
          paragraph2:
            "There is always good back and forth interaction between the students and professors, which creates a fun and interesting learning environment",
          paragraph3:
            "<b>Endless thanks to Paathshala and Photon Ecademy for their efforts and guiding me not just in academics but life in general, providing me all the support even I did not realize I needed, to the most amazing professors I have come across, for their and understanding and generosity of spirit through one of the most important years of my life</b>",
          paragraph4:
            "<b>I will always cherish my time with Paathshala and Photon Ecademy</b>",
          admission:
            "Secured Admission At Veermata Jijabai Technological Institute (VJTI), Mumbai for B-Tech in Electronics Engineering",
        },
        {
          name: "Abhas Tiwari",
          profile: "/images/testimonial/70/abhas-tiwari.jpg",

          paragraph1:
            "I had a very nice experience at Paathshala and Photon Ecademy. If I compare myself with my 10th standard self, I have improved a lot. The big difference was created because the Academics Team at Paathshala and Photon Ecademy has totally engaged me in studies with nice assignments, which enhanced my capability and knowledge. The material provided by Paathshala and Photon Ecademy is very good. I have become extremely confident after joining Paathshala and Photon Ecademy",
        },
        {
          name: "Nachiket Gogate",
          profile: "/images/testimonial/70/nachiket-gogate.png",
          college: "BDS | MGM DENTAL COLLEGE",

          paragraph1:
            "Secured Admission at MGM Dental College for Bachelor in Dental Surgery",
        },
        {
          name: "Jyoti Maurya",
          profile: "/images/testimonial/70/jyoti-maurya.png",
          college: "BACHELOR OF PHYSIOTHERAPY | TERNA PHYSIOTHERAPY COLLEGE",

          paragraph1:
            "My experience at Paathshala and Photon Ecademy was good. The professors at Paathshala and Photon Ecademy teach very well and solve doubts on time. I am extremely happy about that. The Academics Team is always active and always in communication with the students",
          admission:
            "Secured Admission At Terna Physiotherapy College for BPT (Bachelor of Physiotherapy)",
        },
        {
          name: "Atharva Valanju",
          profile: "/images/testimonial/70/atharva-valanju.png",
          college:
            "BSMS | INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH (IISER), PUNE",
          ranks:
            "National Science Olympiad (NSO) – Medal of Distinction and Certificate of Distinction <br> KVPY Fellow (SX) <br> JEE Main Physics 98.48 Percentile <br> JEE Main Chemistry 98.76 Percentile <br> JEE Main 96.36 Percentile",

          admission:
            "Secured Admission At Indian Institute of Science Education and Research (IISER), Pune for Integrated BS-MS in Biology",
        },
        {
          name: "Lalit D",
          profile: "/images/testimonial/70/lalit-d.png",
          college: "COEP, PUNE | B-TECH",
          ranks:
            "JEE Advanced 178 <br> JEE Advanced AIR 10331 <br> JEE Main 150 <br> BITSAT 283 <br> CET 173 <br> Boards 89%",

          admission:
            "Secured Admission at COEP, Pune for B-Tech in Mechanical Engineering",
        },
        {
          name: "Saahil Padgaonkar",
          profile: "/images/testimonial/70/saahil-padgaonkar.jpg",
          college: "D.Y. PATIL UNIVERSITY | M.B.B.S",

          admission:
            "Secured Admission at School of Medicine, DY Patil University for M.B.B.S",
        },
        {
          name: "Indu Ilanchezian",
          profile: "/images/testimonial/70/indu-ilanchezian.jpg",
          college:
            "B-TECH AND M-TECH DUAL DEGREE | INTERNATIONAL INSTITUTE OF INFORMATION TECHNOLOGY (IIIT), BANGALORE",
          ranks: "JEE Main 203",
          paragraph1:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Indu completed her Dual Degree at IIIT Bangalore with an overall CGPA of 3.96/4.00</li><li> &rarr; She has Interned at EPFL (École polytechnique fédérale de Lausanne), Switzerland (Summer Research Intern), SigTuple (Research Assistant)</li><li> &rarr; She has scored 114/120 in TOEFL</li><li> &rarr; As of the Summer of 2022, Indu is pursuing a Ph.D. at Berens Lab, University of Tübingen, Baden-Württemberg, Germany where she is working on developing interpretable and robust deep learning systems for clinical diagnostics</li></ul>",
          paragraph2:
            "<b>Honors and Awards of Indu include</b> <br> <ul><li> &rarr; 2017 Adobe Women-In-Technology Scholarship (Honorable Mention) by Adobe Systems Inc.</li><li> &rarr; Sitaram Jindal Gold Medal and Sir M. Visvesvaraya Scholarship Award by IIIT Bangalore in 2019</li><li> &rarr; Institute Gold Medal for Highest Academic Standing by IIT Bangalore in 2019</li></ul>",
          admission:
            "Secured Admission At International Institute of Information Technology (IIIT), Bangalore for B-Tech & M-Tech Dual Degree in Computer Science and Information Technology Engineering",
        },
        {
          name: "Shamik Kotian",
          profile: "/images/testimonial/70/shamik-kotian.png",
          image: "/images/testimonial/inner-img/shamik-kotian.jpg",
          college: "B-TECH | MANIPAL INSTITUTE OF TECHNOLOGY (MIT)",
          ranks: "JEE Main 203",
          paragraph1:
            "My journey at Paathshala and Photon Ecademy was fun-filled, exciting, and filled with top-notch education. We all have had many memorable moments. The professors here are excellent! The Academics team, and counselors are great. The staff members are very supportive",
          paragraph2:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Shamik loves to sing and play guitar in his free time</li></ul>",
          admission:
            "Secured Admission At Manipal Institute of Technology (MIT) Jaipur for B-Tech in Civil Engineering",
        },
        {
          name: "Purva Kulkarni",
          profile: "/images/testimonial/70/purva-kulkarni.png",

          college:
            "B-TECH | VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE (VJTI), MUMBAI",
          ranks: "MHTCET 97.70 Percentile <br> MHTCET Rank 3171",

          admission:
            "Secured Admission At Veermata Jijabai Technological Institute (VJTI), Mumbai for B-Tech in Civil Engineering",
        },
        {
          name: "Arnav Purohit",
          profile: "/images/testimonial/70/arnav-purohit.png",

          college: "B-TECH | VISHWAKARMA INSTITUTE OF TECHNOLOGY (VIT), PUNE",
          ranks: "MHTCET 146",

          admission:
            "Secured Admission At Vishwakarma Institute of Technology (VIT), Pune for B-Tech in Computer Science Engineering",
        },
        {
          name: "Arunima Singh",
          profile: "/images/testimonial/70/arunima-singh.jpg",

          college: "B-TECH | IIT DELHI",
          paragraph1:
            "Gaining admission into a good engineering school is a dream for all JEE aspirants. I was lucky to be guided by SP Sir during my preparation journey to be able to make this dream a reality. His philosophy of working on fundamental concepts and gradually progressing to problem solving worked wonders for me.",
          paragraph2:
            "Understanding concepts well, solving quality question banks and thoroughly addressing doubts are the three key elements of JEE preparation. At Paathshala and Photon Ecademy, my entire preparation journey was anchored on these three elements. The team went the extra mile by providing me with a personalized preparation plan with timely check-ins about progress and any challenges I was facing.",
          paragraph3:
            "Physics, which is a challenge for a lot of JEE aspirants like myself, became my strongest subject towards the end of my preparation because of SP Sir’s easy-to-follow teaching style and focused problem solving. In addition to the professor’s subject expertise what really helped me get better at topics was the approachability the team offered for topic wise revisions, doubt solving, effective study tips, perfectly curated question banks/tests and most importantly general motivation which goes a long way.",
          paragraph4:
            "SP Sir and the Paathshala and Photon Ecademy team helped me identify and finally actualize my potential. I would strongly recommend the Paathshala and Photon Ecademy experience to budding JEE aspirants to achieve their dream of making it to IIT !",
          paragraph5:
            "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Arunima is currently working as a management consultant at IQVIA where she works on solving business problems for big pharma clients in India and the world</li><li> &rarr; At IIT, she was the student head of the Entrepreneurship Cell where she spearheaded a 3 tier team coordinators to harbor entrepreneurship culture at IIT Delhi</li><li> &rarr; Arunima has interned at PwC in their M&A practice</li><li> &rarr; In the summer of 2019, Arunima spent a month at the London School of Economics and studied ‘Further Statistics & Econometrics’, securing an A+ grade in the course</li></ul>",

          admission:
            "Secured Admission At IIT Delhi for B-Tech in Biochemical Engineering and Biotechnology",
        },
        {
          name: "Abhishek B",
          profile: "/images/testimonial/70/abhishek-b.png",
          paragraph1:
            "The professors at Paathshala and Photon Ecademy are very good. I could see my interest in academics improve with time because of the Teaching and Academics modules at Paathshala and Photon Ecademy",
        },
        {
          name: "Chinmay Deodhar",
          profile: "/images/testimonial/70/chinmay-deodhar.jpg",
          college: "B-TECH | SARDAR PATEL INSTITUTE OF TECHNOLOGY, MUMBAI",
          ranks: "MHTCET Physics 96.41 Percentile <br> MHTCET Chemistry 97.31 Percentile <br> MHTCET Mathematics 97.48 Percentile <br> MHTCET 97.47 Percentile",
          admission: "Secured Admission at Sardar Patel Institute of Technology for B-Tech"
          
        },
        {
          name: "Naman Bhan",
          profile: "/images/testimonial/70/naman-bhan.png",
          college: "B-TECH | NARSEE MONJEE",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Naman has a keen interest in observing and playing with different Machine Learning algorithms and Deep Learning techniques</li><li> &rarr; Apart from Machine learning and Deep learning, he is also very passionate about Football. In his words, the sport has helped him realize the importance of teamwork and good leadership</li></ul>",
          admission: "Secured Admission At Narsee Monjee’s MPSTME for B-Tech in Data Science Engineering"
          
        },
        {
          name: "Darshit T",
          profile: "/images/testimonial/70/darshit-t.png",
          college: "B-TECH | IIT KANPUR",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Darshit has been an active member of the IIT Kanpur Student Clubs</li><li> &rarr; He has served as the Secretary of the Finance and Academics Club at IIT Kanpur</li><li> &rarr; Darshit was the Secretary of Career Development of the Academics and Career Council at IIT Kanpur</li><li> &rarr; At IIT Kanpur, Darshit is also an Student Guide</li><li> &rarr; As of the Summer of 2022, Darshit is pursuing his Internship at Nebulaa Innovations (Computer Vision Research Intern)</li><li> &rarr; Darshit’s hobbies include Playing Tennis and Reading</li></ul>",
          admission: "Secured Admission At IIT Kanpur for B-Tech in Materials Science and Engineering"
          
        },
        {
          name: "Pranav Gaikwad",
          profile: "/images/testimonial/70/pranav-gaikwad.png",
          paragraph1: "My experience at Paathshala and Photon Ecademy was very good. My friend, Lalit recommended me to join Paathshala and Photon Ecademy and I thank Lalit for this. Preparation for JEE Exam is a difficult task but the guidance given by the professors here made things easier. Highly experienced professors of Paathshala and Photon Ecademy have supported and guided us at every step during the preparation. Studying at Paathshala and Photon Ecademy was actually full of fun for me. Paathshala and Photon Ecademy is the right place for entrance exam preparation and my journey here has been a very fulfilling one"
          
        },
        {
          name: "Devyani B",
          profile: "/images/testimonial/70/devyani-b.jpg",
          college: "M.B.B.S | MGM MEDICAL COLLEGE",
          admission: "Secured Admission At MGM Medical College for M.B.B.S"
          
        },
        {
          name: "Parth Kharkar",
          profile: "/images/testimonial/70/parth-kharkar.jpg",
          college: "B-TECH | VIVEKANAND EDUCATION SOCIETY'S INSTITUTE OF TECHNOLOGY (VESIT)",
          paragraph1: "<b>When I came to know about Paathshala and Photon Ecademy from one of my friends and the way teaching happens at Paathshala and Photon Ecademy, I regretted why I joined my institute [Institute name is being kept confidential] which I later left and joined them. The way me and my batchmates were taught was fabulous. The professors actually created interest in academics. Because of them, I actually scored very well in my exams. The way we were guided and given tips for problem solving is very good and confidence-boosting</b>",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; At VESIT, Parth served as the Junior Deputy Secretary of the SoRT Council</li><li> &rarr; SoRT VESIT is spearheaded by a group of socially enthusiastic students, primarily focusing on empowering the unprivileged throughout the academic year. Every year, the team encourages and sensitizes students in order to motivate them to assist others, in order to proceed in tandem, toward the better</li><li> &rarr; SoRT VESIT collaborated with various NGOs to sell their products at their college, thereby, raising funds for them</li><li> &rarr; Some of the NGOs include: <br> NASEOH, Chembur ● Self Esteem, Airoli ● Balanand, Chembur ● Khula Aasman, Chembur ● RUR, Mahim ● Aseema, Bandra ● Snehalaya, Thane ● Kshamata, Thane </li></ul>",
          admission: "Secured Admission At Vivekanand Education Society’s Institute of Technology (VESIT) for B-Tech",
          image: "/images/testimonial/inner-img/parth-kharkar.jpg",
          caption: "(Parth is 4th from Left in the Standing Row)"
          
          
        },
        {
          name: "Kapil Haridas",
          profile: "/images/testimonial/70/kapil-haridas.jpg",
          college: "VELLORE INSTITUTE OF TECHNOLOGY",
          
          admission: "Secured Admission At Vivekanand Education Society’s Institute of Technology (VESIT) for B-Tech",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Kapil has been an active member of the VIT Sports Club (Football – Midfielder)</li><li> &rarr; Kapil is a member of the Youth Sports Club (Football) powered by Reliance Foundation</li><li> &rarr; Kapil’s team (Football) was the Runners Up at the Sports Fest 2017 tournament held by IIT Madras Gymkhana Club</li></ul>",
          image: "/images/testimonial/inner-img/kapil-haridas.png",
          caption: "(Kapil is 1st from Right, Second Row)"
          
          
        },
        {
          name: "Mihir Mahajan",
          profile: "/images/testimonial/70/mihir-mahajan.png",
          college: "Secured Admission At BITS Pilani Goa for B.Sc & M.Sc Dual Degree in Economics",
          video: "https://www.youtube.com/embed/DTHy5tyWk1A",
          admission: "Secured Admission At Vivekanand Education Society’s Institute of Technology (VESIT) for B-Tech",
          paragraph1: "It is a great feeling to have been a student of Paathshala and Photon Ecademy. I got to learn from all the professors here. Every professor has taught me valuable life lessons too. [After my 10th Std, I have joined a different institute but over there, my concepts were not being clarified] Hence, I joined Paathshala and Photon Ecademy later. My concept clarity strengthened with time. My frequency of solving problems without making silly mistakes has increased. Also, the time taken for solving each sum has reduced over time. This capability has become an integral part of my academics. I have also learned a lot about life at Paathshala and Photon Ecademy. I can feel the connection between Math and Life. ‘Integration’ taught me that if you keep adding up small efforts, you WILL make it large despite any obstacles of ‘what to substitute’. Plus, you will get the added bonus of ‘+C’ in the end. It’s your life, make it large!",
          
          
          
        },
        {
          name: "Pruthvi S",
          profile: "/images/testimonial/70/pruthvi-s.jpg",
          college: "M.B.B.S | DAVOO MEDICAL SCHOOL FOUNDATION INC, PHILIPPINES",
          
          admission: "Secured Admission At Davoo Medical School Foundation, Philippines for M.B.B.S",
          
          
          
          
        },
        {
          name: "Kashish Chaudhari",
          profile: "/images/testimonial/70/kashish-chaudhari.png",
          paragraph1: "My experience at Paathshala Education and Photon Ecademy was too good. The professors were great and they helped us a lot in our academics. The professors of each and every subject were very good and they were always ready to help us",
        },
        {
          name: "Akhilesh K",
          profile: "/images/testimonial/70/akhilesh-k.png",
          college: "B-TECH | MANIPAL INSTITUTE OF TECHNOLOGY",
          ranks: "JEE Main 118",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; At MIT, Akhilesh was a part of The Literary, Debate, and the Quiz Club</li><li> &rarr; He Interned at Reliance Industries Limited</li><li> &rarr; As of the summer of 2022, Akhilesh is working at Juniper Networks as a Software Engineer</li></ul>",
          image: "/images/testimonial/inner-img/akhilesh-k.png",
          caption: "Akhilesh Kalse is 2nd from left, second row"
        },
        {
          name: "Tanmay Pawaskar",
          profile: "/images/testimonial/70/tanmay-pawaskar.png",
          
          paragraph1: "My experience at Paathshala and Photon Ecademy was amazing. The professors at Paathshala and Photon Ecademy are very very good. They have provided personalized attention to us and helped us whenever required. Many doubts about careers and career opportunities were also clarified by the Academics Team. The counselors of the Academics Team have given us motivation counseling from time to time and the counseling really helped me a lot",
          
        },
        {
          name: "Nikhil Sharma",
          profile: "/images/testimonial/70/nikhil-sharma.jpg",
          
          paragraph1: "My experience at Paathshala Education and Photon Ecademy is good. The professors are very amicable and supportive. The best thing about Paathshala and Photon Ecademy is that all the students get maximum personalized attention.",
          
        },
        {
          name: "Vivaan G",
          profile: "/images/testimonial/70/vivaan-g.jpg",
          college: "BE | BITS PILANI GOA",
          ranks: "JEE Main 98.1 Percentile <br> JEE Advanced AIR 12652 <br> CET Score 99.82 Percentile <br> CBSE Boards 95% <br> BITSAT 336/450",
          paragraph1: "I have enjoyed and experienced the journey here at Paathshala Education and Photon Ecademy. The professors are good, the study material provided is good. The professors have really guided us well. I have put in a lot of effort; the professors also put a lot of effort into making me understand the concepts very well. The Paathshala and Photon Ecademy Education Academics and Test module and also the other resources were nice and really helped me in solving a good amount of questions. Any doubts in the questions during problem practice, I could ask the Professors any time. Regular problem-solving helped me increase my problem-solving level. During this period, I restricted myself to only very limited mobile usage. I had a competitive advantage over my friends who were studying in other classes because the Paathshala and Photon Ecademy module questions were definitely at a higher level with proper solutions. For a JEE aspirant, I would say that you need to focus thoroughly on your studies in these 2 years, and also not get distracted by others",
          admission: "Secured Admission at BITS Pilani Goa for BE in Mechanical Engineering",
          
        },
        {
          name: "Meenakshi K",
          profile: "/images/testimonial/70/meenakshi-k.png",
          college: "B-TECH | SARDAR PATEL COLLEGE OF ENGINEERING",
          ranks: "JEE Advanced 132 <br> MHTCET 162 <br> MIT AIR 900 <br> Boards 92%",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Meenakshi passed out of Sardar Patel with an overall CGPA of 9.03/10.0</li><li> &rarr; She Interned at VPS Techhub Pvt Ltd (Software Development)</li><li> &rarr; As of the summer of 2022, Meenakshi is working at Goldman Sachs in Bengaluru as an Analyst (Network Software Team)</li></ul>",
          admission: "Secured Admission at BITS Pilani Goa for BE in Mechanical Engineering",
          
        },
        {
          name: "Abhishek Dwivedi",
          profile: "/images/testimonial/70/abhishek-dwivedi.jpg",
          
          paragraph1: "Initially, I joined a different coaching institute and left the class within 2 months as I was totally dissatisfied with the teaching and management over there. After that, I have taken admission at Paathshala and Photon Ecademy. My experience at Paathshala and Photon Ecademy has been wonderful. Paathshala and Photon Ecademy is one of the best classes in Mumbai and even Maharashtra. The professors are very good, friendly, and supportive. I just want to say this: If you are searching for the best class in Mumbai, then it is Paathshala. I am completely overwhelmed to have been a student of Paathshala and Photon Ecademy. The way in which Paathshala and Photon Ecademy’s counselors keep you motivated, focused, and goal-oriented from time to time is amazing. I am speechless!",
          
          
        },
        {
          name: "Kaustubh Gaikwad",
          profile: "/images/testimonial/70/kaustubh-gaikwad.png",
          college: "B-TECH | PUNE INSTITUTE OF COMPUTER TECHNOLOGY",
          ranks: "JEE Main 115 <br> BITSAT 242",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Kaustubh has Interned at Finastra as an Associate Software Engineer</li><li> &rarr; As of the summer of 2022, Kaustubh is working at Energy Exemplar as an Associate Software Engineer</li></ul>",
          admission: "Secured Admission at PICT, Pune (Pune Institute of Computer Technology) for B-Tech in Electrical, Electronics and Communications Engineering"
          
          
        },
        {
          name: "Surbhi C",
          profile: "/images/testimonial/70/surbhi-c.jpg",
          college: "B.SC & M.SC DUAL DEGREE | NARSEE MONJEE",
          
          admission: "Secured Admission at Narsee Monjee NMIMS for Integrated M.Sc. in Biomedical Science"
          
          
        },
        {
          name: "Aayush M",
          profile: "/images/testimonial/70/aayush-m.png",
          paragraph1: "I was previously associated with another institute but I stopped going there since the concepts were not being taught properly. I have taken Admission at Paathshala and Photon Ecademy later. I got to know about Paathshala and Photon Ecademy from one of my friends. My concepts have become very much clearer and problem-solving skills have improved greatly after joining Paathshala and Photon Ecademy",

          
          
        },
        {
          name: "Titiksha W",
          profile: "/images/testimonial/70/titiksha-w.png",
          college: "B-TECH | MANIPAL INSTITUTE OF TECHNOLOGY",
          admission: "Secured Admission At MIT (Manipal Institute of Technology) for B-Tech in Electrical and Electronics Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; At MIT, Titiksha has pursued her minors in Embedded Systems</li><li> &rarr She has a Master’s Degree in Engineering Management from Purdue University, United States</li><li> &rarr; As of the summer of 2022, she is working as an Analyst at Deloitte</li></ul>", 
        },
        {
          name: "Manjiri Vichare",
          profile: "/images/testimonial/70/manjiri-vichare.jpg",
          college: "KJ SOMAIYA COLLEGE OF ENGINEERING | B-TECH",
          ranks: "JEE Main 90.98 Percentile",
          paragraph1: "My experience at Paathshala and Photon Ecademy was mind-blowing. Here the students are taught in small batches and so the Professors were able to give good attention which is very good for the student. The Professors clear all our doubts easily, they encourage us to ask questions and are very supportive. After JEE Main, some of my friends mentioned to me they did not do well. But for me, thanks to Paathshala and Photon Ecademy, I performed much better than the others. This is because they conducted various Chapter Wise Tests, later on, the Full Syllabus Tests were given. The level of tests at Paathshala and Photon Ecademy was also higher so that we do not get nervous during the actual exam. The counselors and professors were cooperative and helped us with time management, suggested us what additional books to buy and how to solve extra papers at home. For a JEE aspirant, I would suggest, that the preparation should start from XI Std itself without being stressed out. There should be very less use of the mobile phone for these two years and the student should be focused only on studies. I have good memories of studying at Paathshala and Photon Ecademy that I will cherish",
          admission: "Admitted into KJ Somaiya College of Engineering for B-Tech in Mechanical Engineering",
          video: "https://www.youtube.com/embed/Oi3JtrnDm6I",
        },
        {
          name: "Krutika Desai",
          profile: "/images/testimonial/70/krutika-desai.png",
          college: "B.SC AND M.SC DUAL DEGREE | NARSEE MONJEE",
          
          admission: "Secured Admission At Narsee Monjee (NMIMS) for B.Sc and M.Sc Dual Degree in Biomedical Sciences",
          
        },
        {
          name: "Jatin Panchal",
          profile: "/images/testimonial/70/jatin-panchal.jpg",
          paragraph1: "My experience at Paathshala and Photon Ecademy was superb. The teaching of all professors is at higher level as well as simple so that all students could understand well. The management, classes schedule, academic service – everything is the best. I became confident to study and I have improved so much compared to how I was till 10th Std. I am proud to have been a student of Paathshala and Photon Ecademy",
          
          
        },
        {
          name: "Kedar Khapre",
          profile: "/images/testimonial/70/kedar-khapre.png",
          college: "B.E | BITS PILANI, GOA",
          ranks: "JEE Main 125 <br> BITSAT 301",
          admission: "Secured Admission At BITS Pilani Goa for BE in Chemical Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Kedar worked as a Data Analyst at Cogoport, Mumbai, and as an Analyst at IQVIA, Bengaluru</li><li> &rarr; As of Summer 2022, Kedar is working as a Decision Science Analyst at Jumbotail</li></ul>",
          video: "https://www.youtube.com/embed/uxer_66jaMM",

          
        },
        {
          name: "Viral Mehta",
          profile: "/images/testimonial/70/viral-mehta.png",
          college: "VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE",
          ranks: "JEE Main 139 <br> MHTCET 138 <br> Boards 89%",
          admission: "Secured Admission At VJTI, Mumbai (Veermata Jijabai Technological Institute) for B-Tech in Textile Sciences and Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Viral went on to do his MBA from SP Jain Institute of Management and Research, Mumbai</li></ul>",
          

          
        },
        {
          name: "Pratik Barahatte",
          profile: "/images/testimonial/70/pratik-barahatte.png",
          college: "WESTERN SYDNEY UNIVERSITY, AUSTRALIA",
          
          admission: "Secured Admission At Western Sydney University, Australia for a Dual Degree Course in Cyber Sciences",
        },
        {
          name: "Srushti Jagtap",
          profile: "/images/testimonial/70/srushti-jagtap.png",
          college: "BE | VIVEKANAND EDUCATION SOCIETY'S INSTITUTE OF TECHNOLOGY",
          paragraph1: "My experience at Paathshala and Photon Ecademy was very good. The professors helped me at every stage, from clearing my doubts, to improving my scores in the subjects. The Academics and Tests module helped me to solve more variety of questions in a limited time and taught me how to manage time effectively. For entrance exam aspirants, I would say that you should make efforts to understand all the concepts by revising them and clearing the doubts with the Professors. Do not get distracted by Social Media, Phones, Video Games, etc as these two are academically very precious years and hence, concentrate only on studies. At Paathshala and Photon Ecademy, I learned how to categorize a topic and study the concepts which made learning very easy",         
          admission: "Secured Admission At Vivekanand Education Society’s Institute of Technology (VESIT) for BE in Electronics and Telecommunications Engineering",
          video: "https://www.youtube.com/embed/19PlsOMahCE"
          
        },
        {
          name: "Shruti Bhakare",
          profile: "/images/testimonial/70/shruti-bhakare.png",
          college: "M.B.B.S | D.Y. PATIL UNIVERSITY",       
          admission: "Secured Admission At School of Medicine, D.Y. Patil University for M.B.B.S",  
        },
        {
          name: "Kashish Chandwani",
          profile: "/images/testimonial/70/kashish-chandwani.png",
          paragraph1: "My experience at Paathshala and Photon Ecademy was worthwhile. I have received a lot of guidance in making proper and correct decisions regarding my career and Academics. Thank You, Paathshala and Photon Ecademy!",  
        },
        {
          name: "Aamod Joshi",
          profile: "/images/testimonial/70/aamod-joshi.png",
          college: "B.SC AND M.SC DUAL DEGREE | BITS PILANI HYDERABAD",
          ranks: "Boards 90% ISC",
          admission: "Secured Admission At BITS Pilani Hyderabad for B.Sc and M.Sc Dual Degree in Physics"  
        },
        {
          name: "Utkarsh Kumar",
          profile: "/images/testimonial/70/utkarsh-kumar.png",
          college: "B-ARCH | SRM UNIVERSITY",
          
          admission: "Secured Admission at SRM University for B-Arch"  
        },
        {
          name: "Ashish L",
          profile: "/images/testimonial/70/ashish-l.png",
          college: "BE | DON BOSCO INSTITUTE OF TECHNOLOGY",
          ranks: "JEE Main 113 <br> BITSAT 330 <br> Eligible for BITS Pilani",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Ashish secured an All India Rank of 17 in CSE in GATE 2021</li><li> &rarr; He is a 2023 Batch M-Tech Computer Science Student at IIT Bombay</li></ul>",
          admission: "Secured Admission At Don Bosco Institute of Technology for BE in Computer Engineering"  
        },
        {
          name: "Ankita Bhoye",
          profile: "/images/testimonial/70/ankita-bhoye.png",
          paragraph1: "My experience at Paathshala and Photon Ecademy was very nice. Teaching at Paathshala  and Photon Ecademy is great. It helped me to improve my skills in exams and enhance my scores. On-Time Counseling and Guidance is the best part of Paathshala and Photon Ecademy. My concentration in studies has steadily improved over time",  
        },
        {
          name: "Gaurangi Puradkar",
          profile: "/images/testimonial/70/gaurangi-puradkar.png",
          college: "B.SC | RAMNIRANJAN JHUNJHUNWALA COLLEGE",
          paragraph1: "At Paathshala and Photon Ecademy, the professors gave great attention to each student and this helped me understand each topic well as I got all the concepts cleared. I also got to solve lots of questions as per the Professors’ and Mentors’ guidance, who are also very helpful and understanding. For the JEE Aspirants, I will say they should complete the syllabus as early as possible and then revise and solve lots of practice questions",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Gaurangi Interned at the Sparks Foundation (Content Development Intern)</li><li> &rarr; She has completed her Externship at Crio.Do</li></ul>",
          admission: "Secured Admission At Ramniranjan Jhunjhunwala College for B.Sc in Computer Science"
        },
        {
          name: "Vishad Sawant",
          profile: "/images/testimonial/70/vishad-sawant.jpg",
          paragraph1: "My experience at Paathshala and Photon Ecademy was very nice. The professors are highly qualified and dedicated. The atmosphere was very studious. Every student is dedicated to their studies which also kept me dedicated and sincere. My doubts were cleared from time to time. The infrastructure is very nice and the staff is always ready to cater to our requirements. The academics team kept me motivated and focused",
        },
        {
          name: "Ramya M",
          profile: "/images/testimonial/70/ramya-m.png",
          college: "BS | PURDUE UNIVERSITY",
          admission: "Secured Admission At Purdue University, United States for BS in Computer Science",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Ramya graduated from Purdue with an overall CGPA of 4.0/4.0</li><li> &rarr; She on the Dean’s List at Purdue University for 6 semesters for academic performance</li><li> &rarr; Ramya was awarded Scholarship Award for Excellence from Boeing</li><li> &rarr; She Interned at Angie’s List (Software Engineering Intern), Verizon Media (Software Engineering Intern)</li><li> &rarr; As of the summer of 2022, Ramya is an Undergraduate Teaching Assistant at Purdue University</li></ul>",
        },
        {
          name: "Akash Magdum",
          profile: "/images/testimonial/70/akash-magdum.png",
          college: "B-TECH | VIVEKANAND EDUCATION SOCIETY'S INSTITUTE OF TECHNOLOGY",
          ranks: "JEE Main 125 <br> MHTCET 148 <br> Boards 92%",
          admission: "Secured Admission At Vivekanand Education Society’s Institute of Technology (VESIT) for B-Tech in Computer Science Engineering",          
        },
        {
          name: "Bhagyashri Bhamare",
          profile: "/images/testimonial/70/bhagyashri-bhamare.png",
          college: "B-TECH | NIT SURATHKAL",
          ranks: "JEE Advanced 125 <br> JEE Main 113 <br> BITSAT 298 <br> MHTCET 145 <br> Boards 85%",
          admission: "Secured Admission at NIT Surathkal for B-Tech in Information Technology",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Bhagyashri was selected for the Microsoft Codess Mentorship Program</li><li> &rarr; She Interned at Microsoft (Software Development Engineer), eSamudaay (Software Development Engineer)</li></ul>"        
        },
        {
          name: "Rujuta Ghorpade",
          profile: "/images/testimonial/70/rujuta-ghorpade.jpg",
          college: "B-PHARM | NARSEE MONJEE'S SHOBHABEN PRATAPBHAI SCHOOL OF PHARMACY",
          paragraph1: "Before joining Paathshala and Photon Ecademy, my experience with another institute was not good. At Paathshala and Photon Ecademy, I was able to understand the concepts of the subject clearly and became confident and interested in the subjects. The professors taught me right from the basics of the 11th standard and made me capable of solving MCQs of JEE Main level quickly. Also, I was made to solve lots of questions from previous years’ tests. I could understand the questions and what I am supposed to answer. I would advise entrance exam aspirants – to stay focused on their studies, have their concepts of each topic cleared and solve as many questions as possible. And beware of the marketing strategies used by the coaching classes and don’t fall prey to them. I did initially fall prey to such tactics and joined a different class before joining Paathshlala and Photon Ecademy",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Rujuta graduated from Narsee Monjee with an overall CGPA of 3.38/4.0</li><li> &rarr; She has pursued her Master’s Degree in Chemistry from Georgia State University, University</li><li> &rarr; During her Master’s program, her coursework included Advanced Organic Synthesis, Mechanistic Organic Chemistry, Medicinal Chemistry, Biostatistics</li><li> &rarr; Rujuta has Interned at Centaur Pharmaceuticals Ltd (R&D Intern), Glenmark Pharmaceuticals (Marketing Intern)</li><li> &rarr; During her undergraduate years, Rujuta has co-authored a book chapter on the Formulation of Peptides and Peptidomimetics, and a review article on the Different Medicinal Plants Used In The Treatment of Parkinson’s Disease</li></ul>",
          admission: "Secured Admission At Narsee Monjee’s Shobhaben Pratapbhai School of Pharmacy for B-Pharmacy",
          video: "https://www.youtube.com/embed/DvKYcn9ZqEw"
        },
        {
          name: "Aditya L",
          profile: "/images/testimonial/70/aditya-l.png",
          college: "B-TECH | KJ SOMAIYA COLLEGE OF ENGINEERING",
          ranks: "JEE Main 142 <br> CET 141 <br> Boards 88%",
          admission: "Secured Admission At KJ Somaiya College of Engineering for B-Tech in Mechanical Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Aditya Interned at Orion Racing India (Junior Engineer)</li><li> &rarr; He also Interned at Air India Engineering Service Limited (Engineering Intern)</li><li> &rarr; He served as the President of ISHRAE Mumbai Chapter</li><li> &rarr; As of the summer of 2022, Aditya is working at Vertiv as a Graduate Engineer Trainee</li></ul>"
        },
        {
          name: "Sasha O",
          profile: "/images/testimonial/70/sasha-o.png",
          college: "BS | ARIZONA STATE UNIVERSITY",
          admission: "Secured Admission at Arizona State University (Ira A. Fulton Schools of Engineering) for BS in Mechanical Engineering"
        },
        {
          name: "Nidhi Vispute",
          profile: "/images/testimonial/70/nidhi-vispute.png",
          college: "B-TECH | TERNA ENGINEERING COLLEGE, MUMBAI",
          admission: "Secured Admission at Terna Engineering College, Mumbai for B-Tech in Computer Science Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Nidhi is the Co-lead of the Google Student Developer Club (Terna Engineering College Chapter)</li></ul>"
        },
        {
          name: "Akhil Boddul",
          profile: "/images/testimonial/70/akhil-boddul.jpg",
          college: "BE | COMPUTER ENGINEERING",
          paragraph1: "My experience at Paathshala and Photon Ecademy was very good. I felt very comfortable here. The professors taught and explained the concepts very nicely. They also made hard concepts easy to understand. We have gotten personalized attention from the professors because we were taught in small batches. I have enjoyed learning all the subjects here, Physics, Chemistry and Maths, my favourite subject being Physics",
          admission: "Secured Admission At Terna Engineering for BE in Computer Engineering"
        },
        {
          name: "Mann V",
          profile: "/images/testimonial/70/mann-v.jpg",
          college: "B.E | BITS PILANI, GOA",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Mann has been a Publicity Associate and a Core Team Member of Department of Publicity and Public Relations at BITS Pilani Goa</li><li> &rarr; He was a Curator and a Marketing Associate of TEDx BITSGoa</li><li> &rarr; He Interned at Birla Carbon (Project Intern)</li><li> &rarr; Mann is working with UltraTech Cement as of June 2022</li></ul>",
          admission: "Secured Admission At BITS Pilani Goa for BE in Chemical Engineering"
        },
        {
          name: "Aditya Atreya",
          profile: "/images/testimonial/70/aditya-atreya.jpg",
          college: "B-TECH & MBA DUAL DEGREE | NARSEE MONJEE'S MUKESH PATEL INSTITUTE OF TECHNOLOGY MANAGEMENT AND ENGINEERING",
          paragraph1: "In the institute where I enrolled before joining Paathshala and Photon Ecademy, I had many conceptual doubts which was a setback in the MCQ performance. After coming to Paathshala and Photon Ecademy, I got personalized attention from various Professors, and the continuous clarification of doubts, helped me solve the questions appropriately. When the conceptual doubts are cleared, then the question-solving ability is developed automatically. For entrance exam aspirants, I would say – attempt all the Part Syllabus, Full Syllabus and Topic Wise Tests to get the confidence for scoring higher marks in competitive exams. For the future students/batches at Paathshala and Photon Ecademy, I would say that this is the best place where personalized attention is actually given to the student",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Aditya Interned at Siemens (Management Trainee)</li><li> &rarr; As of the summer of 2022, Aditya is working at Ernst and Young as an Associate Consultant</li></ul>",
          admission: "Secured Admission At Narsee Monjee’s Mukesh Patel Institute of Technology Management and Engineering for Dual Degree Course in B-Tech and MBA"
        },
        {
          name: "Chirayu Shetty",
          profile: "/images/testimonial/70/chirayu-shetty.png",
          college: "BDS | BHARATI VIDYAPEETH MEDICAL COLLEGE",
          admission: "Secured Admission At Bharati Vidyapeeth Medical College for Bachelor of Dental Surgery (BDS)"
        },
        {
          name: "Ruchira Jawale",
          profile: "/images/testimonial/70/ruchira-jawale.png",
          paragraph1: "Everything at Paathshala and Photon Ecademy is very good. The Academics Team, management, Professors. The classrooms are very well maintained. Even the smallest of things are dealt with great care and concern!"
        },
        {
          name: "Atharva B",
          profile: "/images/testimonial/70/atharva-b.png",
          college: "B-TECH | INSTITUTE OF CHEMICAL TECHNOLOGY (ICT) MATUNGA",
          ranks: "JEE Main 120 <br> BITSAT 266 <br> MHTCET 155",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Atharva is pursuing his PhD in Chemical Engineering at University of Massachusetts (UMass) Amherst, United States</li></ul>",
          admission: "Secured Admission At Institute of Chemical Technology (ICT) Matunga for B-Tech in Chemical Engineering (Oils, Oleochemicals and Surfactants Technology)"
        },
        {
          name: "Amit Salgaonkar",
          profile: "/images/testimonial/70/amit-salgaonkar.png",
          paragraph1: "My experience at Paathshala and Photon Ecademy was very good. The syllabus was completed early and revision sessions were very helpful"
        },
        {
          name: "Shriraj A",
          profile: "/images/testimonial/70/shriraj-a.png",
          college: "B-TECH | IIT BOMBAY",
          admission: "Secured Admission At IIT Bombay for B-Tech in Civil Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Shriraj Interned at Bombay Locale, an advertising services start-up as an Assistant Director Intern</li><li> &rarr; As of the Summer of 2022, he is interning at TVF (The Viral Fever) as a Creative Writer Intern</li></ul>"
        },
        {
          name: "Yash Bhosale",
          profile: "/images/testimonial/70/yash-bhosale.png",
          college: "B-TECH | DON BOSCO INSTITUTE OF TECHNOLOGY",
          ranks: "BITSAT 330",
          admission: "Secured Admission At Don Bosco Institute of Technology for B-Tech in Mechanical Engineering",
        },
        {
          name: "Shashank Iyer",
          profile: "/images/testimonial/70/shashank-lyer.jpg",
          paragraph1: "I had a great experience studying at Paathshala and Photon Ecademy. Here the students get all the required facilities and study material required for perfect preparation. The classification of the topics into subtopics has helped in better understanding the concepts in that topic. Also, the classes are conducted in small batches which enables the professor to give personalized attention to the student. The student is encouraged to ask questions and clear all his/her doubts. I was initially in a different institute before joining Paathshala and Photon Ecademy. I would have to work much much harder if I were at some other institute, where they start teaching the chapters slowly in the beginning and then after enough students have enrolled for the course, they rush through the syllabus. On top of that, they don’t teach properly. They give you a mixed bag of theories; you need to go into it and search out the important points. Here at Paathshala Education and Photon Ecademy, the professors are knowledgeable and provided personalized attention to each student and cleared all their doubts on the subject. They guide you properly and give what is actually required. For entrance exam aspirants, I would say do not count the number of hours you study, instead solve more conceptual questions because this is what that develops our concepts. As soon as you finish theory, start off with practice papers of previous years and solve as many as possible",
          ranks: "JEE Main 143",
          video: "https://www.youtube.com/embed/a6BAau8SBZY"
        },
        {
          name: "Chaitanya Tamhankar",
          profile: "/images/testimonial/70/chaitanya-tamhankar.jpg",
          college: "B-TECH | KJ SOMAIYA COLLEGE OF ENGINEERING",
          admission: "Secured Admission At KJ Somaiya College of Engineering for B-Tech in Electronics Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Chaitanya is a class of 2024 MBA student at the prestigious BITS School of Management</li><li> &rarr; During his graduation at KJ Somaiya, he was the Editor-In-Chief of the 33rd edition of the college periodical – Kshitij, Literary Secretary of the Students’ Council for the Academic year 2019-20, Convenor of Syahi 2020, Part of Organizing Committee of Technical Festival – Abhiyantriki 2019, Part of Organizing Committee of Cultural Festival of – Symphony 2020</li></ul>",
        },
        {
          name: "Faizan Sarang",
          profile: "/images/testimonial/70/faizan-sarang.png",
          college: "BDS | M.A. RANGOONWALA COLLEGE OF DENTAL SCIENCE AND RESEARCH CENTRE",
          admission: "Secured Admission At M.A. Rangoonwala College of Dental Science and Research Centre for Bachelor of Dental Surgery (BDS)"
        },
        {
          name: "Maitreyee A",
          profile: "/images/testimonial/70/maitreyee-a.jpg",
          college: "NARSEE MONJEE, NMIMS UNIVERSITY | DUAL DEGREE MASTERS",
          paragraph1: "My experience at Paathshala and Photon Ecademy was good. The professors are good and knowledgeable. They are quite encouraging. The study atmosphere is also good. The staff and counselors are friendly and helping. My experience overall was good.",
          admission: "Admitted into Narsee Monjee, NMIMS University for Dual Degree Masters in Bio Medical Sciences"
        },
        {
          name: "Sumanth Atreya",
          profile: "/images/testimonial/70/sumanth-atreya.png",
          college: "BS | INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH (IISER), PUNE",
          paragraph1: "<b>Sumanth is a DST INSPIRE Fellow <br> ‘Innovation in Science Pursuit for Inspired Research (INSPIRE)‘ is an innovative programme sponsored and managed by the Department of Science & Technology for attraction of talent to Science</b>",
          admission: "Secured Admission At Indian Institute of Science Education and Research (IISER), Pune"
        },
        {
          name: "Suparnan V",
          profile: "/images/testimonial/70/suparnan-v.jpg",
          college: "BE | IMPERIAL COLLEGE, LONDON",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; As of the summer of 2022, Suparnan is working at Citadel in London. Citadel, a financial services company considered one of the world’s leading alternative investment managers</li></ul>",
          admission: "Secured Admission at Imperial College, London for BE in Electronics and Information Engineering"
        },
        {
          name: "Saloni Mahajan",
          profile: "/images/testimonial/70/saloni-mahajan.jpg",
          college: "B-TECH | NARSEE MONJEE, NMIMS UNIVERSITY",
          paragraph1: "I got a lot of encouragement and motivation for my studies and exams from Paathshala and Photon Ecademy. The Academics and Tests module helped me prepare well and improve my scores as I solved as many questions to gain confidence. For an entrance exam aspirant, I would say you should stay focused on your studies and it is important that you should solve lots of practice questions along with a timer to the side. It is advisable to stay away from all distractions especially social media for these two years. Use your phone only when required and do not spend too much time on it. What I appreciate about Paathshala and Photon Ecademy is that they are goal-oriented oriented and the smaller batch size enables the Professors to give personalized attention to the students",
          admission: "Secured Admission At Narsee Monjee, NMIMS University for B-Tech in Data Science Engineering",
          video: "https://www.youtube.com/embed/3xFNwDqRFu8"
        },
        {
          name: "Yash D",
          profile: "/images/testimonial/70/yash-d.jpg",
          college: "B-TECH & M-TECH DUAL DEGREE | NARSEE MONJEE",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; As of the summer of 2022, Yash is working as an Associate Consultant at Deloitte</li></ul>",
          admission: "Secured Admission At Narsee Monjee for B-Tech & M-Tech Dual Degree in Electronics and Telecommunications Engineering",
        },
        {
          name: "Sanika Biwalkar",
          profile: "/images/testimonial/70/sanika-biwalkar.png",
          college: "BE | DWARKADAS J. SANGHVI COLLEGE OF ENGINEERING",
          paragraph1: "I am Sanika’s father. I had been told that the teaching at Paathshala and Photon Ecademy is at a different level altogether. The topics are categorized and the concepts are taught thoroughly for better understanding and then there are tests on each topic followed by Full Syllabus Tests. The concepts have been taught very very clearly by the Paathshala and Photon Ecademy’s Professors. They taught her how to systematically prepare for the exams, and how to write the answers in the board exams, and as time passed, she became very confident in the subjects <br> <b>– Mr. Biwalkar (Sanika’s Father)</b>",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; As of the summer of 2022, Sanika is working as a System Engineer at Tata Consultancy Services</li></ul>",
          admission: "Secured Admission at Dwarkadas J. Sanghvi College of Engineering for BE in Information Technology Engineering",
          video: "https://www.youtube.com/embed/x15g1-v7pQw",
        },
        {
          name: "Maitry Patel",
          profile: "/images/testimonial/70/maitry-patel.png",
          college: "M.B.B.S | D.Y. PATIL UNIVERSITY",
          admission: "Secured Admission At School of Medicine, D. Y. Patil University for M.B.B.S",
        },
        {
          name: "Siddharth P",
          profile: "/images/testimonial/70/siddharth-p.png",
          college: "BITS PILANI",
          admission: "Secured Admission at BITS Pilani Goa for BE in Electrical, Electronics, and Communications Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Siddharth has Interned at Hyphen SCS (Financial Analysis Intern)</li><li> &rarr; He has done his Research Internship at Nord University, Norway</li><li> &rarr; He is also doing his minors in Finance at BITS Pilani Goa</li><li> &rarr; He has a keen interest in Quantitative Finance and Applications of Machine Learning in Finance, Blockchain and Crypto</li><li> &rarr; As of 2023, he is interning at the Mumbai office of Morningstar, Inc., an independent investment research firm based out of Chicago, IL</li></ul>"
        },
        {
          name: "Asesh Patra",
          profile: "/images/testimonial/70/asesh-patra.jpg",
          paragraph1: "I joined Paathshala and Photon Ecademy a bit late and now wish I had joined earlier. The guidance that Paathshala and Photon Ecademy provides cannot be found anywhere else. I have learned how to prepare for the exam and solve the questions within the allotted time. The professors and counsellors here motivated us a lot and have provided us with timely guidance which enabled us to excel in the exams. For any entrance exam aspirants, I would say, you need to be strong in your concepts. Do not spend too much time on difficult questions. Work hard, study smart",
          video: "https://www.youtube.com/embed/5C-GIytSoVY",
          video2: "https://www.youtube.com/embed/Xr9DlfIu_Z4",       
        },
        {
          name: "Ameya N",
          profile: "/images/testimonial/70/ameya-n.png",
          college: "B-TECH | SARDAR PATEL INSTITUTE OF TECHNOLOGY",
          admission: "Secured Admission At Sardar Patel Institute of Technology For B-Tech In Electronics and Telecommunications Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Ameya has a Master’s Degree in Nanoscience and Nanotechnology from LU Leuven, Belgium (First Year of Erasmus Mundus Joint Masters Program)</li><li> &rarr; She also has a Master’s Degree in Quantum and Nanoscale Engineering from Université Grenoble Alpes, France (First Year of Erasmus Mundus Joint Masters Program)</li><li> &rarr; As of 2023, Ameya is pursuing her PhD from Karlsruhe Institute of Technology, Germany</li></ul>",
          image: "/images/testimonial/inner-img/ameya-n.png"        
        },
        {
          name: "Shardul D",
          profile: "/images/testimonial/70/shardul-d.png",
          college: "B-TECH | MANIPAL ACADEMY OF HIGHER EDUCATION, MANIPAL UNIVERSITY",
          admission: "Secured Admission At Manipal Academy of Higher Education, Manipal University for B-Tech in Computer Science Engineering",
          ranks: "JEE Main 147 <br> MIT AIR 653 <br> MHTCET 142",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Shardul graduated from Manipal with an overall CGPA of 9.18/10</li><li> &rarr; He Interned at vPhrase, Reliance Industries Limited (Software Developer), ZS (Business Technology Solutions Associate)</li><li> &rarr; Shardul completed his MS in Computer Science (AI) from the University of Southern California, United States</li></ul>",
          image: "/images/testimonial/inner-img/shardul-d.png"        
        },
        {
          name: "Vaikund M",
          profile: "/images/testimonial/70/vaikund-m.png",
          ranks: "JEE Advanced AIR 13153 <br> JEE Main 192"        
        },
        {
          name: "Swara Limbekar",
          profile: "/images/testimonial/70/swara-limbekar.png",
          college: "MIT SCHOOL OF BIOENGINEERING SCIENCES & RESEARCH",
          paragraph1: "Initially, I have taken admission at a different institute. I was not at all happy with the institute and discontinued from there. Then, I joined Paathshala and Photon Ecademy. My experience at Paathshala and Photon Ecademy was quite good. I have gotten a lot of support and guidance from the professors, and also had very good practice sessions for the competitive entrance exams. All the professors are friendly and encouraging. The academic counselors were always motivating me. That helped me a lot",
          admission: "Secured Admission at MIT School of Bioengineering Sciences & Research-MITBIO, Manipal University",        
        },
        {
          name: "Arpit Kolge",
          profile: "/images/testimonial/70/arpit-kolge.png",
          college: "B-TECH | NARSEE MONJEE",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Arpit has Interned at Siemens, Mumbai (Technological Planning)</li><li> &rarr; He worked as a Human Resources Intern at MentorBoxx</li><li> &rarr; Arpit is a class of 2024 PGDM student at ISBR Business School</li></ul>",
          admission: "Secured Admission at Narsee Monjee’s Mukesh Patel Institute of Technology Management and Engineering for B-Tech in Mechanical Engineering",
          image: "/images/testimonial/inner-img/arpit-kolge.png"      
        },
        {
          name: "Aditya Parhad",
          profile: "/images/testimonial/70/aditya-parhad.png",
          college: "B-TECH | VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE (VJTI)",
          paragraph1: "The Professors at Paathshala and Photon Ecademy have good knowledge of the fundamentals and advanced concepts of the subject. Some of the Professors have a good sense of humor too! The Professors method of explaining the topics is simple. They divide the topics into categories and sub-categories that are easy to remember. The best way to crack the JEE is to initially focus on the fundamentals and give each topic a lot of time. After completion of the syllabus, you should practice at least 50 FSTs of Main and 50 FSTs of Advanced. This will really help you a lot.",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Aditya has completed his MS in Electrical and Electronics Engineering from North Carolina State University with an overall CGPA of 3.9/4.0</li><li> &rarr; Aditya Interned at Go-Solar Solutions (Business Development Intern), Bhabha Atomic Research Centre (Research), 7X Analytics LLC, United States, National Renewable Energy Laboratory, Colorado</li><li> &rarr; He was also a Summer Trainee at Mazgaon Dock, Mumbai, and a Project Trainee at Reliance Infrastructure</li><li> &rarr; He was a Graduate Student Researcher at North Carolina State University and a Graduate Research Assistant at Duke Energy Corporation</li><li> &rarr; As of the summer of 2022, Aditya is working as an Associate Engineer at Schweitzer Engineering Laboratories (SEL), Washington, United States</li></ul>",
          admission: "Secured Admission At Veermata Jijabai Technological Institute (VJTI) for B-Tech in Electrical Engineering",
          image: "/images/testimonial/inner-img/aditya-parhad.png",
          video: "https://www.youtube.com/embed/0esivhhKErE",      
        },
        {
          name: "Radhika T",
          profile: "/images/testimonial/70/radhika-t.png",
          college: "B-TECH | NIT NAGPUR",
          ranks: "JEE Main 147 <br> BITSAT 290 <br> MHTCET 152 <br> Boards 90%",
          admission: "Secured Admission At NIT Nagpur for B-Tech in Mechanical Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Radhika is a 2023 Master’s student (Mechatronics, Robotics and Automation Engineering) at the Oregon State University, United States</li><li> &rarr; She has done her Industrial Training Apprenticeship at Maruti Suzuki India Limited</li><li> &rarr; She Interned at the KTH Royal Institute of Technology, Stockholm, Swedan</li><li> &rarr; She has also Interned at Technip Energies (Graduate Engineering Trainee)</li></ul>",
          image: "/images/testimonial/inner-img/radhika-t.jpg",
        },
        {
          name: "Bhakti Savla",
          profile: "/images/testimonial/70/bhakti-savla.jpg",
          college: "MAHARASHTRA INSTITUTE FOR MEDICAL EDUCATION AND RESEARCH | M.B.B.S",
          paragraph1: "Her professors are intelligent, knowledgeable and dedicated. My daughter really benefited from the class as she learnt the subjects in depth. She was given daily assignments to complete. It really improved her test scores including MCQs. For the NEET aspirants, I will say one has to be very focused and planned with studies. Also, indulge in extra curricular activities like sports or music to relax. <br> <b>– Mrs. Savla, Bhakti’s Mother</b>",
          admission: "Her ward Bhakti Savla got admitted into Maharashtra Institute for Medical Education and Research for M.B.B.S through NEET (UG)"
        },
        {
          name: "Divya M",
          profile: "/images/testimonial/70/Divya-m.png",
          college: "BE | VIVEKANAND EDUCATION SOCIETY'S INSTITUTE OF TECHNOLOGY (VESIT)",
          ranks: "Boards 92% (Physics 93, Chemistry 94, Mathematics 90)",
          admission: "Secured Admission At Vivekanand Education Society’s Institute of Technology (VESIT) for BE in Computer Engineering",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Divya has Interned at Nuclear Power Corporation of India Limited (Web Developer), Bhabha Atomic Research Centre (Machine Learning Engineer)</li><li> &rarr; She has worked at Computer Society of India as a Senior Operations Officer, CitrusTech as a (Trainee) Software Engineer</li><li> &rarr; As of the summer of 2022, Divya is Interning at Innomatics Research Labs (Data Science)</li></ul>"
        },
        {
          name: "Aayush Voleti",
          profile: "/images/testimonial/70/aayush-voleti.jpg",
          college: "B-TECH & M-TECH DUAL DEGREE | IIT BHU",
          paragraph1: "I became more confident than before after I got all the concepts cleared at Paathshala and Photon Ecademy. The professors are all student-friendly; they give lots of problems to solve. As a JEE Aspirant, you need to be calm and not be stressed out. My tips to the aspirants would be – ask your doubts and get the concepts cleared, also solve lots of questions from previous years’ tests. This will give you the confidence to do well in your paper",
          paragraph2: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Aayush has Interned at Bhabha Atomic Research Centre, Mumbai (Summer Intern) and Eaton, an Appliances, Electrical, and Electronics Manufacturing Company based out of Dublin, Ireland</li><li> &rarr; As of the Summer of 2022, Aayush is working at HSBC as a Senior Software Engineer</li></ul>",
          admission: "Secured Admission At IIT BHU for B-Tech & M-Tech Dual Degree in Materials Science and Technology",
          video: "https://www.youtube.com/embed/cbKZZNMpCHM"
        },
        {
          name: "Anish Jadhav",
          profile: "/images/testimonial/70/anish-jadhav.png",
          paragraph1: "My experience with the Professors at Paathshala Education and Photon Ecademy has been amazing. The professors are friendly and knowledgeable. The syllabus was completed early as per the usual Paathshala and Photon Ecademy Policy. Due to the small size of the batch, we got personalized attention from the faculty. Also, audio visuals and small animated videos were shown in the class to make the study more understandable and entertaining. Compared to Paathshala and Photon Ecademy, when I was at another institute before joining here, their method of teaching was different and I could not understand the concepts well",
          paragraph2: "At Paathshala and Photon Ecademy, the professors ensured that I understood the concepts and their applications correctly. Each topic is categorized into divisions for better understanding. Plus there are lots of practice questions to be solved which helped us in gaining confidence in the subjects",
          video: "https://www.youtube.com/embed/863yZByzQw4"
        },
        {
          name: "Tiasha M",
          profile: "/images/testimonial/70/tiasha-m.png",
          college: "B.PHARM | BITS PILANI",
          admission: "Secured Admission At BITS Pilani for Bachelors in Pharmacy",
          paragraph1: "<b>Alumni Spotlight</b> <br> <ul><li> &rarr; Tiasha has also done her Minors in Finance from BITS Pilani</li><li> &rarr; She has Interned at RPG Life Sciences Ltd, Deloitte (Risk Advisory Team), InMobi (Strategy and Operations)</li><li> &rarr; Tiasha has worked as a Consultant at Zinnov, and an Associate Manager at ShareChat</li><li> &rarr; As of the summer of 2022, Tiasha is working as an Associate Manager at Groww, India</li></ul>",
          image: "/images/testimonial/inner-img/taisha-m.png"
        },
        {
          name: "Gaurav Parekh",
          profile: "/images/testimonial/70/gaurav-parekh.png",
          college: "B-TECH | KJ SOMAIYA COLLEGE OF ENGINEERING",
          paragraph1: "At Paathshala and Photon Ecademy, the professors gave great attention to each student and this helped me understand each topic well as I got all the concepts cleared. I also got to solve lots of questions and get my doubts cleared by the professors at Paathshala and Photon Ecademy. The professors are very helpful. For the JEE Aspirants, I would say they should complete the syllabus as early as possible and then revise and solve lots of practice questions",
          ranks: "JEE Main 140/360 <br> JEE Advanced 147/366 <br> JEE Advanced AIR 32164 <br> MHTCET 131/200",
          admission: "Secured Admission At KJ Somaiya College of Engineering for B-Tech in Computer Science Engineering",
          image: "/images/testimonial/inner-img/gaurav-parekh.png",
          video: "https://www.youtube.com/embed/br-DNI4CWY0"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
