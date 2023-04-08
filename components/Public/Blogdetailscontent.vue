<template>
  <div v-for="blog in blogs" :key="blog.id" >
    <div class="w-12/12 py-10 border-b border-b-1 border-[#555]" v-if="blog.slug === slug">
      <img class="w-full rounded-md" :src="blog.image"
        alt="Connection Between Self-Portraits and Identity" />

      <div>
        <div class="p-8 pl-0 pb-10  rounded-b-md">
          <span class="text-[15px] text-[#8C89A2] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ blog.bio }}</span>
          <h3 class="text-[34px] dark:text-white text-[#33333] hover: font-extrabold leading-[1.5] mb-1">
            {{ blog.title }}
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light text-[#ddd]">
            <span class="flex justify-center items-center mr-4 dark:text-[#ddd] text-[#696969]">
              <img src="/images/logo/Photon Logo Earth.png" alt="image" class="rounded-[50%] mr-2 w-[32px] h-[32px]" />
              {{ blog.name }}
            </span>

            <span class="flex justify-center items-center dark:text-[#ddd] text-[#696969]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 dark:fill-[#ddd] fill-[#696969]" viewBox="0 0 20 20"><path d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699ZM1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756L1.4 7.742Zm5.267 6.877v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15Zm-8.333-3.977v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15ZM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0v-.92Z"/></svg>
              {{ blog.date }}
            </span>

            <span class="ml-4 flex justify-center items-center dark:text-[#ddd] text-[#696969]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 dark:fill-[#ddd] fill-[#696969]"  viewBox="0 0 576 512"><path d="M288 144a110.94 110.94 0 0 0-31.24 5a55.4 55.4 0 0 1 7.24 27a56 56 0 0 1-56 56a55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/></svg>
              {{ blog.views }}
            </span>
          </div>

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-4 text-justify" v-html="blog.paragraph1">
            
          </div>
          

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph2">
             
          </div>
          
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph3">
             
          </div>
          
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph4">
             
          </div>
          
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph5">
             
          </div>
          
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph6">
             
          </div>
          
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph7">
             
          </div>
          
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph8">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph9">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph10">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph11">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph12">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph13">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph14">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph15">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph16">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph17">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph18">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph19">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph20">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph21">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph22">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph23">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph24">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph25">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph26">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph27">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph28">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph29">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph30">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph31">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph32">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph33">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph34">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph35">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph36">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph37">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph38">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph39">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph40">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph41">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph42">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph43">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph44">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph45">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph46">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph47">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph48">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph49">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph50">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph51">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph52">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph53">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph54">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph55">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph56">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph57">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph58">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph59">
             
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-3 text-justify" v-html="blog.paragraph60">
             
          </div>
          

          

          

          <!-- <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mb-[1rem]">
            <p>Source: thisiscolossal.com</p>
          </div>

          <div class="flex items-center justify-between pt-4">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 dark:fill-[#ddd] fill-[#696969]"  viewBox="0 0 24 24"><path  d="M6.5 10C7.3 10 8 9.3 8 8.5S7.3 7 6.5 7S5 7.7 5 8.5S5.7 10 6.5 10M9 6l7 7l-5 5l-7-7V6h5m0-2H4c-1.1 0-2 .9-2 2v5c0 .6.2 1.1.6 1.4l7 7c.3.4.8.6 1.4.6s1.1-.2 1.4-.6l5-5c.4-.4.6-.9.6-1.4c0-.6-.2-1.1-.6-1.4l-7-7C10.1 4.2 9.6 4 9 4m4.5 1.7l1-1l6.9 6.9c.4.4.6.9.6 1.4s-.2 1.1-.6 1.4L16 19.8l-1-1l5.7-5.8l-7.2-7.3Z"/></svg>
              <p class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] ml-2">
                Artist, Education
              </p>
            </div>
            <div class="group">
              <div class="flex items-center dark:text-[#ddd] text-[#696969] ">
              Share this post

              <span class="border-[2px] border-[#ededed] rounded-[50%] w-12 h-12 flex justify-center items-center ml-4 group-hover:bg-[#20ad96]">
                
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-[#20ad96] group-hover:fill-white" viewBox="0 0 24 24"><path  d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Zm0-16q.425 0 .713-.288T19 5q0-.425-.288-.713T18 4q-.425 0-.713.288T17 5q0 .425.288.713T18 6ZM6 13q.425 0 .713-.288T7 12q0-.425-.288-.713T6 11q-.425 0-.713.288T5 12q0 .425.288.713T6 13Zm12 7q.425 0 .713-.288T19 19q0-.425-.288-.713T18 18q-.425 0-.713.288T17 19q0 .425.288.713T18 20Zm0-15ZM6 12Zm12 7Z"/></svg>
              </span>
            </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex flex-row items-center my-10">
      <div class="flex flex-col justify-center items-center px-5">
        <img class="rounded-[50%] " src="/images/logo/Photon Logo Earth.png" width="100" alt="image" />

        <div class="flex items-center gap-2">
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:twitter" />
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:facebook-f" />
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:instagram" />
        </div>
      </div>
      <div>
        
        <div class="text-[15px] dark:text-[#ddd] text-[#696969]">
          Photon Ecademy is a premier educational services company that provides private one-to-one personalized classes all over the world, curated to meet your academic needs.
        </div>
      </div>
    </div>

    <!-- <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="topic w-full relative dark:bg-[#111] bg-none transition-all duration-[0.3s] ease-[ease-in-out] pl-[50px] pr-[30px] px-2.5  py-[30px] rounded-md flex items-center justify-start bg-white max-w-[373px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3 fill-[#20ad96]" width="44" height="44" viewBox="0 0 24 24"><path  d="m8.5 12.8l5.7 5.6c.4.4 1 .4 1.4 0c.4-.4.4-1 0-1.4l-4.9-5l4.9-5c.4-.4.4-1 0-1.4c-.2-.2-.4-.3-.7-.3c-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6c0-.1 0-.1 0 0z"/></svg>
        <h6 class="leading-[1.56] font-bold text-[18px] text-[#333] dark-[#fff]">
          Connection Between Self-Portraits and Identity
        </h6>
      </div>

      <div class="topic w-full relative dark:bg-[#111] bg-none transition-all duration-[0.3s] ease-[ease-in-out] pl-[50px] pr-[30px] px-2.5  py-[30px] rounded-md flex items-center justify-end bg-white max-w-[373px]">
        <h6 class="leading-[1.56] font-bold text-[18px] text-right text-[#333] dark-[#fff]">
          Brush Strokes Energize Trees in Paintings
        </h6>
        <icon class="text-[30px] ml-3 text-[#20AD96]" name="uil:angle-right-b" />
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 fill-[#20ad96]" width="44" height="44" viewBox="0 0 24 24"><path d="m14.83 11.29l-4.24-4.24a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29l4.24-4.24a1 1 0 0 0 0-1.42Z"/></svg>
      </div>
    </div> -->

    <!-- comments start -->

    <div>
      <h6 class="text-[24px] my-20 text-[#333] dark:text-[#fff]">
        Comments <span class="text-[#20AD96]">(0)</span>
      </h6>

      <!-- <div class="flex flex-row items-start mb-10">
        <div class="flex flex-col justify-center items-center px-5">
          <img class="rounded-[50%] mb-4 min-w-[80px] min-h-[80px]" src="/images/author/blog-author.jpg" alt="image" />
        </div>
        <div>
          <div class="flex justify-between items-center">
            <h6 class="uppercase font-bold leading-[1.3] text-base dark:text-[white] text-[#333] mt-0">James scott</h6>
            <div class="relative before text-[15px] text-[#ababab] leading-[1.74] italic">
              November 13, 2018 at 4:50 am
            </div>
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] mt-[15px]">
            Thanks for always keeping your HTML Template up to date. Your level
            of support and dedication is second to none.
          </div>
          <div class="text-[15px] text-[#ababab] leading-[1.74] flex mt-4">
            <div>February 12, 2018 at 6:31 am</div>
            <span class="mx-2"> | </span>
            <a href="">Reply</a>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-start mb-10 ml-10">
        <div class="flex flex-col justify-center items-center px-5">
          <img class="rounded-[50%] mb-4 min-w-[80px] min-h-[80px]" src="/images/author/blog-author.jpg" alt="image" />
        </div>
        <div>
          <div class="flex justify-between items-center">
            <h6 class="uppercase font-bold leading-[1.3] text-base dark:text-[white] text-[#333] mt-0">HARRY FERGUSON</h6>
            <div class="relative before text-[15px] dark:text-[#ababab] text-[#696969] leading-[1.74] italic">
              February 13, 2019 at 4:51 am
            </div>
          </div>
          <div class="text-[15px] dark:text-[#ddd] text-[#696969] mt-[15px]">
            Thanks for always keeping your HTML Template up to date. Your level
            of support and dedication is second to none.
          </div>
          <div class="text-[15px] text-[#ababab] leading-[1.74] flex mt-4">
            <div>November 13, 2018 at 4:31 am</div>
            <span class="mx-2"> | </span>
            <a href="">Reply</a>
          </div>
        </div>
      </div> -->
    </div>

    <!-- comment end -->

    <div>
      <blogcontactform />
    </div>
  </div>
</template>

<script>
export default {
  props: ['slug'],
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
          paragraph1: "&rArr; When it comes to preparing for competitive exams, there is no one-size-fits-all approach. Every student is unique, with their own strengths, weaknesses, and learning styles. This is where personalized classes come in – they provide a tailor-made approach to learning that can greatly improve a student's chances of success in competitive exams.",
          paragraph2: "&rArr; One of the main advantages of personalized classes is that they are customized to the needs of the student. This means that the instructor can focus on the areas where the student needs the most help, and tailor the lessons accordingly. For example, if a student is struggling with a particular topic, the instructor can spend more time on that topic and provide additional resources and exercises to help the student master it.",
          paragraph3: "&rArr; Another benefit of personalized classes is that they allow for a more flexible schedule. In a group class, the instructor must follow a set curriculum and pace, which may not work for all students. With personalized classes, the instructor can adjust the pace of the lessons to match the student's learning speed, and schedule the classes at times that are convenient for the student. This can help to reduce stress and anxiety, as students can learn at their own pace and on their own schedule.",
          paragraph4: "&rArr; Personalized classes also provide a more focused learning experience. In a group class, there may be distractions and interruptions that can take away from the learning experience. With personalized classes, the student can focus solely on the lesson and the instructor, without any distractions. This can help to improve retention and understanding, as the student can fully absorb the material being presented",
          paragraph5: "&rArr; Another advantage of personalized classes is that they allow for more interaction between the student and the instructor. In a group class, there may not be enough time for every student to ask questions or receive individual attention from the instructor. With personalized classes, the student can ask questions and receive immediate feedback and guidance from the instructor. This can help to clarify any confusion and ensure that the student fully understands the material.",
          paragraph6: "&rArr; In conclusion, personalized classes are an excellent option for students preparing for competitive exams. They provide a customized approach to learning that can help to improve understanding, retention, and success. With the ability to focus on the areas where the student needs the most help, a more flexible schedule, a more focused learning experience, and more interaction with the instructor, personalized classes can greatly increase a student's chances of success in competitive exams.",
          slug: "maximizing-exam-success-with-personalized-learning"
        },
        {
          id: 2,
          image: "/images/blog/blog_images/blog-2.jpg",
          name: '',
          bio: '',
          date: 'August 7, 2022',
          title: 'The Top Three Types of Exam Mistakes Students Make and How to Avoid Them',
          views: '154 views',
          paragraph1: "&rArr; Exams are an important aspect of a student's academic life. They are designed to test the student's knowledge and understanding of a subject. However, no matter how well-prepared a student may be, there are still chances of making mistakes on exam day. Exam mistakes come in various forms and can be attributed to different factors. Therefore, it is essential to understand the types of mistakes students may make in exams to help them avoid them in the future. Here are three common types of exam mistakes that students may make:",
          paragraph2: "&rArr; Conceptual error: A conceptual error occurs when a student has a lack of complete conceptual understanding of a topic, leading to an incorrect answer. For example, in mathematics, a student may not fully understand the concept of fractions, leading to errors in calculations involving fractions. To avoid conceptual errors, students should try to develop a deep understanding of the fundamental concepts and theories in the subject. They should clarify any doubts with their teachers and practice using examples and problems to help solidify their knowledge.",
          paragraph3: "&rArr; Execution error: An execution error occurs when a student is not able to apply their knowledge effectively. This type of mistake can be attributed to a lack of problem-solving practice or incorrect application of concepts. In mathematics, for instance, a student may be familiar with the formulas, but they may not know how to use them correctly in problem-solving situations. To avoid execution errors, students should focus on practicing a variety of problems that require the application of different concepts and formulas. This would help students identify their weak areas and improve their problem-solving skills.",
          paragraph4: "&rArr; Silly mistakes: Silly mistakes are mistakes that occur due to carelessness or inattention to detail. These types of errors are not related to a student's knowledge or understanding of the subject, but rather a lack of focus or concentration. Examples of silly mistakes include misreading the question, misinterpreting the data, or making calculation errors. To avoid silly mistakes, students should practice taking exams under exam-like conditions. They should learn to manage their time effectively, read the instructions carefully, and double-check their work before submitting their exam.",
          paragraph5: "&rArr; Students are bound to make mistakes in exams, but with the right preparation, they can minimize the risk of making them. Understanding the types of mistakes students may make in exams is essential for improving exam performance and reducing future mistakes. Students should focus on developing a deep understanding of the fundamental concepts, practice problem-solving, and cultivate a sense of focus and concentration to avoid exam mistakes.",
          slug: "the-top-three-types-of-exam-mistakes-students-make-and-how-to-avoid-them"

        },
        {
          id: 3,
          image: "/images/blog/blog_images/blog-3.jpg",
          name: '',
          bio: '',
          date: 'September 15, 2022',
          title: 'Ace Your Exams: How to Memorize Different Formula Like a Pro',
          views: '297 views',
          paragraph1: "&rArr; For many students, memorizing different formulae can be a challenging task. It requires a lot of effort and practice to retain these formulas in memory. Whether you're studying for a math, physics, or chemistry exam, memorizing formulas is a crucial aspect of success. In this article, we will discuss some tips for memorizing different formulae effectively.",
          paragraph2: "&rArr; Break down the formula: Before trying to memorize a complex formula, it's essential to understand its constituent parts. Break the formula down into individual components, and try to understand how they fit together. By understanding each part of the formula, you will find it easier to memorize it.",
          paragraph3: "&rArr; Create flashcards: Flashcards can be a great tool for memorizing different formulae. Create a set of flashcards with the formulae on one side and the description or explanation on the other side. Practice with the flashcards regularly until you can recall the formula quickly.",
          paragraph4: "&rArr; Practice, practice, practice: Memorizing formulae requires repetition and practice. Practice applying the formulae to different problems and situations. As you work through problems, you will reinforce the formulae in your memory.",
          paragraph5: "&rArr; Mnemonic devices: Mnemonic devices can be an effective way to remember formulae. Create a rhyme or a phrase that incorporates the different components of the formula. For example, to remember the circumference formula for a circle (C=2πr), you can use the phrase 'I eat pizza twice a radius' to help remember the formula.",
          paragraph6: "&rArr; Use visualization: Visualization can be a powerful tool for memorization. Try to visualize the formula in your mind, and think about how it works. For example, to remember the quadratic formula (x=(-b±√(b^2-4ac))/2a), you can visualize a rocket taking off, with the '±' sign representing the rocket's two engines.",
          paragraph7: "&rArr; Make connections: Try to make connections between different formulae and concepts. Look for patterns and similarities between different formulae. By making these connections, you will find it easier to remember the formulae.",
          paragraph8: "&rArr; Memorizing different formulae can be a challenging task, but with the right approach, it can become easier. By breaking down the formula, creating flashcards, practicing regularly, using mnemonic devices, visualizing, and making connections between different formulae, you can effectively memorize different formulae. Remember that memorization is a process, and it takes time and effort. With the right strategies, you can increase your chances of success and perform better in your exams.",

          slug: "ace-your-exams-how-to-memorize-different-formula-like-a-pro"

        },
        {
          id: 4,
          image: "/images/blog/blog_images/blog-4.jpg",
          name: '',
          bio: '',
          date: 'October 24, 2022',
          title: 'Unlocking Success: The Power of Personalized Attention in Competitive Exams',
          views: '170 views',
          paragraph1: "&rArr; In today's competitive world, exams play a significant role in determining one's success. Competitive exams such as JEE, NEET, and CAT are some of the most important exams that can impact a student's future. While studying for these exams can be challenging, personalized attention can make all the difference. In this article, we will discuss the importance of personalized attention for success in competitive exams.",
          paragraph2: "&rArr; Individualized Learning: Personalized attention allows for individualized learning. Every student has a unique learning style and pace. With personalized attention, a student can receive individualized instruction that meets their specific needs. This can help students learn faster and more effectively.",
          paragraph3: "&rArr; Targeted Instruction: Personalized attention also allows for targeted instruction. Tutors and teachers can identify areas where the student needs the most help and provide instruction on those specific areas. This can help students improve their weaknesses and build on their strengths.",
          paragraph4: "&rArr; Better Time Management: Personalized attention can also help with time management. With individualized instruction, students can cover the required material more efficiently. Tutors can help students develop a study plan that fits their schedule and ensures that they cover all the material before the exam.",
          paragraph5: "&rArr; Improved Confidence: Personalized attention can help students build confidence. With targeted instruction and individualized learning, students can achieve a deeper understanding of the material. This can improve their confidence and reduce anxiety when facing the exam.",
          paragraph6: "&rArr; Greater Success: Personalized attention can lead to greater success. Students who receive personalized attention are better prepared for the exam and have a higher chance of achieving their desired score. With personalized attention, students can gain the skills and knowledge needed to succeed in their chosen field.",
          paragraph7: "&rArr; Personalized attention is crucial for success in competitive exams. It allows for individualized learning, targeted instruction, better time management, improved confidence, and greater success. Whether you're studying for JEE, NEET, CAT, or any other competitive exam, personalized attention can make all the difference. By seeking out personalized attention, students can maximize their potential and increase their chances of success.",
          slug: "unlocking-success-the-power-of-personalized-attention-in-competitive-exams"

        },
        {
          id: 5,
          image: "/images/blog/blog_images/blog-5.jpg",
          name: '',
          bio: '',
          date: 'December 1, 2022',
          title: 'Maximize Your Study Time with the Pomodoro Timer Technique: A Step-by-Step Guide',
          views: '265 views',
          paragraph1: "&rArr; If you're a student or someone who works on a computer, you know how easily you can get lost in the world of distractions. The Pomodoro Timer Technique is a time management method that can help you focus and be productive. In this article, we will discuss what the Pomodoro Timer Technique is, how it works, and how you can implement it in your studying routine.",
          
          paragraph2: "&rArr; <b>What is the Pomodoro Timer Technique?</b> <br> The Pomodoro Timer Technique is a time management method that was developed in the late 1980s by Francesco Cirillo. The technique is named after the tomato-shaped kitchen timer that he used to track his work sessions. The Pomodoro Timer Technique involves breaking down your work into 25-minute intervals, called Pomodoros, with five-minute breaks in between.",
          
          paragraph3: "&rArr; <b>How does it work?</b> <br> The Pomodoro Timer Technique is a simple and effective method to manage your time and be more productive. To implement the technique, follow these steps: <br> <ul><li> &rarr; Choose a task that you want to work on.</li><li> &rarr; Set the Pomodoro timer for 25 minutes.</li><li> &rarr; Work on the task until the timer rings.</li><li> &rarr; Take a five-minute break.</li><li> &rarr; After four Pomodoros, take a longer break of 15-20 minutes.</li></ul>",
          
          paragraph4: "&rArr; The idea behind the technique is that the 25-minute Pomodoro intervals are short enough to maintain focus and long enough to get meaningful work done. The breaks in between allow for rest and help prevent burnout.",
          
          paragraph5: "&rArr; <b>How can you implement the Pomodoro Timer Technique in your studying routine?</b> <br> Implementing the Pomodoro Timer Technique in your studying routine can be very beneficial. Here's how you can do it: <br> <ul><li> &rarr; <b>Choose a task:</b> Start by choosing a task you want to work on, such as reading a chapter of a book or writing an essay.</li><li> &rarr; <b>Set the timer:</b> Set the Pomodoro timer for 25 minutes and start working on the task.</li><li> &rarr; <b>Take breaks:</b> After 25 minutes, take a five-minute break. Use this time to rest, stretch or take a quick walk.</li><li> &rarr; <b>Repeat:</b> After the break, start another Pomodoro session. Repeat this process until you complete the task or your study session is over.</li></ul>",
          
          paragraph6: "&rArr; The Pomodoro Timer Technique can help you improve your productivity, manage your time more effectively, and reduce stress and burnout. By breaking your work into manageable intervals and taking breaks, you can maintain focus and avoid distractions.",
          paragraph7: "&rArr; The Pomodoro Timer Technique is a powerful time management tool that can help you stay focused and productive while studying. It's a simple yet effective method that can make a significant difference in your productivity and overall well being. Give it a try, and you might be surprised at how much more you can get done.",
          slug: "maximize-your-study-time-with-the-pomodoro-timer-technique"

        },
        {
          id: 6,
          image: "/images/blog/blog_images/blog-6.jpg",
          name: '',
          bio: '',
          date: 'January 9, 2023',
          title: 'Learn Smarter, Not Harder: How the Feynman Technique Can Revolutionize Your Study Habits',
          views: '189 views',
          paragraph1: "&rArr; If you're a student or someone who is trying to learn something new, you know how challenging it can be to retain information. The Feynman Technique is a powerful learning method that can help you understand and remember complex concepts. In this article, we will discuss what the Feynman Technique is, how it works, and how you can use it to improve your studying.",
          
          paragraph2: "&rArr; <b>What is the Feynman Technique?</b> <br> The Feynman Technique is a learning method named after Richard Feynman, a Nobel Prize-winning physicist. The technique involves breaking down complex concepts into simple explanations that anyone can understand. The idea behind the technique is that if you can explain a concept to someone else in simple terms, then you truly understand it.",
          
          paragraph3: "&rArr; <b>How does it work?</b> <br> The Feynman Technique is a simple and effective method to improve your understanding of complex concepts. To implement the technique, follow these steps: <br> <ul><li> &rarr; <b>Choose a topic:</b> Start by choosing a topic or concept that you want to learn.</li><li> &rarr; <b>Explain the concept:</b> Write down an explanation of the concept in simple terms, as if you were teaching it to someone who has no background knowledge of the subject.</li><li> &rarr; <b>Identify knowledge gaps:</b> Identify any gaps in your knowledge or understanding of the concept.</li><li> &rarr; <b>Review and simplify:</b> Review the explanation you wrote down and simplify it further, using simple language and analogies.</li><li> &rarr; <b>Repeat:</b> Repeat the process until you can explain the concept in simple terms without any knowledge gaps.</li></ul>",
          
          paragraph4: "&rArr; By using the Feynman Technique, you will be able to identify any gaps in your knowledge and improve your understanding of complex concepts.",
          paragraph5: "&rArr; The Feynman Technique can help you improve your understanding of complex concepts and retain information better. By breaking down complex concepts into simple explanations, you will be able to identify any gaps in your knowledge and improve your understanding of the topic.",
          paragraph6: "&rArr; The Feynman Technique is a powerful learning method that can help you improve your understanding of complex concepts. It's a simple yet effective method that can make a significant difference in your learning and studying. Give it a try, and you might be surprised at how much more you can learn and remember.",
          slug: "learn-smarter-not-harder-how-the-feynman-technique-can revolutionize-your-study-habits"
          
        },
        {
          id: 7,
          image: "/images/blog/blog_images/blog-7.jpg",
          name: '',
          bio: '',
          date: 'February 14, 2023',
          title: 'From Perfectionists to Crisis Makers: A Comprehensive Guide to Procrastination Types While Studying',
          views: '221 views',
          paragraph1: "&rArr; Procrastination is a common phenomenon among students, and it can be quite challenging to overcome. The more you delay starting your studies, the more difficult it becomes to concentrate and retain information. Understanding the different types of procrastinators can help you identify your habits and implement effective strategies to overcome them.",
          paragraph2: "&rArr; <b>The Perfectionist: -</b>  The Perfectionist is someone who strives for perfection in everything they do, including their studies. They set incredibly high standards for themselves and often feel that they can't start their studies until everything is perfect. The Perfectionist tends to spend more time planning than actually studying, which leads to a lack of productivity. To overcome procrastination, the Perfectionist needs to set realistic goals and focus on making progress, rather than perfection.",
          paragraph3: "&rArr; <b>The Busy Bee: -</b>  The Busy Bee is someone who is always on the go and tends to prioritize everything else above their studies. They have a full schedule and find it challenging to find time to sit down and study. To overcome procrastination, the Busy Bee needs to make a conscious effort to schedule time for their studies and prioritize their education.",
          paragraph4: "&rArr; <b>The Dreamer: -</b>  The Dreamer is someone who is always dreaming about their future, rather than focusing on their present studies. They may spend hours researching potential careers or daydreaming about what their life will be like after graduation. To overcome procrastination, the Dreamer needs to focus on their current studies and find ways to make them more meaningful and relevant to their future goals.",
          paragraph5: "&rArr; <b>The Avoider: -</b>  The Avoider is someone who avoids studying because they find it boring or difficult. They may spend time doing other things, such as scrolling through social media or watching television, to avoid the task at hand. To overcome procrastination, the Avoider needs to break their studying into manageable tasks and find ways to make the material more engaging and interesting.",
          paragraph6: "&rArr; <b>The Crisis Maker: -</b>  The Crisis Maker is someone who thrives under pressure and waits until the last minute to start their studies. They may believe that they work best under pressure and find it challenging to focus until they are close to a deadline. To overcome procrastination, the Crisis Maker needs to set their own deadlines and find ways to make the material more engaging, even when they have a lot of time to complete the task.",
          paragraph7: "&rArr; Procrastination can be a significant obstacle to success for students. By understanding the different types of procrastinators and implementing effective strategies to overcome them, students can improve their productivity and achieve their academic goals. Whether you are a Perfectionist, Busy Bee, Dreamer, Avoider, or Crisis Maker, there are strategies that you can use to overcome procrastination and achieve success in your studies.",
          slug: "from-perfectionists-to-crisis-makers-a-comprehensive-guide-to-procrastination-types-while-studying"
        },
        {
          id: 8,
          image: "/images/blog/blog_images/blog-8.jpg",
          name: '',
          bio: '',
          date: 'March 1, 2023',
          title: "Cultivating a Winner's Mindset: A Guide to Academic Success",
          views: '174 views',
          paragraph1: `&rArr; A winning mindset is essential for success, both in life and in academics. It can be the difference between an average student and an exceptional one. In this article, we will explore the characteristics of a winner's mindset and how you can cultivate it to improve your study habits.`,
          paragraph2: "&rArr; <b>Belief in Yourself: -</b>  The first characteristic of a winner's mindset is a belief in oneself. Winners believe that they can achieve their goals and that they have the ability to succeed. They have confidence in their abilities and are not afraid to take risks. To cultivate a belief in yourself, focus on your strengths, and develop a growth mindset. Don't be afraid to try new things and take on challenges that push you out of your comfort zone.",
          paragraph3: "&rArr; <b>Focus on the Process: -</b>  Winners focus on the process, not just the end result. They understand that success is not just about achieving the goal but about the effort and dedication that goes into it. To develop a process-focused mindset, break down your goals into smaller, more manageable steps. Celebrate each small victory along the way and learn from any setbacks",
          paragraph4: "&rArr; <b>Self-Discipline: -</b>  Winners have strong self-discipline. They are able to set goals, make plans, and follow through with them. They understand that success requires hard work and dedication. To develop self-discipline, set specific goals and create a study schedule that you can stick to. Avoid procrastination and distractions by creating a conducive study environment.",
          paragraph5: "&rArr; <b>Perseverance: -</b>  Winners are resilient and persevering. They don't give up easily, even in the face of challenges and setbacks. To develop perseverance, embrace failure as a learning opportunity. Stay focused on your goals, and keep pushing yourself even when things get tough.",
          paragraph6: "&rArr; <b>Continuous Learning: -</b>  Winners have a hunger for continuous learning. They seek out new knowledge and experiences to improve themselves. To cultivate a learning mindset, be curious about the subject matter you're studying. Ask questions, seek out additional resources, and take notes to reinforce your knowledge.",
          paragraph7: "&rArr; A winner's mindset is essential for success in academics and in life. By cultivating self-belief, focusing on the process, developing self-discipline, perseverance, and a hunger for continuous learning, you can improve your study habits and achieve your goals. Remember, developing a winning mindset takes time, effort, and practice, so don't be discouraged if it doesn't come naturally at first. Keep pushing yourself, and you'll see the results in your academic performance and beyond.",
          slug: "cultivating-a-winners-mindset-a-guide-to-adacemic-success"
        },
        {
          id: 9,
          image: "/images/blog/blog_images/blog-9.jpg",
          name: '',
          bio: '',
          date: 'March 8, 2023',
          title: 'Mastering the Art of Time Management: How to Beat Procrastination and Stay on Task',
          views: '277 views',
          paragraph1: "&rArr; Procrastination is the bane of productivity. It's something that affects everyone, regardless of age, gender, or profession. However, beating procrastination is easier said than done. In this article, we will explore five actionable steps to help you overcome procrastination and increase your productivity.",
          paragraph2: "&rArr; <b>Set Specific Goals and Deadlines: -</b>  The first step to beating procrastination is to set specific goals and deadlines. This will help you stay focused and give you a sense of direction. Be sure to set SMART goals that are specific, measurable, achievable, relevant, and time-bound. Once you have your goals and deadlines in place, create a schedule that includes regular study breaks and stick to it.",
          paragraph3: "&rArr; <b>Create a Distraction-Free Environment: -</b>  Procrastination often arises from distractions, so creating a distraction-free environment is essential. Find a quiet place to study where you won't be interrupted. Turn off your phone, social media notifications, and any other distractions that may derail your focus. You can also use tools such as website blockers or productivity apps to stay on track.",
          paragraph4: "&rArr; <b>Break Tasks into Smaller Steps: -</b>  Breaking tasks into smaller steps can make them less overwhelming and easier to manage. This also helps you focus on the task at hand and avoid distractions. Start by listing the steps required to complete a task, and then tackle them one by one. Celebrate each small victory along the way to stay motivated.",
          paragraph5: "&rArr; <b>Use the Pomodoro Technique: -</b>  The Pomodoro Technique is a time-management technique that can help you beat procrastination. It involves breaking your work into 25-minute intervals, followed by a 5-minute break. After four intervals, take a longer break. This technique can help you stay focused and productive, while also giving your brain regular breaks.",
          paragraph6: "&rArr; <b>Prioritize Self-Care: -</b>  Procrastination can also be a symptom of burnout or fatigue. Prioritizing self-care can help you avoid these pitfalls and increase your productivity. Make sure to get enough sleep, exercise regularly, and take time for yourself. This can help you recharge your batteries and approach your studies with renewed focus.",
          paragraph7: "&rArr; In conclusion, beating procrastination requires a combination of strategies that work for you. By setting specific goals and deadlines, creating a distraction-free environment, breaking tasks into smaller steps, using the Pomodoro Technique, and prioritizing self-care, you can overcome procrastination and increase your productivity. Remember, the key is to be consistent and stay motivated. With time and practice, you can develop habits that will help you achieve your academic goals.",
          slug: "mastering-the-art-of-time-management-how-to-beat-procrastination-and-stay-on-task"
          
        },
        {
          id: 10,
          image: "/images/blog/blog_images/blog-10.jpg",
          name: '',
          bio: '',
          date: 'March 15, 2023',
          title: 'One-on-One in the Online World: How Personalized Attention from Tutors Can Benefit Remote Learners',
          views: '236 views',
          paragraph1: "&rArr; In the world of remote learning, students face many challenges that can impede their ability to learn effectively. One such challenge is the lack of personalized attention that students may receive in traditional classroom settings. However, with the advent of online tutoring, students now have the opportunity to receive personalized attention from their tutors, even in remote learning environments. In this blog post, we will discuss how online tutors can provide personalized attention to students in remote learning.",
          paragraph2: "&rArr; Firstly, online tutoring allows for one-on-one interaction between students and their tutors. This means that the tutor can focus solely on the student's individual needs, strengths, and weaknesses, creating a customized learning experience that caters to the student's unique learning style. Online tutoring sessions are also typically longer than traditional classroom sessions, which provides tutors with more time to get to know their students and understand their needs.",
          paragraph3: "&rArr; Secondly, online tutoring platforms often provide tools and resources that enable tutors to track their students' progress and provide feedback in real-time. For instance, tutors can use online whiteboards, screen sharing tools, and chat functions to provide instant feedback to their students during tutoring sessions. This allows for a more interactive and engaging learning experience that is tailored to the student's needs.",
          paragraph4: "&rArr; Thirdly, online tutoring also provides students with the flexibility to schedule tutoring sessions at their convenience. This is particularly beneficial for students with busy schedules or those who live in remote areas, as they can access tutoring sessions from anywhere in the world. Online tutoring platforms also offer a wide range of subject-specific tutors, which means that students can receive personalized attention in virtually any subject they are studying.",
          paragraph5: "&rArr; Online tutoring provides students with the opportunity to receive personalized attention from expert tutors, even in remote learning environments. With one-on-one interaction, customized learning experiences, real-time feedback, and flexible scheduling options, online tutoring is an effective way for students to overcome the challenges of remote learning and achieve academic success.",
          slug: "one-on-one-in-the-online-world-how-personalized-attention-from-tutors-can-benefit-remote-learners"
          
        },
        {
          id: 11,
          image: "/images/blog/blog_images/blog-11.jpg",
          name: '',
          bio: '',
          date: 'March 22, 2023',
          title: 'Beyond Tutoring: How Educare Mentors Provide Holistic Support to Students',
          views: '159 views',
          paragraph1: "&rArr; The traditional approach to education has often focused solely on teaching, with little attention paid to the emotional and practical needs of students. However, with the advent of Educare Mentors, there is now an opportunity for students to receive personalized mentorship and support that goes beyond the classroom. In this blog post, we will explore the concept of Educare Mentors and how they can help students achieve their academic and personal goals.",
          paragraph2: "&rArr; At its core, Educare Mentorship is about providing students with holistic support that goes beyond traditional academic tutoring. Educare mentors are assigned to students to help them navigate their academic and personal lives. While traditional tutors focus on teaching specific subjects, educare mentors are tasked with providing students with support, guidance, and mentorship to help them succeed both inside and outside of the classroom.",
          paragraph3: "&rArr; The role of an Educare Mentor is multifaceted. Firstly, they are responsible for micromanaging the day-to-day schedules of their students, ensuring that they have the necessary structure and routine to succeed in their studies. Secondly, they provide personalized mentorship, helping students set and achieve academic and personal goals, and providing them with the tools and resources they need to succeed. Thirdly, they act as a bridge between students and their teachers, providing feedback and guidance to help students excel in their studies.",
          paragraph4: "&rArr; Perhaps most importantly, educare mentors are there to help students with both academic and non-academic problems. Whether a student is struggling with anxiety, stress, or other mental health issues, or they simply need someone to talk to, Educare Mentors are there to listen, support, and help them find the resources they need to succeed.",
          paragraph5: "&rArr; Educare Mentors are an invaluable resource for students seeking holistic support and mentorship. By providing personalized mentorship, micromanaging day-to-day schedules, and helping students overcome academic and non-academic challenges, Educare Mentors can help students achieve their full potential both inside and outside of the classroom. While teaching is an important aspect of education, it is the additional support and mentorship provided by Educare Mentors that can truly make the difference in a student's success.",
          slug: "beyond-tutoring-how-educare-mentors-provide-holistic-support-to-students"
          
        },
        {
          id: 12,
          image: "/images/blog/blog_images/blog-12.jpg",
          name: '',
          bio: '',
          date: 'March 29, 2023',
          title: 'Beyond the Classroom: How Remote Learning is Revolutionizing Educations',
          views: '227 views',
          paragraph1: "&rArr; The emergence of remote learning and online one-to-one tutoring has revolutionized the way we approach education. While traditional forms of teaching and tutoring have been effective, remote learning and online one-to-one tutoring offer numerous advantages that are hard to ignore. In this blog post, we will explore some of the key advantages of remote learning and online one-to-one tutoring.",
          paragraph2: "&rArr; One of the main advantages of remote learning and online one-to-one tutoring is the flexibility it offers. With remote learning, classes can be as small as 10 minutes, making it easy to schedule short sessions for doubt solving or other purposes. This flexibility allows students to learn at their own pace and in their own time, making it easier for them to balance their studies with other commitments.",
          paragraph3: "&rArr; Another advantage of remote learning and online one-to-one tutoring is the convenience it offers. With online classes, there is no need to travel to a physical location, saving both time and money. This can be especially beneficial for students who live in remote or rural areas, where access to quality education can be limited. Online classes can also be recorded and saved for future reference, allowing students to review material at their own pace.",
          paragraph4: "&rArr; In addition to flexibility and convenience, remote learning and online one-to-one tutoring also offer a personalized learning experience. With one-to-one tutoring, students receive individual attention and support, allowing them to focus on their specific needs and goals. This personalized approach can help students overcome their weaknesses and build on their strengths, ultimately leading to better academic performance.",
          paragraph5: "&rArr; Finally, remote learning and online one-to-one tutoring can also be more cost-effective than traditional forms of teaching and tutoring. With no need for physical classrooms or travel expenses, online classes can be more affordable for both students and tutors. This can be especially beneficial for students who come from low-income families or those who are struggling to afford traditional forms of education.",
          paragraph6: "&rArr; Remote learning and online one-to-one tutoring offer numerous advantages that can help students succeed academically. From flexibility and convenience to personalized attention and cost-effectiveness, these forms of education are well-suited to the needs of modern students. While traditional forms of teaching and tutoring will always have their place, it is clear that remote learning and online one-to-one tutoring offer numerous benefits that cannot be ignored.",
          slug: "beyond-the-classroom-how-remote-learning-is-revolutionizing-educations"
          
        },
        {
          id: 13,
          image: "/images/blog/blog_images/blog-13.png",
          bio: '',
          date: 'June 8, 2020',
          title: 'Categorization of the Learning Needs of our Children',
          views: '265 views',
          paragraph1: "&rArr; In order for us – parents, teachers and students to better understand learning requirements, we have classified the types of students into the following categories 4 by drawing a 2 x 2 matrix.",
          paragraph2: "&rArr; Each category is assigned a quadrant.",
          paragraph3: "&rArr; This is important because each type of student requires different action plans for fulfilling their learning requirements, and based upon what quadrant a student falls in there are different recommendations we need to implement.",
          paragraph4: "&rArr; The X axis is the studies axis,which goes from the studies seeming to be difficult on the left hand side to the studies being easy on the right hand side. The Y axis represents the sincerity and dedication of the student, marked higher on the upward side and lower on the downward side.",
          paragraph5: "&rArr; This division naturally leads to the arisal of four quadrants, and hence four type of learning requirements, which we will elaborate with our hypothetical students Alice, Bob, Cathy and Dylan. Actually, the learning requirements fall along a continuum, however, this classification into four categories suffices for our needs of understanding and catering to the learning needs of students.",
          paragraph6: "&rArr; Let us look at Alice. She is relatively sincere. She has the ability to study long hours. She feels guilty, sad and depressed if she loses any marks. Moreover, she is performing relatively well in studies, usually throughout their academic history.",
          paragraph7: "&rArr; Such students usually have difficulties in the most challenging questions. Their main objective is to go from a relatively high score to a very high score in any given exam or an entrance exam. So, special and highly expert professors are required to cater to such students and we need to push their marks upwards via solving specific deliberate advanced level doubts in depth and detail. Difficult questions and their practice are the key here. When a doubt arises, it has to be solved swiftly and elaborately in depth and detail, explaining to the students about their particular shortcoming of understanding and enhancing their concepts with supplementary shortcuts and tricks to solve difficult questions faster.",
          paragraph8: "&rArr; Expert, smart professors are needed for these students because of the high caliber of academic expectations, and for the students to truly respect the professor and derive academic value from their expertise and experience.",
          paragraph9: "&rArr; In the next quadrant we find Bob, who is sincere and hardworking but still finds studies difficult and challenging. It is important to have a system of solving difficulties and doubts of our students who are facing this challenge. Motivating them via tips, tricks & guidance as to how to gain more marks is found to be relevant and effective. The sincerity and patience of the professor are the primary qualities that are relevant. We need to formulate a learning staircase for the students by advancing the level of questions beyond what the student is currently comfortable in doing, and help them review and revise whatever they may have forgotten. Pushing the boundaries of their comfort zone is going to help us achieve the best academic result for our students.They may find scoring challenging initially, we need to keep motivating them with kindness and empathy and help them overcome any obstacle and perform to their fullest potential in all exams. With apt patience, persistent guidance and support and multiple layers of revision, problem practice and mistakes analysis, these students will also perform to their best possible potential and do well in academics and life.",
          paragraph10: "&rArr; Next, we look at the students for whom the studies are easy, but they are not that self-motivated to work hard. In such cases, day to day and moment to moment  monitoring is required of the students, especially for the checking of the daily homework. These students have to be habituated into studying via day to day micro incentives and counseling. For example, we may give them a pizza they provided they put in a certain minimum amount of work. We recommend that the parents also conduct day to day vivas and oral and written quizzes to check the retention and memorization of the students and communicate the results with the professors for the same. As we are the parents, Teachers & Counselors, we need to monitor how much the student is remembering and forgetting. Basically, we need to take the onus of the responsibility for the student and their day to day academic activities. This will help us in understanding where the student is exactly lacking and thus enable us to guide the student aptly.",
          paragraph11: "&rArr; Lastly but not the least, let us look at Dylan and his friends. For them, the studies are difficult as well as the sincerity element is lacking. We recommend that the field of study or the choice of subjects that currently the student has undergone or undertaken is not suitable and appropriate for them, and it's best that they study something else that they are more interested in.",
          paragraph12: "&rArr; Whatever is chosen currently is not is not resonating with the student, that’s why the student is being non sincere and the studies are also hard for the student. However, if we still want to help these students out given that they have decided to stick to the current academic path, we have to treat their learning requirements to be a combination of Bob and Cathy’s, and inculcate features from both.",
          paragraph13: "&rArr; As a bonus for all long term students of our institute, we would mention one important realization. For real academic progress to happen, the studies should become easy for the students and the sincerity towards the studies should improve with time, so the movement of the student is towards the north east direction, in our diagram.",
          paragraph14: "&rArr; All in all, we wish us the best for all the academic endeavors for our children. May they rise and shine in this world, and surpass their peak academic potential and with your love and support and our expertise and academic guidance, this should not be too difficult to achieve.",
          slug: "categorization-of-the-learning-needs-of-our-children"
        },
        {
          id: 14,
          image: "/images/blog/blog_images/blog-14.png",
          bio: '',
          date: 'May 3, 2020',
          title: 'Fast Completion of Syllabus for Competitive Entrance Exams',
          views: '275 views',
          paragraph1: "&rArr; By failing to prepare, we are preparing to fail. Adept planning and preparation is a pivotal step in being successful. Competitive exams, are getting increasingly cut-throat day-by-day and there is a pressing need for even exact and impactful preparation, which is smart, efficient and thorough.",
          paragraph2: "&rArr; ‘Early completion of the syllabi’ is an often overlooked and ignored aspect of the preparation strategy of most parents as well as the students. Let us understand why this is most important and impactful as far as the final results are concerned and emphasize on making this an integral part of one’s preparation strategy.",
          paragraph3: "<hr class='border border-dark'>",
          paragraph4: "&rArr; Let’s say a boy is learning to ride a bicycle.",
          paragraph5: "&rArr; The following would constitute as theory of how to ride a bicycle:",
          paragraph6: "&rArr; Introduction to different parts of the bicycle like brake, handle, bell etcetera; <br> Position and orientation required to sit on a bicycle, <br> How to ring the bell and so on",
          paragraph7: "&rArr; By acquiring this knowledge, will one be able to ride a bicycle? <br> The answer is “NO”, most likely not, because one has not practically experienced being on a bicycle and riding it. <br> One has not mastered the tact of balancing needed to ride a bicycle without toppling. <br> If we try riding a bicycle by mastering the theory alone, we will likely fall out of balance. <br> Hence, there is a need to put to practice what we have learnt on a theoretical plane alone. <br> When we continually try riding a bicycle to gain balance, the cerebellum coordinates the motor movement and registers it in our cognition and muscle memory.",
          paragraph8: "&rArr; However, practice does not guarantee your protection from falls, in contrast- falls( that are short term failures) help us to get familiar and desensitized to the process of riding a bicycle. <br> We persevere, inspired by a dream one mastering this skill, and practice diligently,  repetitively, vigorously and hence become an expert. <br> When we keep at it, we learn to eventually ride the bicycle. Voila!",
          paragraph9: "&rArr; Likewise, the process of competency is developed in a similar manner to attain the expertise required while appearing for competitive exams. <br> We cannot overemphasize the role of systematic planning and preparation in doing well in the competitive entrance exams.",
          paragraph10: "&rArr; To illustrate, let us create and discuss a thought experiment, wherein we have a competitive entrance exam on the 101th day, starting today. Thus we have 100 days to prepare for it.",
          paragraph11: "&rArr; And you cover the syllabus and learn the nitty-gritty of the syllabus for the first nine days and you devote the tenth day for revision.",
          paragraph12: "&rArr; Let us see whether the above preparation routine will make you an expert in the subject?",
          paragraph13: "&rArr; It is unlikely to work as far as the development of expertise is concerned.",
          paragraph14: "&rArr; Expertise is developed when you are able to complete the syllabus as early as possible and devote the major chunk of the time in continuous cycles of revision and doubt clarification.",
          paragraph15: "&rArr; The brain neurons that are going to make you an expert are going to fire, rewire again and again with repetitive cycles of practice and revision and hence make you an expert and this needs lot of time, dedication and efficiency.",
          paragraph16: "&rArr; And for this, a quick completion of the syllabus will guarantee more amount of time for revision and practicing. So to develop expertise and gain success in competitive exams, following a four- stage process will be helpful- <br> <b>Stage 1-</b> Completion of the syllabus as soon as possible <br> <b>Stage 2-</b> Revision and doubt clarification <br> <b>Stage 3-</b> Revision, formula memorization and conceptual clarity <br> <b>Stage 4 –</b> test practice (previous year question paper)",
          paragraph17: "&rArr; The reason for stressing the need for completion of the syllabus is clear because, it forms stage 1. If we plan on consuming 90% of our time on covering syllabus which is just the first stage, the rest of the stages would not be completed and this leads to wastage of one’s potential in achieving success.",
          paragraph18: "&rArr; Let us take a brief tour through all the stages of preparation in order to gain expertise.",
          paragraph19: "<b>❖   Stage 1 – Completion of the syllabus as soon as possible</b> <br> ❖ Most of the students continuously resort to a slow coverage of syllabus thinking that they would be able to get a thorough and better understanding of the concepts with time. This eats up their time and they are left with no time to revise, practice and of course relax. <br> ❖ How fast should the syllabus be completed? <br> It should be completed as fast as humanly possible. If it is possible to complete the entire syllabus in one month, it should be done. If you can could do it in one second, great! So, basically, our goal should be to complete the portion and get on with the next stage. Basically, the practical time limit for the completion of the syllabus is three to four months. So, the next question is- How can we complete the syllabus in 3 to 4 months? <br> ❖ Self-study along with help from online video lectures, or hiring a private tutor who can complete the whole portion in about three to four months are some ways of implementing stage 1, that is ‘completion of the syllabus as soon as possible.’ Parents should make sure before the start of the private classes whether the tutor would be able to cover the syllabus in three to four months with utmost dedication and efficiency. The primary mistake most people make is that, out of the 20 months given for preparation, approximately 16 to 18 months are been spend in completion of the syllabus. Ideally, about 75% to 80% of the preparation time should be solely devoted to revision, doubt clarification and test practice, stages which come after the completion of the syllabus. <br> ❖ Not just learning, teaching of the syllabus also requires certain amount of logic which will yield better output. Especially in a batch-mode, a particular batch preferably should have less than five students who match certain level of intellectual homogeneity. If the batch is too large or if the homogeneity is not maintained, the pace of teaching and learning will be that of the slowest child. And doubt clarification, understanding level, grasping capacity and so on varies from students to students. Hence, the batch-mode teaching and learning will be efficient with lesser number of students per batch and each batch should maintain an intellectual homogeneity. <br> ❖ In the batch-mode as discussed above, the entire portion of Class 11th and 12th Physics can be easily completed in 80 to 100 hours. So teaching for 2 hours daily will mean, 40 days to complete the entire Physics portion for IIT JEE or NEET. However, we can pace down this structure by devoting 1 hour per day for physics along with other subjects, which means about 80 to 100 days, that is 3 to 4 months. In 3 to 4 months, we can practically finish the whole portion as said earlier. <br> ❖ Moulding the course as per the comfort level of the students is hence very important for a speedy and efficient completion of the syllabus. Only after the completion of the syllabus can, the tutors or experts guide the students through their doubts and mistakes, which is a very huge task, considering the multiple levels and kinds of doubts students have. This leads us to Stage 2- Doubt clarification and Revision.",
          paragraph20: "<b>❖   Stage 2 – Doubt clarification and Revision</b> <br> ❖ Once the complete syllabus is covered as soon as possible, the next step is doubt clarification and revision. This stage also includes mistake rectification while solving questions. <br> ❖   Mistakes can be- (a) conceptual mistakes (b) execution-based <br><br> (a)  Conceptual mistakes include mistakes which happen due to a lack of clarity of certain concepts and theories. It requires a thorough understanding of the concepts because, understanding concepts is required to solve application- based questions. Concepts and formulas should be in the tip of our fingers. <br> (b)   Execution-based mistakes include mistakes which occur due to lack of practice and lack of time management. The lack of practice slows down the speed of solving the question paper, which in turn leads to loss of time and leaving out of questions. Practice and memorising formulas thoroughly is a great way of overcoming this type of mistakes. <br><br> At times students due to exam anxiety and stress tend to make silly and careless mistakes. They lose focus, get nervous and commit mistakes while solving questions even when they know the answers to those questions. A good diet, some amount of motivation and encouragement, good personal care routine, good sleep cycle routine and ample exercise regularly during preparation will improve concentration and eliminate stress and anxiety. Hence, a holistic or overall improvement and wellbeing of the mind and body will improve confidence. Additionally, the rectification of mistakes by experts during the practice hours helps the students register their faults, and also help them avoid repeating such mistakes again. This leads us to Stage 3- Revision, formula memorization and conceptual clarity.",
          paragraph21: "<b>❖   Stage 3 – Revision, formula memorization and conceptual clarity</b> <br> ❖ Doubt Clarification and revision to some extent is a hand-in -hand process. Revising the concepts and portions already covered on a regular basis helps the brain register the data in our long-term memory. <br> ❖ Conceptual clarity of the student can be assessed by asking him/her to explain the same concepts to his/her peer group, friends and family. When a student is able to reproduce and express a concept confidently to others, it shows his level of conceptual understanding and confidence. <br> ❖ Hence stage 3 is very crucial in assessing where exactly a student stands with respect to his preparation. Additionally, stage 4, that is Test practice, will completely prepare a student to face the competitive exams and crack them.",
          paragraph22: "<b>❖   Stage 4 – Test Practice</b> <br> ❖ Let’s take an example of how to make a pizza. The recipe book gives you a clear understanding of making a pizza, its procedures, total time taken, ingredients needed and so on. However can we become an expert in making pizzas by just understanding the recipe in 5 or 10 minutes? It is practice which helps us become better and better over time. To gauge the perfect consistency of the dough, the exact temperature-setting of the oven and the exact amount of spice needed, all need practice. And practice always needs time. Hence, it is pertinent to stress, the importance of syllabus completion as quickly as possible in order to start practicing concepts which have been learned. <br> ❖ Hence, this stage is extremely detrimental as far as your success goes in the entrance exams. A thorough test practice of the full syllabus along with time limit is very important. Test practices prepare the students completely to face the entrance exam because it tries to create a entrance exam-type environment with full syllabus test paper and three hours time limit. This also exposes the students to a examination hall setting and relieves their stress. <br> ❖ Giving 18 months of preparation time out of the 20 months for portion completion, deducts the time needed for practice, the most important stage in the preparation of competitive exams like IIT-JEE and NEET. Because practice will bring out the most in you and you will be able to give your best potential self. <br> ❖ Generally students solve less than 20 full syllabus test papers. A minimum of at least 150 to 200 test papers should be solved by both IIT-JEE aspirants and NEET aspirants. If a student aspires to crack IIT-JEE advanced, a minimum of about 150 question papers should be solved. Because it will give you an understanding of the exam pattern as well as help you in revisiting concepts and theories. All this clearly shows the amount of time needed for practicing of full syllabus Test Papers and the need to relegate a major chunk of the preparation time, around 70% for this. However, some students might face challenges in attempting full syllabus practice papers immediately after syllabus completion and revision. In cases like this, a chapter-wise or unit-wise test series would be helpful which will prepare the student to solve full syllabus test practice after a period of time. Hence, the pattern of solving test papers can be decided by tutors, parents or even students according to their comfort level and time constraints. Because, choosing a suitable pattern of preparation for a student will surely bring the best in him/her.",
          paragraph23: "<b>&rArr;   Conclusion</b> <br> The above four steps which includes- Stage1- Completion of the syllabus; Stage2- Revision and Doubt Clarification; Stage 3- Revision, formula memorization and conceptual clarity; Stage 4- Test Practice, will help each and every student to develop expertise. Hence to be an expert, a strict adherence to the above four stages is important. Focusing only on syllabus completion will not help us gain expertise and success. Revision, doubt clarification, higher level problem practice, test practice are the constituent steps which will help you become an expert and pass out with flying colours. Remember, completion of the full syllabus is just the first step to an ascending ladder. Let me reverse the opening quote, it goes like this- ‘By succeeding to prepare, you are preparing to succeed’.",
          slug: "fast-completion-of-syllabus-for-competitive-entrance-exams"
        },
        {
          id: 15,
          image: "/images/blog/blog_images/blog-15.png",
          bio: '',
          date: 'April 11, 2020',
          title: 'Layered Attempting',
          views: '295 views',
          paragraph1: "&rArr; We understand that giving your best will always be the prime aim in your life. We have always looked forward in enhancing student’s learning more smartly. We all know that hard work is the key to success but do we understand that smart work also pays off equally. Preparing your subjects is no doubt very wise but creating a strategy in your mind proves to be more fruitful. We have often come across students who give their best while preparing and learning, but when it comes to performing in the exam they are not able to coordinate with the estimated time given. so see, here we realized that our students not only need proper guidance on learning but also needs to brush their performance skill on the exam day. After solving previous year’s question paper and mock tests we asked for feedback, from aspirants who are preparing for NEET or JEE. To overcome challenges like these we have introduced an interesting method of attempting question paper while solving it efficiently.",
          paragraph2: "&rArr; “Strategy without tactics is the slowest route to victory.” said by someone great.",
          paragraph3: "&rArr; This tactic is usually known as layered attempting. Finally after so much research and experience here we are. So now let’s take a sneak peek at how to conquer this strategy.",
          paragraph4: "&rArr; We all are aware that we always tend to put better effort where we feel more comfortable. Nothing compares to the peace you find at your home, does it? So why not to apply the same for your exam. We recommend that the student must attempt the subject which is most familiar to them at the very beginning. Now digging deeper in this, let us explain to you how it should be done. If a student’s most comfortable subject is let’s say chemistry, so they should start by solving questions under the chemistry section. Students must aim to solve all the 30 questions under this section and should only neglect those who are time taking and problematic enough to be tried later on. Marking of the answers on the OMR sheet or computer screen should be done simultaneously as to avoid any carelessness.",
          paragraph5: "&rArr; After completing one section student should move to their second-best subject, for example, physics. Now, how to proceed? Making it easier for you we advise attempting only 10-12 questions from 30 questions. Now you must be wondering which questions to attempt from these? The answer to this is simple, students just need to take a glimpse of questions and analyze the topics which they have prepared thoroughly and are confident enough to answer. Once you figure out this, just mark the question which seems less time consuming than others and you’re good to precede ahead.",
          paragraph6: "&rArr; Moving on to our last section i.e. math, the same procedure as physics should be followed. We suggest that in this the student should act according to their confidence level. If the student is highly confident they should attempt 12-15 questions from 30 questions but if the student is moderately confident they should attempt 10-12 question only, based on their question analysis.",
          paragraph7: "&rArr; Now after successfully attempting all the three-section, a student must return to physics and attempt 6 questions from remaining 18 questions. In case if the student is only confident about 3 questions then it should be fine. Remember attempting 6 questions is maximum you can always attempt less than that but not more in this round. Repeat the same process with mathematics section i.e. attempting maximum 6 questions in the round and then returning to physics. This technique of layered answering should be continued until all the questions from both sections are attempted. It’s highly believed that this strategy of systematic answering gives our students the best result.",
          paragraph8: "&rArr; If the time is remaining, student may repeat this process starting from physics and moving on to mathematics. But this time the student should go solving one question each from each subject in order to recheck their evaluations.",
          paragraph9: "&rArr; By adopting this strategy it helps in attempting 33.3% to 40% of the question from the subject in which you were not highly confident but yet you will be able to achieve your best shot at it.",
          paragraph10: "&rArr; That’s all for today. Thank you for watching. For more updates about various techniques and methods stay tuned!",
          slug: "layered-attempting"
        },
        {
          id: 16,
          image: "/images/blog/blog_images/blog-16.png",
          bio: '',
          date: 'March 9, 2020',
          title: 'Optimal Student Welfare Activity',
          views: '195 views',
          paragraph1: "&rArr; Results are like precious plants. You cant just sow the seed and leave it and think its going to grow by itself and flower. You have to keep on watering it. You have to look after it and nurture it. For good results just teaching is not enough, there is much more after it. Students perform up to their potential only when they are taken care of through all dimensions 360 degree. We believe just teaching to a class of 100 students in the same way does not yield optimal result. Every student has unique capabilities and requirements. Every one of them are at a different starting point after class 10 and this needs to be taken into consideration. We understand this and thus play a lot of emphasis on student welfare and monitoring.",
          paragraph2: "&rArr; Optimal student welfare activities yields far more better result than the traditional method of just coaching.",
          paragraph3: "&rArr; Now let us understand, how this welfare activity is done and its impact",
          paragraph4: "<b>❖   TASK 1</b> <br> &rarr; So the foremost task is preparing an academic plan. This plan is prepared by experts who have mentored 100s of students and have an experience of teaching for decades. The plan is very carefully and meticulously prepared by taking into account students’ ability, learning requirement, preparation level etc. Both students and parents are continuously consulted and with the expertise of our academic planner we make the academic plan.",
          paragraph5: "<b>❖   TASK 2</b> <br> &rarr; Along with teaching or studying, retention is very important as this decides the students marks and rank. So after academic plan the next most important step is monitoring. It will be done by our monitoring department or can be done by parents themselves. Monitoring consists of homework checking and retention checking. Retention checking is done by vivas which are of two types factual viva and analytical viva. Factual viva is mainly for non conceptual subjects and includes asking of formulas, terminologies etc by direct phone calls. For conceptual and technical subjects like physics analytical viva is taken. In this the student has to solve few concepts or problems on pen and paper or whiteboard live through video conferencing. These two vivas can be taken by parents also and clippings can be submitted to the monitoring team. If done by us we will charge nominally.",
          paragraph6: "<b>❖   TASK 3</b> <br> &rarr; The monitoring team will submit a report and feedback of the student at regular intervals to academic planning team before the next monitoring session. Our planning team will check thoroughly the compliance of academic plan and decide further steps. If we find the progress inadequate as per the plan we will have a discussion with the student and teacher regarding what is holding them back. If and when required we will take parents on board as well. The mistakes are usually committed unknowingly  by students and our aim is to find out and fix them through our prior knowledge, counselling, motivation and support.. Some common mistakes which students do in our experience are studying only those subjects which they like, procrastination, not remembering formulas, not taking tests frequently, solving test but not analysing, even if analysing then not taking the corrective steps etc. Along with the student, teacher and parent the mistakes will be rectified. After the discussions and feedback if required our planning team will decide whether the same plan is to be continued or it needs few changes.",
          paragraph7: "<b>❖   TASK 4</b> <br> &rarr; Apart from the frequent monitoring we will also try to find out thematic shortcomings if any with the student. It includes problems like multimedia addiction, insufficient doubt resolution, increasing socialization, lack of motivation etc. Our academic counsellors will try their best to solve these issues.",
          paragraph8: "<b>❖   TASK 5</b> <br> &rarr; Our monitoring team and planning team will be constantly in touch. As per the feedback of monitoring team the academic plan for students will be changed if required. It will be an iterative process to ensure the students perform up to their potential. <br> &rarr; Parents do not have time to monitor their children so closely but we can. We believe planning  and retention along with hard work is very important for best results. <br> &rarr; We at are committed  to course correct and guide the students for best result through our optimal student welfare activity.",
          slug: "optimal-student-welfare-activity"
        },
        {
          id: 17,
          image: "/images/blog/blog_images/blog-17.png",
          bio: '',
          date: 'February 14, 2020',
          title: 'The Educational Needs of our Children',
          views: '169 views',
          paragraph1: "&rArr; This for the parents and guardians. The mothers and the fathers who work the hardest to make sure their children get the best of care, nurture and opportunities.The parents who want their children to succeed in this world. The world that is often harsh, seldom full of challenges.",
          paragraph2: "&rArr; This is for we, the mothers who often worry about the future of their child. The academic future, the monetary future, the professional future. This is for tus fathers who toil hard and take on the world to provide the best care and support for our children and our family.Whenever an examination approaches, we feel the anxiety of whether our child would perform the best.",
          paragraph3: "&rArr; At the very least we wish to know and feel assured that they have performed to their own fullest potential.",
          paragraph4: "&rArr; If there is any slackening or decrease of marks, we become anxious. Our mind ponders over the future and worries about how we will be able to achieve the desired academic outcome for our child and build a stable foundation for a bright future. We become worried further when our child seems demotivated by the day to day woes and drudgeries of studies.",
          paragraph5: "&rArr; We all internally realize that it’s our duty to provide the best academic service for our beloved child. We inherently know that we have to do our best as parents and professors and counsellors. We have to formulate and execute a strategy and a plan that would give our child the best possible chance of success in the upcoming examinations.",
          paragraph6: "&rArr; But amidst the confusion and chaos, we sometimes don’t know what to do. We seek for the correct information and often get bombarded with tonnes of information. In this era, when information is readily available at our fingertips, we may feel perplexed between seemingly contradictory action plans. We wonder what is the best and the most suitable for our child, in their present state of preparedness. We get anxious to find the best way to increase their interest towards gaining knowledge as well as to increase marks.We try to figure out the best exam preparation strategy. What can we do to perform the best from now till exam time.",
          paragraph7: "&rArr; From us parents and teachers to have mental clarity about what needs to get done in order to ensure exact academic service is given to our children, we have compiled a comprehensive list of endeavors to accomplish on the journey of academic success.",
          paragraph8: "<b>Number 1. Understanding and learning of the Syllabus with the aim of fast completion of syllabus</b> <br> &rarr; It is very important to teach in such a manner that the student finds the subject interesting and engaging and to complete the syllabus in a fast and efficient manner. Teachers who share this philosophy and understand its importance are rare and mature and in the teaching profession we need to make such teachers available for the students. A quick completion of the syllabus ensures ample time for available further revisions, and enhancement of academic skill sets.",
          paragraph9: "<b>Number 2. Acclimatization of the syllabus via Studies, Homework and Revision Cycles</b> <br> &rarr; We have to ensure that the studies, homework and revision that the student is engaging in is timely and happens regularly. According to research it has been shown that memory retention and recall is the maximum when we have repeatedly poured in information and analysis into our brains and indulged in multiple cycles of revision. Having completed the syllabus faster would also help our children in revising often. During revision, it’s most helpful to spend more time with that one has forgotten more or remembers less for maximizing overall efficiency.",
          paragraph10: "<b>Number 3. Doubt Clarification</b> <br> &rarr; Clarification of doubts and difficulties in an apt and timely manner is crucial in the overall effectiveness of studies. Clarification of doubts leads to the exhilarated feeling of satisfaction and happiness of having learnt and understood something new. We must ensure that our child has an adept doubt Clarification mechanism available to them at all times.",
          paragraph11: "<b>Number 4. Testing and improving upon Memorization and Recall</b> <br> &rarr; We have done well to teach in teaching our child. Now it is time to check how much they remember and to ensure that they can reproduce the knowledge that we have painstakingly embedded into their minds and brains. For checking memorization and recall, we at Photon Ecademy suggest implementing techniques such as conducting day to-day vivas of facts, and oral quizzes of multiple choice questions and asking the student to explain the concept that they have learnt in their own methodology in as lucid a manner as they can. Being put into a situation of having to teach the subject, the student’s brain is forced to understand every detail of the academic knowledge well, which in turn propels the studies further.",
          paragraph12: "<b>Number 5. Mistakes Analysis and feedback based rectification in Assignments and Tests</b> <br> &rarr; Tests serve as a crucial feedback mechanism for us to be able to understand where the student is exactly lacking and what type of mistakes are being committed by them. We should analyze each and every mistake of the student during assignment practice as well as test practice and classify the mistakes as conceptual, execution based or silly. Conceptual mistakes need to be rectified by understanding, revising and recalling the concept better. <br> &rarr; Execution based mistakes may require more practice, increase in speed and mathematical aptitude, better memorization and effective recall of formula and concepts. <br> &rarr; Silly mistakes imply the student needs to be more in the present moment and to be calm and confident, and as close to a Zen state of mind as they can be.. A good diet, regular sleep cycles and a healthy lifestyle that includes regular exercise, and meditation are also paramount for the student to be calm in the present moment. Mental stability, focus and self-confidence, clarity and calmness will help in avoiding silly mistakes.",
          paragraph13: "<b>Number 6. A lot of Full Syllabus Test Practice</b> <br> &rarr; Full syllabus Test practice helps the student in identifying the weak areas and analyzing the types of shortcomings that they have. We have overcome these shortcomings with apt rectification and improvement measures. <br> &rarr; Moreover full syllabus tests are much more effective than chapter wise tests or part syllabus tests or section wise tests because in the final exam the student is supposed to know the entire syllabus and not only some small part of it. <br> &rarr; For instance, if someone is learning to drive a car, they should know to operate the steering, clutch and the brakes in a coordinated manner. There’s no point if he only knows to operate one of these mechanisms. The same applies for competitive exams too. The student has to be able to understand little nuances like the order of answering, managing time effectively, recalling mnemonics and facts, staying calm and most importantly avoiding anxiety during the exam. It is a handful of skills to be learnt and executed in the examination room. The more practice we give our students for these, the better it’s going to be.",
          paragraph14: "<b>Number 7 [is a Bonus for passionate learners, Educators and well wishers in Paathshala and Photon family]. Food, meditation, exercise, yoga for mental and physical health and neuroplasticity and creativity. </b> <br> &rarr; Research has shown that a stable body is a host to a stable mind and the stability will lead to the mind being more in the present moment, being calm, clear and confident and focused, enabling the student to perform to their best possible potential and push the boundaries of their reality. We recommend indulging in soul fulfilling activities like playing outdoor sports with friends, reading good books, exercise and yoga, meditation, eating healthy food, taking care of sleep cycles, taking care of overall mental and physiological health and well-being in order to perform the best in any competitive entrance exams. <br> &rarr; We hope that this video has helped students, parents, well-wishers and educators to understand what needs to get done in order to accomplish our academic goals. <br> &rarr; Stay tuned for more from our Photon Ecademy Academic Department, and until next time – Happy Studying.",

          slug: "the-educational-needs-of-our-children"
        },
        {
          id: 18,
          image: "/images/blog/blog-images-grid/blog-18.png",
          bio: '',
          date: 'February 8, 2020',
          title: 'Paathshala x Photon Ecademy: Foundation Course – Prayaag',
          views: '300 views',
          paragraph1: "<b>Prayaag | Foundation Course for IIT and Medical</b> <br> &rarr; Considering the competitive scenario and the dynamics of the same, it is very important for a student to stay ahead of the game and have an edge over the others, in order to secure and pursue stellar careers. It’s just not about knowledge anymore. It’s about the depth of your thought horizons are, analytical thinking capability, your imagination ability, agility of mind and great memory. If you don’t have your hand at these avenues, not only do you miss the opportunity to train and sharpen your brain but also you will have to fight hard to survive the highly competitive space. <br> &rarr; With the globalization happening at a swift rate, its not just about your country or region anymore. So, here we are, with our initiative PRAYAAG Logic | Memory | Mind to train your brain to become capable of solving high level analytical and logical problems, improve and broaden your imagination expanse.",
          paragraph2: "<b>Message to Parents</b> <br> &rarr; Food for thought: What logic does make in teaching XI and XII syllabus in VI, VII, VIII, IX and X standards in the name of IIT and Medical Foundation? <br> &rarr; Such a process will lead to a very little improvement in the brain power and besides develops an additional stress. <br> &rarr; In the adolescent age, the children are to be taught to think smart, logically and how to have a wide imagination. That is what lays the Mind Foundation for Life! <br> &rarr; Because we believe in the fact that watering a plant continuously for a week just to make it grow as tall as possible seems ridiculous; here we are, doing the right things at the right time. Sharpening your child’s brain, because every child has a potential of its own and we believe in doing justice to the potential by doing what needs to be done. <br> &rarr; PRAYAAG(Sanskrit: पंच-प्रयाग Pañca prayāga) is an expression in Hindu religious ethos, specifically used to connote the five sacred river confluences in the Garhwal Himalayas in the state of Uttarakhand, India. <br> &rarr; We believe that the mind is a holy and powerful entity and hence the name. While the Prayaag at Allahabad is the confluence of the holy rivers, The Ganga, The Yamuna and the Saraswati, Prayaag at Paathshala and Photon Ecademy is the confluence of Logic, Memory and Mind",
          paragraph3: "<b>Summary of the course</b> <br> &rarr; Solving Puzzles of different types and different levels of difficulty <br> &rarr; Brain Gym Workshop <br> &rarr; Memory Techniques <br> &rarr; Logic Workshop ( 10+ topics) <br> &rarr; Data Interpretation Types and Techniques( 5 Topics) <br> &rarr; Laying the Mathematics Foundation ( 30+ topics) <br> &rarr; Vedic Mathematics <br> &rarr; Physics Chemistry Maths Biology [PCMB] Foundations for IIT JEE and NEET <br> &rarr; A detailed list of the syllabus will be provided to you at the time of your admission",
          slug: "paathshala-photon-ecademy-foundation-course-prayaag"
        },
        {
          id: 19,
          image: "/images/blog/blog_images/blog-19.png",
          bio: '',
          date: 'January 12, 2020',
          title: 'JEE Main',
          views: '269 views',
          paragraph1: "<b>Exam Overview of JEE(Main)</b> <br> &rarr; JEE Main is among the toughest exams in the world. Every year, over 12 lakh students appear while only 2,20,000 qualify for JEE Advanced. <br> &rarr;  The Joint Entrance Examination (JEE) is an All-India Common Entrance Exam for getting admissions into engineering colleges across India. <br> &rarr; JEE Main will be conducted twice a year in the month of January and April respectively by National Testing Agency (NTA). <br> &rarr;  It is conducted in two phases: JEE Main and JEE Advanced If you clear the given cut-off for JEE Main, you qualify for JEE Advanced. <br> &rarr; With a JEE Main score you can apply to institutions like NITs, IIITs and other Central or State Funded Institutes Whereas, IITs and ISM, Dhanbad consider results of JEE Advanced for admissions. <br> &rarr; From 2019 the examination will be held only in the computer based mode",
          paragraph2: "<b>Exam Pattern of JEE(Main)</b>",
          paragraph3: "<b>Paper 1</b> <br> &rarr; Subjects: Physics, Chemistry and Mathematics <br> &rarr; Type of questions: Objective (MCQs) <br> &rarr; Mode of examination: Computer based mode only <br> &rarr; Exam duration: 3 hours <br> &rarr; Number of questions: 90 (30 questions from each subject) <br> &rarr; Marking scheme: 4 marks awarded for each correct answer <br> &rarr; Negative marking: 1 mark deducted for each incorrect response",
          paragraph4: "<b>Paper 2</b> <br> &rarr; Section 1: Mathematics Objective (MCQs) <br> &rarr; Section 2: Aptitude test Objective (MCQs) <br> &rarr; Section 3: Drawing test <br> &rarr; Mode of Examination: Offline <br> &rarr; Exam Duration: 3 hours",
          paragraph5: "<b>Admit Card for JEE(Main)</b> <br> &rarr; Once you’ve completed the registration process, you will have to download your Admit Card. <br> &rarr; It is mandatory to carry the Admit Card to the examination Only eligible candidates who have completed the registration process can download the Admit Card.",
          paragraph6: "<b>Frequently Asked Questions (FAQs) related to JEE Main</b>",
          paragraph7: "<b>Q: Can a candidate change the mode of examination?</b> <br> Ans: The JEE Main exam will only be held in the computer based mode. The HRD ministry will organise practice centres from August. These will be free of cost for all aspirants who want to familiarise themselves with the new mode of examination.",
          paragraph8: "<b>Q: Can the candidates opt for both the papers of JEE Main?</b> <br> Ans: Yes, the candidates can appear for both papers in JEE, or can also have the liberty to appear for just one of the two.",
          paragraph9: "<b>Q: Can candidates change the date of their exam?</b> <br> Ans: Candidates can change the date of their exam only if it clashes with something important, like a board exam.",
          paragraph10: "<b>Q: Is it compulsory to have an Aadhaar Card Number to apply for JEE Main ?</b> <br> Ans: Yes, it’s mandatory for candidates to enter their Aadhaar Card Number in the application form in order to register successfully. No application will be accepted without the Aadhaar Card Number.",
          paragraph11: "<b>Q: A candidate has applied for both Paper 1 and Paper 2. Can he or she opt for just one paper now?</b> <br> Ans: There is no compulsion for such candidates to appear in both papers. They can choose to appear for the paper of their choice. However, there will be no refund of fees.",
          paragraph12: "<b>Q: What action is to be taken if the candidate has opted for Hindi or Gujarati medium for the examination but now wants to appear in the English medium?</b> <br> Ans: The JEE Main question paper is bilingual (both in Hindi and English as well as Gujarati and English) for candidates who have opted for Hindi or Gujarati mediums. The candidate can attempt the questions in any medium during the examination.",
          paragraph13: "<b>Q: What colleges can I get into through JEE Main?</b> <br> Ans: IITs, NITs, IIITs and a list of 100 or so central or state funded institutions participate in JEE Main. Though IITs and ISM don’t accept the JEE Main score, they require the JEE Advanced score, this is the first step to getting into the best colleges.",
          paragraph14: "<i><b>Disclaimer</b> <br> For latest updates related to JEE Main, you may visit the official website of JEE Main. The information provided herein is intended to provide a basic over view of the exam only and should not be your treated as your only reference point of information about the exam</i>",
          slug: "jee-main"
        },
        {
          id: 20,
          image: "/images/blog/blog_images/blog-20.png",
          bio: '',
          date: 'December 22, 2020',
          title: 'JEE Advanced',
          views: '258 views',
          paragraph1: "<b>Exam Overview of JEE Advanced</b>",
          paragraph2: "JEE Advanced is one of the toughest exams in India. Over 2.24 lakh students take it every year with only 20,000 getting a rank. JEE (Joint Entrance Exam), an all India common entrance exam for engineering, is held in two stages: <br> Stage 1: JEE Main <br> Stage 2: JEE Advanced",
          paragraph3: "JEE Advanced is the second stage of the Joint Entrance Examination. You are eligible to take JEE Advanced only if you clear the cut-off for JEE Main.",
          paragraph4: "This examination will form the basis for admission to various bachelor’s degree programmes in IITs. IIT Kanpur is to conduct the JEE Advanced 2019 examination for admission to 23 IITs for 12,428 seats, which include Indian School of Mines (ISM), Dhanbad. From 2018, the IITs will also reserve special seats for female engineering aspirants.",
          paragraph5: "<b>Exam Pattern of JEE(Advanced)</b>",
          paragraph6: "JEE Advanced is one of the toughest exams in India. Over 2.24 lakh students take it every year with only 20,000 getting a rank. JEE (Joint Entrance Exam), an all India common entrance exam for engineering, is held in two stages: <br> Stage 1: JEE Main <br> Stage 2: JEE Advanced",
          paragraph7: "JEE Advanced is the second stage of the Joint Entrance Examination. You are eligible to take JEE Advanced only if you clear the cut-off for JEE Main.",
          paragraph8: "This examination will form the basis for admission to various bachelor’s degree programmes in IITs",
          paragraph9: "<i>Syllabus is subject to slight changes from year to year. Check the official JEE Advanced website for the same</i>",
          paragraph10: "<b>Physics Syllabus for JEE (Advanced)</b>",
          paragraph11: "General <br> &rarr; Units and dimensions, dimensional analysis; least count, significant figures; Methods of measurement and error analysis for physical quantities pertaining to the following experiments: Experiments based on using Vernier calipers and screw gauge (micrometer), Determination of g using simple pendulum, Young’s modulus by Searle’s method, Specific heat of a liquid using calorimeter, focal length of a concave mirror and a convex lens using u-v method, Speed of sound using resonance column, Verification of Ohm’s law using voltmeter and ammeter, and specific resistance of the material of a wire using meter bridge and post office box",
          paragraph12: "Mechanics <br >&rarr; Kinematics in one and two dimensions (Cartesian coordinates only), projectiles; Uniform circular motion; Relative velocity. Newton’s laws of motion; Inertial and uniformly accelerated frames of reference; Static and dynamic friction; Kinetic and potential energy; Work and power; Conservation of linear momentum and mechanical energy. Systems of particles; Centre of mass and its motion; Impulse; Elastic and inelastic collisions. Law of gravitation; Gravitational potential and field; Acceleration due to gravity; Motion of planets and satellites in circular orbits; Escape velocity. Rigid body, moment of inertia, parallel and perpendicular axes theorems, moment of inertia of uniform bodies with simple geometrical shapes; Angular momentum; Torque; Conservation of angular momentum; Dynamics of rigid bodies with fixed axis of rotation; Rolling without slipping of rings, cylinders and spheres; Equilibrium of rigid bodies; Collision of point masses with rigid bodies. Linear and angular simple harmonic motions. Hooke’s law, Young’s modulus. Pressure in a fluid; Pascal’s law; Buoyancy; Surface energy and surface tension, capillary rise; Viscosity (Poiseuille’s equation excluded), Stoke’s law; Terminal velocity, Streamline flow, equation of continuity, Bernoulli’s theorem and its applications. Wave motion (plane waves only), longitudinal and transverse waves, superposition of waves; Progressive and stationary waves; Vibration of strings and air columns; Resonance; Beats; Speed of sound in gases; Doppler effect (in sound)",
          paragraph13: "Thermal Physics <br> &rarr; Thermal expansion of solids, liquids and gases; Calorimetry, latent heat; Heat conduction in one dimension; Elementary concepts of convection and radiation; Newton’s law of cooling; Ideal gas laws; Specific heats (Cv and Cp for monoatomic and diatomic gases); Isothermal and adiabatic processes, bulk modulus of gases; Equivalence of heat and work; First law of thermodynamics and its applications (only for ideal gases); Blackbody radiation: absorptive and emissive powers; Kirchhoff’s law; Wien’s displacement law, Stefan’s law.",
          paragraph14: "Electricity and Magnetism <br> &rarr; Coulomb’s law; Electric field and potential; Electrical potential energy of a system of point charges and of electrical dipoles in a uniform electrostatic field; Electric field lines; Flux of electric field; Gauss’s law and its application in simple cases, such as, to find field due to infinitely long straight wire, uniformly charged infinite plane sheet and uniformly charged thin spherical shell. Capacitance; Parallel plate capacitor with and without dielectrics; Capacitors in series and parallel; Energy stored in a capacitor. Biot–Savart’s law and Ampere’s law; Magnetic field near a current-carrying straight wire, along the axis of a circular coil and inside a long straight solenoid; Force on a moving charge and on a current-carrying wire in a uniform magnetic field. Magnetic moment of a current loop; Effect of a uniform magnetic field on a current loop; Moving coil galvanometer, voltmeter, ammeter and their conversions. Electromagnetic induction: Faraday’s law, Lenz’s law; Self and mutual inductance; RC, LR and LC circuits with d.c. and a.c. sources. Electric current; Ohm’s law; Series and parallel arrangements of resistances and cells; Kirchhoff’s laws and simple applications; Heating effect of current.",
          paragraph15: "Optics <br> &rarr; Rectilinear propagation of light; Reflection and refraction at plane and spherical surfaces; Total internal reflection; Deviation and dispersion of light by a prism; Thin lenses; Combinations of mirrors and thin lenses; Magnification. Wave nature of light: Huygen’s principle, interference limited to Young’s double-slit experiment.",
          paragraph16: "Modern Physics <br> &rarr; Atomic nucleus; α, β and γ radiations; Law of radioactive decay; Decay constant; Halflife and mean life; Binding energy and its calculation; Fission and fusion processes; Energy calculation in these processes. Photoelectric effect; Bohr’s theory of hydrogen-like atoms; Characteristic and continuous X-rays, Moseley’s law; de Broglie wavelength of matter waves.",
          paragraph17: "<b>Chemistry Syllabus for JEE(Advanced)</b>",
          paragraph18: "PHYSICAL CHEMISTRY",
          paragraph19: "General topics <br> &rarr; Concept of atoms and molecules; Dalton’s atomic theory; Mole concept; Chemical formulae; Balanced chemical equations; Calculations (based on mole concept) involving common oxidation-reduction, neutralisation, and displacement reactions; Concentration in terms of mole fraction, molarity, molality and normality.",
          paragraph20: "Gaseous and liquid states <br> &rarr; Absolute scale of temperature, ideal gas equation; Deviation from ideality, van der Waals equation; Kinetic theory of gases, average, root mean square and most probable velocitiesand their relation with temperature; Law of partial pressures; Vapour pressure; Diffusion of gases.",
          paragraph21: "Atomic structure and chemical bonding <br> &rarr; Bohr model, spectrum of hydrogen atom, quantum numbers; Wave-particle duality, de Broglie hypothesis; Uncertainty principle; Qualitative quantum mechanical picture of hydrogen atom, shapes of s, p and d orbitals; Electronic configurations of elements (up to atomic number 36); Aufbau principle; Pauli’s exclusion principle and Hund’s rule; Orbital overlap and covalent bond; Hybridisation involving s, p and d orbitals only; Orbital energy diagrams for homonuclear diatomic species; Hydrogen bond; Polarity in molecules, dipole moment (qualitative aspects only); VSEPR model and shapes of molecules (linear, angular, triangular, square planar, pyramidal, square pyramidal, trigonal bipyramidal, tetrahedral and octahedral)",
          paragraph22: "Energetics <br> &rarr; First law of thermodynamics; Internal energy, work and heat, pressure-volume work; Enthalpy, Hess’s law; Heat of reaction, fusion and vapourization; Second law of thermodynamics; Entropy; Free energy; Criterion of spontaneity",
          paragraph23: "Chemical equilibrium <br> &rarr; Law of mass action; Equilibrium constant, Le Chatelier’s principle (effect of concentration, temperature and pressure); Significance of ΔG and ΔG0 in chemical equilibrium; Solubility product, common ion effect, pH and buffer solutions; Acids and bases (Bronsted and Lewis concepts); Hydrolysis of salts.",
          paragraph24: "Electrochemistry <br> &rarr; Electrochemical cells and cell reactions; Standard electrode potentials; Nernst equation and its relation to ΔG; Electrochemical series, emf of galvanic cells; Faraday’s laws of electrolysis; Electrolytic conductance, specific, equivalent and molar conductivity, Kohlrausch’s law; Concentration cells.",
          paragraph25: " Chemical kinetics <br> &rarr; Rates of chemical reactions; Order of reactions; Rate constant; First order reactions; Temperature dependence of rate constant (Arrhenius equation)",
          paragraph26: "Solid state <br> &rarr; Classification of solids, crystalline state, seven crystal systems (cell parameters a, b, c, α, β, γ), close packed structure of solids (cubic), packing in fcc, bcc and hcp lattices; Nearest neighbours, ionic radii, simple ionic compounds, point defects.",
          paragraph27: "Solutions <br> &rarr; Raoult’s law; Molecular weight determination from lowering of vapour pressure, elevation of boiling point and depression of freezing point.",
          paragraph28: "Surface chemistry <br> &rarr; Elementary concepts of adsorption (excluding adsorption isotherms); Colloids: types, methods of preparation and general properties; Elementary ideas of emulsions, surfactants and micelles (only definitions and examples)",
          paragraph29: "Nuclear chemistry <br> &rarr; Radioactivity: isotopes and isobars; Properties of α, β and γ rays; Kinetics of radioactive decay (decay series excluded), carbon dating; Stability of nuclei with respect to protonneutron ratio; Brief discussion on fission and fusion reactions.",
          paragraph30: "INORGANIC CHEMISTRY",
          paragraph31: "&rarr; Isolation/preparation and properties of the following non-metals Boron, silicon, nitrogen, phosphorus, oxygen, sulphur and halogens; Properties of allotropes of carbon (only diamond and graphite), phosphorus and sulphur",
          paragraph32: "&rarr; Preparation and properties of the following compounds Oxides, peroxides, hydroxides, carbonates, bicarbonates, chlorides and sulphates of sodium, potassium, magnesium and calcium; Boron: diborane, boric acid and borax; Aluminium: alumina, aluminium chloride and alums; Carbon: oxides and oxyacid (carbonic acid); Silicon: silicones, silicates and silicon carbide; Nitrogen: oxides, oxyacids and ammonia; Phosphorus: oxides, oxyacids (phosphorus acid, phosphoric acid) and phosphine; Oxygen: ozone and hydrogen peroxide; Sulphur: hydrogen sulphide, oxides, sulphurous acid, sulphuric acid and sodium thiosulphate; Halogens: hydrohalic acids, oxides and oxyacids of chlorine, bleaching powder; Xenon fluorides.",
          paragraph33: "&rarr; Transition elements (3d series) Definition, general characteristics, oxidation states and their stabilities, colour (excluding the details of electronic transitions) and calculation of spin-only magnetic moment; Coordination compounds: nomenclature of mononuclear coordination compounds, cistrans and ionisation isomerisms, hybridization and geometries of mononuclear coordination compounds (linear, tetrahedral, square planar and octahedral)",
          paragraph34: "&rarr; Preparation and properties of the following compounds Oxides and chlorides of tin and lead; Oxides, chlorides and sulphates of Fe2+, Cu2+ and Zn2+; Potassium permanganate, potassium dichromate, silver oxide, silver nitrate, silver thiosulphate.",
          paragraph35: "&rarr; Ores and minerals Commonly occurring ores and minerals of iron, copper, tin, lead, magnesium, aluminium, zinc and silver.",
          paragraph36: "&rarr; Extractive metallurgy Chemical principles and reactions only (industrial details excluded); Carbon reduction method (iron and tin); Self reduction method (copper and lead); Electrolytic reduction method (magnesium and aluminium); Cyanide process (silver and gold).",
          paragraph37: "&rarr; Principles of qualitative analysis Groups I to V (only Ag+, Hg2+, Cu2+, Pb2+, Bi3+, Fe3+, Cr3+, Al3+, Ca2+, Ba2+, Zn2+, Mn2+ and Mg2+); Nitrate, halides (excluding fluoride), sulphate and sulphide.",
          paragraph38: "ORGANIC CHEMISTRY",
          paragraph39: "&rarr; Hybridisation of carbon; σ and π-bonds; Shapes of simple organic molecules; Structural and geometrical isomerism; Optical isomerism of compounds containing up to two asymmetric centres, (R,S and E,Z nomenclature excluded); IUPAC nomenclature of simple organic compounds (only hydrocarbons, mono-functional and bi-functional compounds); Conformations of ethane and butane (Newman projections); Resonance and hyperconjugation; Keto-enoltautomerism; Determination of empirical and molecular formulae of simple compounds (only combustion method); Hydrogen bonds: definition and their effects on physical properties of alcohols and carboxylic acids; Inductive and resonance effects on acidity and basicity of organic acids and bases; Polarity and inductive effects in alkyl halides; Reactive intermediates produced during homolytic and heterolytic bond cleavage; Formation, structure and stability of carbocations, carbanions and free radicals.",
          paragraph40: "&rarr; Preparation, properties and reactions of alkanes Homologous series, physical properties of alkanes (melting points, boiling points and density); Combustion and halogenation of alkanes; Preparation of alkanes by Wurtz reaction and decarboxylation reactions.",
          paragraph41: "&rarr; Preparation, properties and reactions of alkenes and alkynes Physical properties of alkenes and alkynes (boiling points, density and dipole moments); Acidity of alkynes; Acid catalysed hydration of alkenes and alkynes (excluding the stereochemistry of addition and elimination); Reactions of alkenes with KMnO4 and ozone; Reduction of alkenes and alkynes; Preparation of alkenes and alkynes by elimination reactions; Electrophilic addition reactions of alkenes with X2, HX, HOX and H2O (X=halogen); Addition reactions of alkynes; Metal acetylides.",
          paragraph42: "&rarr; Reactions of benzene Structure and aromaticity; Electrophilic substitution reactions: halogenation, nitration, sulphonation, Friedel-Crafts alkylation and acylation; Effect of o-, m- and p-directing groups in monosubstituted benzenes. <br>  Phenols Acidity, electrophilic substitution reactions (halogenation, nitration and sulphonation); Reimer-Tieman reaction, Kolbe reaction.",
          paragraph43: "&rarr; Characteristic reactions of the following (including those mentioned above) Alkyl halides: rearrangement reactions of alkyl carbocation, Grignard reactions, nucleophilic substitution reactions; Alcohols: esterification, dehydration and oxidation, reaction with sodium, phosphorus halides, ZnCl2/concentrated HCl, conversion of alcohols into aldehydes and ketones; Ethers: Preparation by Williamson’s Synthesis; Aldehydes and Ketones: oxidation, reduction, oxime and hydrazone formation; aldol condensation, Perkin reaction; Cannizzaro reaction; haloform reaction and nucleophilic addition reactions (Grignard addition); Carboxylic acids: formation of esters, acid chlorides and amides, ester hydrolysis; Amines: basicity of substituted anilines and aliphatic amines, preparation from nitro compounds, reaction with nitrous acid, azo coupling reaction of diazonium salts of aromatic amines, Sandmeyer and related reactions of diazonium salts; carbylamine reaction; Haloarenes: nucleophilic aromatic substitution in haloarenes and substituted haloarenes (excluding Benzyne mechanism and Cine substitution).",
          paragraph44: "&rarr; Carbohydrates Classification; mono- and di-saccharides (glucose and sucrose); Oxidation, reduction, glycoside formation and hydrolysis of sucrose.",
          paragraph45: "&rarr; Amino acids and peptides General structure (only primary structure for peptides) and physical properties.",
          paragraph46: "&rarr; Properties and uses of some important polymers Natural rubber, cellulose, nylon, teflon and PVC.",
          paragraph47: "&rarr; Practical organic chemistry Detection of elements (N, S, halogens); Detection and identification of the following functional groups: hydroxyl (alcoholic and phenolic), carbonyl (aldehyde and ketone), carboxyl, amino and nitro; Chemical methods of separation of mono-functional organic compounds from binary mixture.",
          paragraph48: "<b>Mathematics Syllabus for JEE Advanced</b>",
          paragraph49: "&rarr; Algebra of complex numbers, addition, multiplication, conjugation, polar representation, properties of modulus and principal argument, triangle inequality, cube roots of unity, geometric interpretations. Quadratic equations with real coefficients, relations between roots and coefficients, formation of quadratic equations with given roots, symmetric functions of roots. Arithmetic, geometric and harmonic progressions, arithmetic, geometric and harmonic means, sums of finite arithmetic and geometric progressions, infinite geometric series, sums of squares and cubes of the first n natural numbers. Logarithms and their properties. Permutations and combinations, binomial theorem for a positive integral index, properties of binomial coefficients.",
          paragraph50: "&rarr; Matrices as a rectangular array of real numbers, equality of matrices, addition, multiplication by a scalar and product of matrices, transpose of a matrix, determinant of a square matrix of order up to three, inverse of a square matrix of order up to three, properties of these matrix operations, diagonal, symmetric and skew-symmetric matrices and their properties, solutions of simultaneous linear equations in two or three variables.",
          paragraph51: "&rarr; Probability Addition and multiplication rules of probability, conditional probability, Bayes Theorem, independence of events, computation of probability of events using permutations and combinations.",
          paragraph52: "&rarr; Trigonometric functions, their periodicity and graphs, addition and subtraction formulae, formulae involving multiple and sub-multiple angles, general solution of trigonometric equations. Relations between sides and angles of a triangle, sine rule, cosine rule, half-angle formula and the area of a triangle, inverse trigonometric functions (principal value only",
          paragraph53: "&rarr; Analytical Geometry Two dimensions: Cartesian coordinates, distance between two points, section formulae, shift of origin. Equation of a straight line in various forms, angle between two lines, distance of a point from a line; Lines through the point of intersection of two given lines, equation of the bisector of the angle between two lines, concurrency of lines; Centroid, orthocentre, incentre and circumcentre of a triangle. Equation of a circle in various forms, equations of tangent, normal and chord. Parametric equations of a circle, intersection of a circle with a straight line or a circle, equation of a circle through the points of intersection of two circles and those of a circle and a straight line. Equations of a parabola, ellipse and hyperbola in standard form, their foci, directrices and eccentricity, parametric equations, equations of tangent and normal. Locus problems. Three dimensions: Direction cosines and direction ratios, equation of a straight line in space, equation of a plane, distance of a point from a plane.",
          paragraph54: "&rarr; Differential Calculus Real valued functions of a real variable, into, onto and one-to-one functions, sum, difference, product and quotient of two functions, composite functions, absolute value, polynomial, rational, trigonometric, exponential and logarithmic functions. Limit and continuity of a function, limit and continuity of the sum, difference, product and quotient of two functions, L’Hospital rule of evaluation of limits of functions. Even and odd functions, inverse of a function, continuity of composite functions, intermediate value property of continuous functions. Derivative of a function, derivative of the sum, difference, product and quotient of two functions, chain rule, derivatives of polynomial, rational, trigonometric, inverse trigonometric, exponential and logarithmic functions. Derivatives of implicit functions, derivatives up to order two, geometrical interpretation of the derivative, tangents and normals, increasing and decreasing functions, maximum and minimum values of a function, Rolle’s theorem and Lagrange’s mean value theorem.",
          paragraph55: "&rarr; Integral Calculus Integration as the inverse process of differentiation, indefinite integrals of standard functions, definite integrals and their properties, fundamental theorem of integral calculus. Integration by parts, integration by the methods of substitution and partial fractions, application of definite integrals to the determination of areas involving simple curves. Formation of ordinary differential equations, solution of homogeneous differential equations, separation of variables method, linear first order differential equations.",
          paragraph56: "&rarr; Vectors Addition of vectors, scalar multiplication, dot and cross products, scalar triple products and their geometrical interpretations.",
          paragraph57: "<i><b>Disclaimer</b> <br> For latest updates related to JEE Advanced, you may visit the official website of JEE Advanced. The information provided herein is intended to provide a basic over view of the exam only and should not be your treated as your only reference point of information about the exam</i>",
          slug: "jee-advanced"
        },
        {
          id: 21,
          image: "/images/blog/blog_images/blog-21.png",
          bio: '',
          date: 'November 18, 2019',
          title: 'NEET',
          views: '216 views',
          paragraph1:"<b>Exam Overview</b>",
          paragraph2: "The National Eligibility cum Entrance Test (NEET) is held yearly to help students secure admission to the top medical institutions in India.",
          paragraph3: "NEET will be conducted by National Testing Agency (NTA) from 2019.",
          paragraph4: "All major dental and medical colleges offer students admission on the basis of their NEET scores, excluding AIIMS and JIPMER.",
          paragraph5: "There are 63,985 medical seats in private, central and state-funded institutions under NEET.",
          paragraph6: "The examination is conducted in 10 different languages: English, Hindi, Tamil, Telugu, Marathi, Bengali, Assamese, Gujarati, Oriya and Kannada.",
          paragraph7: "<b>Exam Pattern of NEET</b>",
          paragraph8: "Subjects: Physics, Chemistry and Biology.",
          paragraph9: "Type of questions: Objective (MCQs with 4 options).",
          paragraph10: "Mode of examination: Pen and paper based test.",
          paragraph11: "Exam duration: 3 hours.",
          paragraph12: "Number of questions: 180.",
          paragraph13: " Marking scheme: 4 marks awarded for each correct answer.",
          paragraph14: "Negative marking: 1 mark deducted for each incorrect answer.",
          paragraph15: "Languages: English, Hindi, Assamese, Bengali, Gujarati, Marathi, Tamil, Telugu, Oriya and Kannada.",
          paragraph16: "Here is the subject-wise breakdown of questions:",
          paragraph17: "Physics: 45",
          paragraph18: "Chemistry: 45",
          paragraph19: "Biology: 90",
          paragraph20: "<i>The following list is subject to change from year to year</i>",
          paragraph21: "<b>Top 10 Colleges for NEET Aspirants</b>",
          paragraph22: "1 Maulana Azad Medical College, New Delhi.",
          paragraph23: "2 Lady Hardinge Medical College, New Delhi.",
          paragraph24: "3 King George Medical College, Lucknow.",
          paragraph25: "4 Institute of Medical Sciences, Banaras Hindu University, Varanasi.",
          paragraph26: "5 Christian Medical College, Ludhiana.",
          paragraph27: "6 Grant Medical College, Mumbai.",
          paragraph28: "7 BJMC, Ahmedabad.",
          paragraph29: "8 BJMC, Pune.",
          paragraph30: "9 Kolkata Medical College, Kolkata.",
          paragraph31: "10 Assam Medical College, Dibrugarh, Assam.",
          paragraph32: "<i><b>Disclaimer</b> <br> For latest updates related to JEE Main, you may visit the official website of JEE Main. The information provided herein is intended to provide a basic over view of the exam only and should not be your treated as your only reference point of information about the exam</i>",
          slug: "neet"
        },
        {
          id: 22,
          image: "/images/blog/blog_images/blog-22.png",
          bio: '',
          date: 'October 20, 2019',
          title: 'BITSAT',
          views: '196 views',
          paragraph1: "<b>Exam Overview of BITSAT</b>",
          paragraph2: "What is BITSAT?",
          paragraph3: "The Birla Institute of Technology & Science conducts the BIT Science Aptitude Test (BITSAT) every year.",
          paragraph4: "There are three institutions that consider BITSAT scores.",
          paragraph5: "This university-level examination is conducted in order to provide admission to UG and PG courses.",
          paragraph6: "<b>Exam Pattern of BITSAT</b>",
          paragraph7: "Subjects: Physics, Chemistry and Mathematics or Biology",
          paragraph8: "Type of questions: Objective (MCQs)",
          paragraph9: "Mode of examination: Online",
          paragraph10: "Exam duration: 3 hours",
          paragraph11: "Number of questions: 150 (450 marks)",
          paragraph12: "Marking scheme: 3 marks awarded for each correct answer. Negative marking 1 mark deducted for each incorrect response",
          paragraph13: "Note: If you finish the 150 questions in less than the allotted time, there are 12 bonus questions too. Remember that you have to necessarily attempt all 150 questions and can’t go back to them once you’ve taken up the bonus section.",
          paragraph14: "Physics: 40 Questions",
          paragraph15: "Chemistry: 40 Questions",
          paragraph16: "Mathematics/Biology: 45 Questions",
          paragraph17: "English (Proficiency) and Logical Reasoning: 15+10 (25) Questions",
          paragraph18: "Total: 150 Questions",
          paragraph19: "<b>All you need to know about BITS Pilani</b>",
          paragraph20: "The Birla Institute of Technology & Science, BITS Pilani is an all-India Institute for higher education. The Institute is a dream come true of its founder late Mr. G.D.Birla – an eminent industrialist, a participant in the Indian freedom struggle and a close associate of the Father of Indian Nation late Mr. Mohandas Karamchand Gandhi (Mahatma Gandhi). What started in the early 1900s as a small school, blossomed into a set of colleges for higher education, ranging from the Humanities to Engineering until 1964 when all these colleges amalgamated to culminate into a unique Indian University of International standing. This university was christened as the Birla Institute of Technology and Science, Pilani, known to many as BITS, Pilani. Over the years, BITS has provided the highest quality technical education to students from all over India admitted on the basis of merit. Its graduates may be found throughout the world in all areas of engineering, science, and commerce. BITS symbolizes the maturing of the Indian technical ability and “can-do” entrepreneurial spirit, especially as derived from the private sector. BITS is located in the Vidya Vihar campus adjacent to the town of Pilani in Rajasthan. Pilani is the hometown of the Birla family and has a population of about 50,000. It is about 200 km west of Delhi and about 220 km north of Jaipur. The Institute buildings, hostels and residential quarters for staff with neatly laid out roads, lawns and gardens constitute the BITS Campus of about 328 acres.",
          paragraph21: "<b>All you need to know about BITS Hyderabad</b>",
          paragraph22: "BITS Hyderabad has one of the most beautiful college campuses in India. It is planned for this to become the largest BITS campus. One drawback, however, is the distance from the main city of Hyderabad-27 km. BITS Pilani, Hyderabad campus has been equipped with the latest technology, which reflects in the labs, classrooms, and hostels. All hostels are single occupancy, right from the first year onwards. They are equipped with other basic facilities, such as 24×7 WiFi, TVs, TT tables, chess boards, etc. There are 6 hostels for boys and 2 for girls. The campus also has other basic facilities like sports grounds (football, tennis, etc), a bank, clinic, computer centre, etc.",
          paragraph23: "<b>All you need to know about BITS Goa</b>",
          paragraph24: "BITS Goa, which was founded in 2004, is a technical and science institute for higher education in India. The craze of experiencing college life in a place like Goa along with the great quality of curriculum and teaching methodology of BITS Goa is what makes a student desire a seat in this institution. The campus of BITS Goa is located in Zuarinagar, Goa, on the banks of the Zuari River. Around 2600 students reside in the campus. The campus of BITS Goa was listed as number 7 in the list of the most beautiful campuses in India by HolidayIQ.com. Situated in the surroundings of the bank of river Zuari, the campus boasts of a unique scenic beauty and panoramic view of waterways, forests, landscapes and hillocks. The BITS Pilani K K Birla Goa Campus, is about 10 kms south of Vasco-da-Gama, 20 kms north of Margaon and 7 kms east of Goa Airport, along National Highway – 17B, Bypass road. The Campus houses the Main building, having academic and administrative offices, Guest House, Hostels for boys and girls, Student Activity Centre, faculty and staff quarters, Medical Centre, Playground and Shopping Complex. As far as sports facilities is concerned, BITS Goa encourages its students for active participation in different sports and for the same along with a common playground and courts for Basketball, Tennis and Badminton, BITS Goa Campus has a BCCI-recognized cricket ground maintained by the Goa Cricket Association that has hosted several national level tournaments such as the Vijay Hazare Trophy and a football ground maintained by Salgaocar F.C.",
          paragraph25: "Academics: The academic course structure of BITS Goa is governed by the university of BITS Pilani. However, each campus has its own autonomous administration, student welfare division, faculty recruitment and placement division. Being an autonomous institute, students also have options of other programs apart from the ones they are admitted in. This may be done by aid of various systems.",
          paragraph26: "Dual Degree System: BITS Pilani, Goa Campus offers a dual degree to the students of Master of Science programs. Under the dual degree scheme, a student is offered two separate degrees on graduation : a degree in Master of Science (Hons.) and in Bachelor of Engineering (Hons.) However, the program increases the duration of his/her stay on campus by at least two semesters. The compulsory disciplinary courses of the second program are completed in the seventh and eighth semesters. The final year (ninth and tenth semester) is dedicated for two, semester long, off campus industrial training internships or master’s thesis.",
          paragraph27: "Program Transfer: BITS Goa also offers flexibility in opting for other courses or to transfer from one program to another at the end of first year, if the student has performed well in academics.",
          paragraph28: "If the student is in the top 10 among full batch of students of the campus in terms of CGPA after their first year, then it is allowed for the student to take a B.E. + B.E. dual degree.",
          paragraph29: "If the student is in the top 30 students of the campus in terms of CGPA after their first year, one can abandon their degree for another, i.e. transfer from one program to another. BITS Goa also gives due importance to Humanities and Arts and it is mandatory for a student to take at least three humanity courses in total.",
          paragraph30: "<i><b>Disclaimer</b> <br> For latest updates related to BITSAT, you may visit the official website of BITSAT. The information provided herein is intended to provide a basic over view of the exam only and should not be your treated as your only reference point of information about the exam</i>",
          slug: "bitsat"
        },




      ]

    }
  },
  
}
</script>

<style>
.topic {
  word-wrap: break-word;
  
}

.topic:hover {
  background: none;
  background-image: url("/images/blog/blog-pagination-1.jpg");
  background-position: center;
  background-size: cover;
}

h6 {
  font-weight: 700;
  line-height: 1.3;
  margin-top: 0;
  font-size: 1rem;
  color: white;
}

.author-biographical-info {
  margin-top: 15px;
  font-size: 15px;
  color: #ddd;
}

.block-quote {
  border-left: 4px solid #20ad96;
  color: white;
  padding-left: 20px;
  margin: 50px 0 44px 48px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.78;
  max-width: 660px;
}

.before::before {
  content: " ";
  width: 4px;
  height: 4px;
  background: #ababab;
  position: absolute;
  border-radius: 50%;
  left: -14px;
  top: 14px;
}
</style>