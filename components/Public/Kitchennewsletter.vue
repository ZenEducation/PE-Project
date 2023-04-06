<template>
  <div class="padding-responsive blue">
    <div
      class="relative py-[100px] px-5 w-12/12 flex flex-col md:flex-row items-center justify-center lg:justify-between bg-[url('/images/bg/subscribe-section-bg.png')] bg-no-repeat bg-center"
    >
      <div class="absolute top-10 left-[20%]">
        <img src="/images/icons/icon-paper-plane.png" alt="icon" />
      </div>
      <div class="w-full md:w-12/12">
        <h3
          class="title title-responsive md:mr-20 text-center mb-4 md:mb-0 md:text-right"
        >
          Newsletter to get in touch
        </h3>
      </div>
      <div class="w-full relative">
        <input
          class="inputstyle h-full w-full min-h-[52px]"
          placeholder="Your E-mail"
          type="text"
        />
        <icon
          class="absolute right-0 bottom-0 bg-[#333] min-h-[52px] min-w-[52px] rounded-r-md"
          name="uil:arrow-right"
        />
      </div>
    </div>
  </div>

  <div>
    <kitchentestimonial />
  </div>

  <div class="blue px-5">
    <div class="text-center">
      <div class="title-responsive text-white font-bold">
        Follow me on Instagram
      </div>

      <div class="text-[#6ac5f1] subtitle-responsive font-medium normal-case">
        @nytcooking
      </div>
    </div>

    <div
      class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center mt-20"
    >
      <div v-for="social in socials" :key="social.like">
        <div
          class="hover relative w-full h-full lg:max-w-[171px] lg:max-h-[171px]"
        >
          <img
            class="w-full h-full lg:max-w-[171px] lg:max-h-[171px]"
            src="/images/instagram/instagram-md-1.jpg"
            alt="instagram image"
          />
          <div
            class="social bg-black/25 absolute top-0 left-0 w-full h-full flex justify-center items-center content-center"
          >
            <div class="flex items-center text-white text-[13px] px-1">
              <icon class="w-4 h-4" name="uil:heart" />{{ social.like }}
            </div>
            <div class="flex items-center text-white text-[13px] px-1">
              <icon class="w-4 h-4" name="uil:comment-dots" />
              {{ social.comment }}
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
            socials:[
                {
                    like: '1k',
                    comment: '17'
                },
                                {
                    like: '1k',
                    comment: '17'
                },
                                {
                    like: '1k',
                    comment: '17'
                },
                                {
                    like: '1k',
                    comment: '17'
                },
                                {
                    like: '1k',
                    comment: '17'
                },
                                {
                    like: '1k',
                    comment: '17'
                },
            ]
        }
    }
}
</script>

<style scoped>
.title {
  font-weight: 400;
  line-height: 1.42;
  font-family: "Playfair Display", serif;
  color: #333;
}

.social {
  opacity: 0;
}
.hover:hover .social {
  opacity: 1;
}
</style>