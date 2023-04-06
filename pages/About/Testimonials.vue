<template>
    <div class="dark:bg-black bg-white">
        <!-- Container for demo purpose -->
        <div class="container px-6 mx-auto bg-white dark:bg-black">

            <!-- <h1 class="text-[#161821] dark:text-[#fff] text-3xl text-center py-6 relative ">TESTIMONIAL</h1> -->
            <courseheader>
                <template v-slot:title>Testemonial</template>
            </courseheader>

            <!-- Section: Design Block -->
            <section class=" text-center md:text-left my-3" v-for="item in testimonials">

                <div class="block rounded-lg bg-gray-200 dark:bg-gray-900">
                    <div class="flex flex-wrap items-start dark:bg-gray-900 bg-gray-200 p-5 ">
                        <div class="grow-0 shrink-0 basis-auto block lg:flex justify-center  w-full lg:w-6/12 xl:w-4/12 ">
                            <img :src="item.profile" alt="aadya deshpande" class="  pt-10"
                                width="150" height="150" style="border-radius: 800%;" />
                        </div>
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 dark:bg-gray-900 bg-gray-200">
                            <div class="px-6 py-12 md:px-12">
                                <h2 class="text-3xl font-bold mb-2 text-[#20ad96]"> {{ item.name }} </h2>
                                <p class="mb-2 font-semibold text-gray-300 dark:text-[#dddddd]">{{ item.college }}</p>
                                <p class="mb-4 font-bold text-[#696969] dark:text-[#dddddd]" v-html="item.ranks"></p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph1">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph2">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph3">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph4">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph5">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph6">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph7">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph8">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph9">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph10">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph11">
                                    
                                </p>
                                <p class="text-[#696969] dark:text-[#ddd] mb-6" v-html="item.paragraph12">
                                    
                                </p>
                                <p class="font-bold text-[#696969] dark:text-[#dddddd] mb-6" v-html="item.admission">
                                    
                                </p>
                                <iframe width="640" height="360" :src="item.video" title="Aadya Deshpande | MBBS | A Paathshala Ascension Exclusive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                

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
          "name": "Aadya Deshpande",
          "college": "M.B.B.S | GRANT MEDICAL COLLEGE AND SIR J. J. GROUP OF HOSPITALS, MUMBAI",
          "ranks": `NEET | 692 / 720 <br> NEET All India Rank | 355 <br> XII Boards | 99.33 %`,
          "profile": "/images/testimonial/70/aadya-deshpande.jpg",
          "paragraph1": "A huge thank you to Paathshala and Photon Ecademy. My NEET performance would not have been possible without them! Their Early Completion of Syllabus Strategy enabled me to revise the entire syllabus more than 5 to 6 times, which was not possible for other students that I know from other institutes, as their syllabus was completed just 3 to 4 months before the NEET exam, in which case revision would not at all be possible for any student",
          "paragraph2": "Also, their one to one, extensively personalized teaching played an important role not only in effective teaching but also in completing the syllabus early, since it is not possible to complete the syllabus fast in a batch or a group teaching mode. I could get my doubts solved swiftly because of the personalized mode. However, that would not have been possible for me, if I was studying elsewhere in a batch or a group. I have given around 200 to 250 Full Syllabus Tests",
          "paragraph3": "What I realized is, in the beginning, the Full Syllabus Tests seem challenging and the scores are usually low, lower than the Part Syllabus Tests. As we keep at them and keep going, analyze our mistakes thoroughly and work on our weak topics and chapters, our scores in FSTs start improving. It is also important to not compare your performance with anyone else’s but with your own previous performance. It is important to balance or eliminate hyper normal stimuli like video gaming, excessive eating, watching videos online, which, if not moderated might be a huge obstacle to the path of preparation",
          "paragraph4": "All along, love the process of learning science and gathering knowledge and try to learn from the mistakes rather than feel bad about the mistakes made in the tests or any low scores. As many problems as possible should be solved and it is also a great idea to solve the same problem set multiple times to become more confident in a chapter or topic",
          "admission": "Secured Admission At Grant Medical College and Sir J. J. Group of Hospitals, Mumbai for M.B.B.S",
          "video": "https://www.youtube.com/embed/8GmVNb_6Ckk"
        },
        {
          "name": "Ojas Deshpande",
          "college": "M.B.B.S | KING EDWARD MEMORIAL HOSPITAL AND SETH GORDHANDAS SUNDERDAS MEDICAL COLLEGE, MUMBAI",
          "ranks": `NEET | 680 / 720 <br> NEET All India Rank 892 <br> JEE Main | 98.62 Percentile <br> KVPY SX All India Rank 198 <br> XII Boards 98.83% <br> Qualified for AIIMS, Rishikesh`,
          "profile": "/images/testimonial/70/ojas-deshpande.jpg",
          "paragraph1": "I would like to extend my thanks to Paathshala and Photon Ecademy for my NEET score. Their one to one teaching and mentoring methodology helped me in a great way. It allowed the professors to monitor my progress at each step. I received feedback pertaining to my areas of improvement and not just some general feedback that is applicable to everyone. That helped me immensely to focus on my weak areas and strengthen them with time",
          "paragraph2": "Their strategy of early completion of syllabus has provided one of the biggest advantages by giving me 2 years of time only for practice, revision and test series enabling me to constantly improve my scores. The Full Syllabus Tests helped me understand the concepts that I had forgotten with time and also the topics and chapters in which I need to practice more. The professors clarified all my NEET doubts from time to time, making my revision and practice process effective and efficient. Paathshala and Photon Ecademy’s Mistakes Analysis’ Report has been an amazing tool in helping me find out topics and chapters, where I needed more practice and revision. I have given 200 to 250 NEET Full Syllabus Tests. Solving these many FSTs greatly improved my time management skills and also my ability to stay calm and confident in an exam environment",
          "paragraph3": "I would recommend Paathshala and Photon Ecademy’s Educational services to all future aspirants. The personal attention they deliver is the key to success in competitive entrance exams",
          
          "admission": "Secured Admission At King Edward Memorial Hospital and Seth Gordhandas Sunderdas Medical College, Mumbai for M.B.B.S | NEET(UG)",
          "video": "https://www.youtube.com/embed/zPMn_QZb7jE"
        },
        {
          "name": "Saurabh Parekh",
          "college": "B-TECH | IIT BOMBAY",
          "ranks": `JEE Advanced All India Rank 674 <br> JEE Advanced 273/366 <br> JEE Main Score 276 <br> JEE Main All India  Rank 2067 <br> BITSAT 390 <br> MHTCET 179 <br> Boards 89% Eligible for Admission at – All the Top 7 IITs, Top 3 NITs, BITS Pilani <br> Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering`,
          "profile": "/images/testimonial/70/saurabh-parekh.jpg",
          "paragraph1": "My experience at Paathshala and Photon Ecademy was very wonderful. I have learnt a lot here. The professors here are very helpful. Due to their personalized teaching mode, I was able to clear all my doubts effectively. Getting my doubts clarified on time improved my practice test scores. I would strongly recommend JEE Advanced and JEE Main aspirants to enroll with Paathshala and Photon Ecademy Before joining Paathshala and Photon Ecademy, my JEE Advanced test scores were not good. After I have enrolled here, my scores have increased consistently",
          "paragraph2": "The professors here have great expertise in the subject. They have provided amazing tips and techniques, that helped me with fast solving. I would give the Paathshala and Photon Ecademy professors a perfect 10/10 rating",
          "paragraph3": "<b>Saurabh’s Study Routine</b> – I have been serious about academics since the very beginning. I study everyday since my school days (X Standard, mainly). During my JEE preparation, I used to study and practice questions for at least 5 to 6 hours each and everyday (this is apart from the classes duration). I used to give equal importance to all the three subjects – Physics, Chemistry and Mathematics. I was good at Mathematics. Physics was challenging for me, so I used to study Physics for more duration. Whatever used to be taught in the class, I developed the habit of going home and revising it on the same day",
          "paragraph4": "<b>Saurabh’s Tips For JEE Aspirants</b> – When you give your practice tests, make sure to avoid silly mistakes. If this habit is not consciously developed, there is likeliness of losing marks to silly mistakes in the final exam. Every mark is precious. Learn to manage time well. This is a very important skill to be developed and nurtured when you give your Full Syllabus Tests. The professors at Paathshala and Photon Ecademy helped me a lot with gaining the skillset needed to crack the JEE Advanced exam",
          "paragraph5": "<b>Saurabh’s Career Plans</b>  – I want to pursue Mechanical Engineering from IIT Bombay",
          "paragraph6": "<b>Paathshala and Photon’s Post Exam Counselling</b> - In this one-to-one post exam session by Paathshala and Photon Ecademy, I have come to know a lot about the career opportunities available to me, about IITs, IIT Bombay, from where I am planning to pursue Mechanical Engineering, it was very insightful and I learnt a lot from the session",
          "paragraph7": "<b>Alumni Spotlight</b> <br> <ul><li>Saurabh is pursuing his MS in Computer Science at Stony Brook University, New York, United States</li> <li>He has also interned at IIM Bengaluru as a Blockchain Developer Intern, OYO as a Project Associate Intern, Amazon Web Services (AWS) as a Software Development Engineering Intern, and worked at Zomato Full time as a Software Development Engineer before pursuing his Masters at Stony Brook</li><li>Saurabh has done his Dual Minors in Computer Science and Data Science at IIT Bombay</li></ul>",
          
          "admission": "Eligible for Admission at – All the Top 7 IITs, Top 3 NITs, BITS Pilani <br> Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering",
          "video": "https://www.youtube.com/embed/hGLVnI7766c"
        },
        {
          "name": "Mr. Jayesh Parekh | Father of Saurabh Parekh",
          "college": "B-TECH | IIT BOMBAY",
          
          "profile": "/images/testimonial/70/saurabh-parekh.jpg",
          "paragraph1": "When we took admission at Paathshala and Photon Ecademy, we had the aim of JEE Advanced exam and were aware of Saurabh’s ability to crack the exam. But, what we were looking for was someone who could push forward Saurabh’s JEE Advanced rank as best as possible. We were confident that only Paathshala and Photon Ecademy could do that",
          "paragraph2": "We have achieved that today because of Paathshala and Photon Ecademy!",
          "paragraph3": "Every doubt of Saurabh has been cleared very effectively via the Paathshala and Photon’s doubts system and all his weak areas have been identified and strengthened with time. This has benefitted Saurabh a lot and improved his confidence",
          "paragraph4": "<b>Mr Parekh’s Tips to JEE Aspirants’ Parents</b> – When you enroll your ward in a coaching institute setup, wherein students are taught in batches, he/she is not going to get any personalized attention from that system. Even if your ward has good grasping and understanding abilities, he/she will not be able to ask doubts and will eventually keep those doubts to themselves which will keep piling with time affecting their confidence and morale",
          "paragraph5": "At Paathshala and Photon Ecademy, because of the personalized attention mode and the amazing doubts-solving system in place, all of Saurabh’s doubts were clarified on time",
          "paragraph6": "I would give 100% credit to Paathshala and Photon Ecademy for the invaluable contribution to Saurabh’s journey to IIT Bombay",
          "paragraph7": "We are proud to have been associated with Paathshala and Photon Ecademy!",
          
          "admission": "His ward Saurabh Parekh Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering",
          "video": "https://www.youtube.com/embed/hGLVnI7766c"
        },
        
        {
          "name": "Nihar Mhapankar",
          "college": "M.B.B.S | LOKMANYA TILAK GENERAL MEDICAL COLLEGE",
          
          "profile": "/images/testimonial/70/nihar-mhapankar.jpg",
          "paragraph1": "<b>To merely explain my experience and emotions with Paathshala and Photon Ecademy with a few words? Oh Boy! It’s going to be a task between the Devil and the Deep Blue Sea. My 2-year experience here was an adventure.</b> Professors here helped me a lot in teaching, doubts, and concept clarification. I would say that they are true experts in their subjects. <b>The professors here are the best! The environment and ambiance of the classrooms were far beyond my expectation. Good infrastructure, comfortable benches, quality teaching facilities, you name it! Learning here was fun and the environment maintained by the teachers was the cherry on the cake</b> Our senior students also gave us the information about the mighty class in our 11 Standard. I was also given the right guidance about the books to be referred to, in addition to the study materials provided. I would rest my case on a final note that, if Paathshala and Photon Ecademy is given the opportunity to compete at the higher level, it would gain all the honors and respect it truly deserves!!",
          
          
          "admission": "Secured Admission At Lokmanya Tilak General Medical College for M.B.B.S",
          "video": "https://www.youtube.com/embed/qIJripnZVig"
        },
        {
          "name": "Dr. Tushar Mhapankar | ENT Surgeon | Father of Nihar Mhapankar",
          "college": "M.B.B.S | LOKMANYA TILAK GENERAL MEDICAL COLLEGE",
          
          "profile": "/images/testimonial/70/dr-tushar-mhapankar.png",
          "paragraph1": "My experience with Paathshala and Photon Ecademy has been absolutely fantastic. At the beginning itself, (Professor) Sagar Sir had given Nihar a view of the goal and how to reach that goal, and how to start. Taking admission here did wonders for Nihar. The way of teaching by the professors here was very good. Nihar was very enthusiastic about attending Paathshala and Photon Ecademy and loved going to classes without missing even a single class. All the credit for Nihar’s success in the exams goes to the staff and professors of Paathshala and Photon Ecademy",
          
          
          "admission": "Secured Admission At Lokmanya Tilak General Medical College for M.B.B.S",
          "video": "https://www.youtube.com/embed/qIJripnZVig"
        },
        {
          "name": "Sachit Shanbhag",
          "college": "B-TECH | IIT BOMBAY",
          
          "profile": "/images/testimonial/70/sachit-shanbhag.jpg",
          "paragraph1": "My experience at Paathshala and Photon Ecademy was very good. The most powerful thing about Paathshala and Photon Ecademy is that we students got one-to-one teaching and mentoring here, that helped me excel in all the three subjects",
          "paragraph2": "Paathshala and Photon Ecademy’s Professors are highly experienced. They could deliver us in-depth knowledge of the concepts needed for the preparation of JEE",
          "paragraph3": "<b>Before joining Paathshala and Photon Ecademy</b>, I was weak at Physics and Chemistry. I have also faced difficulty in time management. I did not how much had to be spent for concepts I was weak at, time to be dedicated for practising problems from ongoing topics",
          "paragraph4": "<b>After enrolling at Paathshala and Photon Ecademy</b>, the professors helped me overcome my weaknesses in these subjects and I could see my practice tests scores improve. I have been taught many tricks and tips for faster problem solving which has been a great help. I was guided about how to utilize my time on a daily basis and manage it efficiently without being confused or overwhelmed",
          "paragraph5": "<b>Sachit’s Tips to JEE Aspirants</b>, Cover all the topics of the syllabus without leaving out anything. Paathshala and Photon’s learning resources are very well curated for problem practice. While solving the questions, start at the basic level and go the advanced level of problems. Make sure you clarify your doubts on time",
          "paragraph6": "During class sessions, stay fully focused and pay complete attention to what the professsors are teaching",
          "paragraph7": "For questions practice, Paathshala and Photon Ecademy’s class notes and learning resources have been great for my preparation",
          "paragraph8": "Paathshala and Photon Ecademy’s efficient doubt-solving system helped me a lot in gaining confidence in the concepts",
          "paragraph9": "The professors at Paathshala and Photon Ecademy have been very supportive",
          "paragraph10": "They have given their 200% and helped me excel in my subjects",
          "paragraph11": "<b>Paathshala and Photon Ecademy played a great role in this achievement of mine. I would give 100% credit to Paathshala and Photon Ecademy for my success in JEE Advanced</b>",
          "paragraph12": "<b>Alumni Spotlight</b> <br> <ul><li>Sachit works as a Data Science Engineer at Inito</li> <li>Inito is the world’s first comprehensive at-home diagnostics device that allows diagnostic tests for fertility, diabetes, vitamins, thyroid, and dozens more on a single device connected to a smartphone</li><li>Inito is backed by the best investors in the world – Y Combinator and many others in US, Singapore, and India</li><li>Sachit has also interned at Ernst & Young and Daticore</li></ul>",

          
          
          "admission": "Secured Admission At IIT Bombay for B-Tech in Chemical Engineering",
          "video": "https://www.youtube.com/embed/qBxlFrOsGQo"
        },
        {
          "name": "Mr. Subhash Shanbhag | IIT BHU Alumnus | Father of Sachit Shanbhag",
          "college": "B-TECH | IIT BOMBAY",
          
          "profile": "/images/testimonial/70/mr-subhash-shanbhag.png",
          "paragraph1": "When I have enrolled Sachit at Paathshala and Photon Ecademy,<b> it was comforting to know that this is the place where what Sachit needs will be provided – personalized attention, clarifying his doubts and getting the best JEE Advanced rank possible and yes, that proved out to be case with Sachit securing a rank in JEE Advanced</b>",
          "paragraph2": "<b>Mr Shanbhag’s tips to parents of JEE Aspirants</b> – JEE is not just about knowledge, its also about managing temper, time, ability to focus in a seemingly stressful situation. Before the difficult questions are attempted, the concepts have to be mastered. Increase the difficulty level of the practice questions gradually, starting from the basic/easy level of questions",

          
          
          "admission": "His ward Sachit Shanbhag Secured Admission At IIT Bombay for B-Tech in Chemical Engineering",
          "video": "https://www.youtube.com/embed/qBxlFrOsGQo"
        },
        {
          "name": "Rijushree Saha",
          "college": "M.B.B.S | KASTURBA MEDICAL COLLEGE, MANIPAL UNIVERSITY",
          
          "profile": "/images/testimonial/70/rijushree-saha.jpg",
          "paragraph1": "To begin with, I would like to say – <b>Paathshala and Photon Ecademy is a highly unique place.</b> It is different from coaching classes that we students attend. It has been a unique experience. <b>We were taught in a different environment, with a different approach. Also, it is a personalized one-to-one teaching that is provided at Paathshala and Photon Ecademy.</b> It really helped me understand the core concepts of the subjects and that helped me crack the questions in the NEET exam with greater ease",
          "paragraph2": "When we think about a competitive exam like NEET, we students mostly tend to be Biology-oriented. Paathshala and Photon Ecademy has guided me about how Physics is a rank-differentiator in NEET, although all the three subjects are important. This is generally not told to the students. Most students are unaware of this",
          "paragraph3": "<b>The professors at Paathshala and Photon Ecademy helped me gain acumen in the subjects.</b> I have been encouraged to and made to practice a lot of questions. I have been given access to the Paathshala and Photon Ecademy’s learning resources",
          "paragraph4": "<b>Additionally, I would like to appreciate the administration of the company</b>, which was very serious about students’ academics. They have also given me a personal space, where I could comfortably sit and practice questions everyday. This really helped me gain confidence and expertise in the subject and positively contributed to my score",
          "paragraph5": "Paathshala and Photon Ecademy’s professors also helped me a lot with Organic Chemistry, which is another challenging subject like Physics. The books I have been suggested for Organic Chemistry practice and the material given to me by Paathshala and Photon Ecademy helped me gain exposure to different types of questions. There were also previous years’ competitive exams’ questions present in the Paathshala and Photon Ecademy practice set. That along with the solved examples helped me a lot. <b>There were some questions, which I can tell you, that were asked in my NEET exam which are, as if directly taken from the Paathshala and Photon Ecademy material. I would like to give credit to the material for it</b>",
          "paragraph6": "<b>Rijushree’s Tips to NEET Aspirants</b> – NEET is a time-oriented exam, so you need to be very well-prepared for the exam. You should know how to crack the questions in a proper order. Read NCERT of every subject very thoroughly to become perfect with the theory aspect of the subjects, including Physics, because sometimes theory questions are also asked in Physics. Solve previous years’ NEET/AIPMT question papers. This is very important. The more you solve, the better will be the exposure you gain to the type of questions asked in the NEET exam. There are many questions that are repeated from previous years’ NEET exams as well. Try not to stick with just one material. Solve as many models of questions as possible. Paathshala and Photon Ecademy gives you access to a variety of amazing and well-curated learning resources, across varying difficulty levels. Make sure your concepts are strong. This will enable you to crack NEET with flying colours. I would like to wish the best to all the NEET aspirants out there and would want them to do very well in the exam and get into their dream medical college in the first attempt itself",
          "paragraph7": "<b>Alumni Spotlight</b> <br> <ul><li>Kasturba Medical College has been named in the Top 10 Medical Colleges in India as per the prestigious NIRF 2021 Rankings by the Ministry of Education, Government of India</li> <li>Riju has accomplished a Special Mention at the Idea Exposition Hackathon 2019 hosted by NIT Suratkal</li></ul>",

          
          
          "admission": "Rijushree has also been offered admission at Indian Institute of Science Education and Research (IISER), Bhopal <br><br> Secured Admission At Kasturba Medical College, Manipal University for M.B.B.S in NEET-UG",
          "video": "https://www.youtube.com/embed/erfVT0l2AjE"
        },
        
        
        
      ]
      
      
      
    }
  }
}


</script>


<style lang="scss" scoped></style>