<template>
  <div v-for="blog in blogs" :key="blog.id">
    <div class="w-12/12 py-10 border-b border-b-1 border-[#555]">
      <img
        class="w-full rounded-md"
        src="/images/blog/370/blog-12.jpg"
        alt="Connection Between Self-Portraits and Identity"
      />

      <div>
        <div class="p-8 pl-0 pb-10 blue rounded-b-md">
          <span
            class="text-[15px] text-[#8C89A2] tracking-[1px] uppercase leading-[1.74] mb-1"
          >
            {{ blog.bio }}</span
          >
          <h3
            class="text-[24px] text-white hover: font-extrabold leading-[1.5] mb-1"
          >
            {{ blog.title }}
          </h3>

          <div
            class="flex justify-start items-center mt-5 text-[14px] font-light text-[#ddd]"
          >
            <span class="flex justify-center items-center mr-4">
              <img
                src="/images/blog/blog-avatar.jpg"
                alt="image"
                class="rounded-[50%] mr-2 w-[32px] h-[32px]"
              />
              {{ blog.name }}
            </span>

            <span class="flex justify-center items-center">
              <icon class="w-4 h-4 mr-2" name="uil:calender" />
              {{ blog.date }}
            </span>

            <span class="ml-4 flex justify-center items-center">
              <icon class="w-4 h-4 mr-2" name="uil:eye" />
              {{ blog.views }}
            </span>
          </div>

          <div class="text-[15px] text-[#ddd] leading-[1.74] mt-4">
            {{ blog.paragraph1 }}
          </div>
          <br />

          <div class="text-[15px] text-[#ddd] leading-[1.74]">
            {{ blog.paragraph2 }}
          </div>
          <br />

          <blockquote class="block-quote">
            <p>
              I really enjoy that feeling of walking around a new place not
              knowing what I might discover around the corner. I often try to
              recreate the feeling of a place I have visited in my personal
              work… I really enjoy the experience of looking at a painting and
              being transported back to that experience. It’s a nice way to
              escape from your day to day!
            </p>
          </blockquote>

          <div class="text-[15px] text-[#ddd] leading-[1.74] mb-[1rem]">
            {{ blog.paragraph3 }}
          </div>

          <div class="text-[15px] text-[#ddd] leading-[1.74] mb-[1rem]">
            <p>Source: thisiscolossal.com</p>
          </div>

          <div class="flex items-center justify-between pt-4">
            <div class="flex items-center">
              <icon name="uil:tag-alt" />
              <p class="text-[15px] text-[#ddd] leading-[1.74] ml-2">
                Artist, Education
              </p>
            </div>
            <div class="flex items-center text-[#ddd]">
              Share this post

              <span
                class="border-[2px] border-[#555] rounded-[50%] w-12 h-12 flex justify-center items-center ml-4"
              >
                <icon class="w-5 h-5 text-[#20ad96]" name="uil:share-alt" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex flex-row items-start my-10">
      <div class="flex flex-col justify-center items-center px-5">
        <img
          class="rounded-[50%] mb-4 min-w-[100px] min-h-[100px]"
          src="/images/author/blog-author.jpg"
          alt="image"
        />

        <div class="flex items-center gap-2">
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:twitter" />
          <icon
            class="w-[13px] h-[13px] text-[#8C89A2]"
            name="uil:facebook-f"
          />
          <icon class="w-[13px] h-[13px] text-[#8C89A2]" name="uil:instagram" />
        </div>
      </div>
      <div>
        <h6 class="uppercase">Owen Christ</h6>
        <div class="author-biographical-info">
          Owen Christ is an author, blogger, and designer living in a suburb of
          Washington, DC. When she’s not designing, blogging, or writing, Owen
          can be found with her head in a book or pinning like a madman.
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <div
        class="topic rounded-md flex items-center justify-start bg-[#111] max-w-[373px]"
      >
        <icon class="text-[30px] mr-3 text-[#20AD96]" name="uil:angle-left-b" />
        <h6 class="leading-[1.56] font-bold text-[18px]">
          Connection Between Self-Portraits and Identity
        </h6>
      </div>

      <div
        class="topic rounded-md flex items-center justify-end bg-[#111] max-w-[373px]"
      >
        <h6 class="leading-[1.56] font-bold text-[18px] text-right">
          Brush Strokes Energize Trees in Paintings
        </h6>
        <icon
          class="text-[30px] ml-3 text-[#20AD96]"
          name="uil:angle-right-b"
        />
      </div>
    </div>

    <!-- comments start -->

    <div>
      <h6 class="text-[24px] my-20">
        Comments <span class="text-[#20AD96]">(3)</span>
      </h6>

      <div class="flex flex-row items-start mb-10">
        <div class="flex flex-col justify-center items-center px-5">
          <img
            class="rounded-[50%] mb-4 min-w-[80px] min-h-[80px]"
            src="/images/author/blog-author.jpg"
            alt="image"
          />
        </div>
        <div>
          <div class="flex justify-between items-center">
            <h6 class="uppercase">James scott</h6>
            <div
              class="relative before text-[15px] text-[#ababab] leading-[1.74] italic"
            >
              November 13, 2018 at 4:50 am
            </div>
          </div>
          <div class="author-biographical-info">
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
          <img
            class="rounded-[50%] mb-4 min-w-[80px] min-h-[80px]"
            src="/images/author/blog-author.jpg"
            alt="image"
          />
        </div>
        <div>
          <div class="flex justify-between items-center">
            <h6 class="uppercase">HARRY FERGUSON</h6>
            <div
              class="relative before text-[15px] text-[#ababab] leading-[1.74] italic"
            >
              February 13, 2019 at 4:51 am
            </div>
          </div>
          <div class="author-biographical-info">
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
    data(){
        return{
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
  width: 100%;
  padding: 20px 30px 20px 50px;
  position: relative;
  background: #111;
  background-image: none;
  transition: all 0.3s ease-in-out;
  padding: 30px 10px;
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