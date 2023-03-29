<template>
  <div v-for="blog in blogs" :key="blog.id">
    <div class="w-12/12 py-10 border-b border-b-1 border-[#555]">
      <img class="w-full rounded-md" src="/images/blog/370/blog-12.jpg"
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
              <img src="/images/blog/blog-avatar.jpg" alt="image" class="rounded-[50%] mr-2 w-[32px] h-[32px]" />
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

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mt-4">
            {{ blog.paragraph1 }}
          </div>
          <br />

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74]">
            {{ blog.paragraph2 }}
          </div>
          <br />

          <blockquote class="dark:text-[white] text-[#696969] text-lg font-medium leading-[1.78] max-w-[660px] ml-12 mr-0 mt-[50px] mb-11 pl-5 border-l-4 border-l-[#20ad96] border-solid">
            <p>
              I really enjoy that feeling of walking around a new place not
              knowing what I might discover around the corner. I often try to
              recreate the feeling of a place I have visited in my personal
              work… I really enjoy the experience of looking at a painting and
              being transported back to that experience. It’s a nice way to
              escape from your day to day!
            </p>
          </blockquote>

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mb-[1rem]">
            {{ blog.paragraph3 }}
          </div>

          <div class="text-[15px] dark:text-[#ddd] text-[#696969] leading-[1.74] mb-[1rem]">
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
                <!-- <icon class="w-5 h-5 text-[#20ad96]" name="uil:share-alt" /> -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-[#20ad96] group-hover:fill-white" viewBox="0 0 24 24"><path  d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Zm0-16q.425 0 .713-.288T19 5q0-.425-.288-.713T18 4q-.425 0-.713.288T17 5q0 .425.288.713T18 6ZM6 13q.425 0 .713-.288T7 12q0-.425-.288-.713T6 11q-.425 0-.713.288T5 12q0 .425.288.713T6 13Zm12 7q.425 0 .713-.288T19 19q0-.425-.288-.713T18 18q-.425 0-.713.288T17 19q0 .425.288.713T18 20Zm0-15ZM6 12Zm12 7Z"/></svg>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex flex-row items-start my-10">
      <div class="flex flex-col justify-center items-center px-5">
        <img class="rounded-[50%] mb-4 min-w-[100px] min-h-[100px]" src="/images/author/blog-author.jpg" alt="image" />

        <div class="flex items-center gap-2">
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:twitter" />
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:facebook-f" />
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:instagram" />
        </div>
      </div>
      <div>
        <h6 class="uppercase">Owen Christ</h6>
        <div class="text-[15px] dark:text-[#ddd] text-[#696969] mt-[15px]">
          Owen Christ is an author, blogger, and designer living in a suburb of
          Washington, DC. When she’s not designing, blogging, or writing, Owen
          can be found with her head in a book or pinning like a madman.
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
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
    </div>

    <!-- comments start -->

    <div>
      <h6 class="text-[24px] my-20 text-[#333] dark:text-[#fff]">
        Comments <span class="text-[#20AD96]">(3)</span>
      </h6>

      <div class="flex flex-row items-start mb-10">
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
      </div>
    </div>

    <!-- comment end -->

    <div>
      <blogcontactform />
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
          image: "/images/courses/370/course-1.jpg",
          name: 'Owen Christ',
          bio: 'Gym coaching',
          date: 'Jan 15, 2020',
          title: '10 Essential Bodyweight Exercises',
          views: '46 views',
          paragraph1: 'Paging through a photo album detailing every moment of a friend’s poolside vacation might not be a riveting activity, but flipping through Angela Mckay’s sketchbooks filled with tiny paintings of her travels certainly is. The Brooklyn-based pattern designer and illustrator of documents the lush scenery, cavernous waters, and hilly villages she sees on the streets of Lagos, Calamosche Beach on Italy’s southern coast, and in Joshua Tree National Park. Mckay generally positions her miniature paintings against the real-life backdrop, juxtaposing the two depictions that she then shares on Instagram',
          paragraph2: 'The artist tells Colossal that she frequently recreates some of the pieces in her sketchbooks on a larger scale after returning home, relying on her earlier representation for the tiny details she otherwise might not remember. “Often when I’m traveling, I have this urgent feeling that I need to capture everything I’m experiencing, the sights, feelings and textures of a place,” she says.',
          paragraph3: 'The pocket-size notebooks are a crucial component of Mckay’s process, and she utilizes them in both her personal projects and her work for clients. “They just allow me to play with ideas and explore other directions without having to commit to anything,” she says. To pick up one of Mckay’s watercolor and gouache'

        },



      ]

    }
  }
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